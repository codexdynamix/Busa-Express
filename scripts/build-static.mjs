#!/usr/bin/env node
process.env.NODE_ENV = "production";
import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
const STATIC = join(ROOT, ".vercel/output/static");
const SERVER_FUNC = join(ROOT, ".vercel/output/functions/__server.func/index.mjs");

async function buildStatic() {
  console.log("[build-static] Preparing static output for Hostinger...");

  if (!existsSync(STATIC) || !existsSync(SERVER_FUNC)) {
    console.error("[build-static] Error: .vercel/output build artifacts not found.");
    process.exit(1);
  }

  // Ensure dist directory exists
  mkdirSync(DIST, { recursive: true });

  // Copy all static assets from .vercel/output/static into dist
  console.log(`[build-static] Copying static assets from ${STATIC} to ${DIST}...`);
  cpSync(STATIC, DIST, { recursive: true });

  // Render index.html via the SSR server bundle
  console.log("[build-static] Rendering index.html from server bundle...");
  const serverModule = await import(SERVER_FUNC);
  const handler = serverModule.default;

  const req = new Request("http://localhost/", {
    headers: {
      accept: "text/html",
    },
  });

  const res = await handler.fetch(req);
  if (!res.ok) {
    throw new Error(`Server returned status ${res.status}: ${res.statusText}`);
  }

  let html = await res.text();

  // Ensure index.html has proper UTF-8 and doctype
  if (!html.toLowerCase().startsWith("<!doctype html")) {
    html = "<!DOCTYPE html>\n" + html;
  }

  writeFileSync(join(DIST, "index.html"), html, "utf8");
  console.log("[build-static] Wrote dist/index.html (length: " + html.length + " bytes)");

  // Write .htaccess for Apache / Hostinger SPA routing and caching
  const htaccess = `# Hostinger Apache configuration for Busa Express SPA
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresDefault "access plus 1 month"
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
</IfModule>
`;
  writeFileSync(join(DIST, ".htaccess"), htaccess, "utf8");
  console.log("[build-static] Wrote dist/.htaccess");

  console.log("[build-static] Static build complete in dist/");
}

buildStatic().catch((err) => {
  console.error("[build-static] Build failed:", err);
  process.exit(1);
});
