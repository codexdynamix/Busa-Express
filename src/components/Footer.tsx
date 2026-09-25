import React from 'react';
import { Phone, Facebook, ArrowUp } from 'lucide-react';
import { BUSA_CONTACTS } from '@/data/busData';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg text-muted text-xs border-t border-ink/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-ink/8">
          
          {/* Brand Lockup */}
          <div className="lg:col-span-2 space-y-3">
            <BrandLogo size="md" variant="dark" />

            <p className="text-xs text-muted leading-relaxed max-w-sm pt-1">
              Cross-border road passenger mobility between South Africa and Zimbabwe. Scania and Mercedes-Benz luxury fleet, Starlink satellite connectivity, and Beitbridge border fast-tracking.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={BUSA_CONTACTS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-card hover:bg-surface border border-ink/8 flex items-center justify-center text-facebook transition-colors"
                title="Follow Busa Express on Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://wa.me/${BUSA_CONTACTS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-card hover:bg-surface border border-ink/8 text-ink text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3 h-3 text-success" />
                <span>WhatsApp: {BUSA_CONTACTS.phoneSaPrimary}</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-ink">Quick Links</div>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onScrollToSection('booking-section')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Book Coach
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('tracking-section')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Find My Coach (Live GPS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('fleet-section')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Executive Fleet
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('schedules-section')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Timetables & Routes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('inquiries-section')}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Charter & Freight Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Key Stations */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-ink">Major Stations</div>
            <div className="space-y-1.5 text-xxs">
              <div>
                <strong className="text-ink block">Johannesburg Depot</strong>
                <span>Powerhouse Terminal, 102 Wanderers St</span>
              </div>
              <div>
                <strong className="text-ink block">Pretoria Central</strong>
                <span>Bosman Station Terminal</span>
              </div>
              <div>
                <strong className="text-ink block">Harare Roadport</strong>
                <span>Corner 5th St & Robert Mugabe</span>
              </div>
              <div>
                <strong className="text-ink block">Bulawayo Station</strong>
                <span>Spar 5th Ave & G. Silundika</span>
              </div>
            </div>
          </div>

          {/* 24/7 Operations Desk */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-ink">24/7 Operations Desk</div>
            <div className="space-y-1 text-xs font-mono">
              <div>
                <span className="text-muted block text-2xs font-sans">South Africa Hotline:</span>
                <a href={`tel:${BUSA_CONTACTS.phoneSaPrimary}`} className="text-ink hover:text-primary">
                  {BUSA_CONTACTS.phoneSaPrimary}
                </a>
              </div>
              <div>
                <span className="text-muted block text-2xs font-sans">SA Secondary Dispatch:</span>
                <a href={`tel:${BUSA_CONTACTS.phoneSaSecondary}`} className="text-ink hover:text-primary">
                  {BUSA_CONTACTS.phoneSaSecondary}
                </a>
              </div>
              <div>
                <span className="text-muted block text-2xs font-sans">Zimbabwe Hotline:</span>
                <a href={`tel:${BUSA_CONTACTS.phoneZimPrimary}`} className="text-ink hover:text-primary">
                  {BUSA_CONTACTS.phoneZimPrimary}
                </a>
              </div>
              <div>
                <span className="text-muted block text-2xs font-sans">Harare Roadport Desk:</span>
                <a href={`tel:${BUSA_CONTACTS.phoneZimSecondary}`} className="text-ink hover:text-primary">
                  {BUSA_CONTACTS.phoneZimSecondary}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} Busa Express Luxury Coaches. All rights reserved.</span>
            <span>·</span>
            <span>South Africa & Zimbabwe Cross-Border Transit</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-ink hover:text-primary transition-colors cursor-pointer font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
