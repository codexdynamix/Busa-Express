import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Calendar, C as Gauge, D as CircleAlert, E as CircleCheck, F as ArrowRightLeft, I as Armchair, M as ArrowUp, N as ArrowUpRight, O as ChevronRight, P as ArrowRight, S as MapPin, T as Coffee, _ as Phone, a as Truck, b as Menu, c as Star, d as ShieldCheck, f as Send, g as Printer, h as QrCode, i as Users, j as Bus, k as ChevronLeft, l as Sparkles, m as RefreshCw, n as X, p as Search, r as Wifi, s as Thermometer, t as Zap, u as Signal, v as Package, w as Facebook, x as Maximize2, y as Navigation } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DnDHOBOt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BrandLogo = ({ size = "md", variant = "dark", showSubtitle }) => {
	const isLight = variant === "light";
	const displaySubtitle = showSubtitle ?? size === "lg";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5 sm:gap-3 group select-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `${{
				sm: "w-7 h-7",
				md: "w-8 h-8 sm:w-9 sm:h-9",
				lg: "w-11 h-11 sm:w-12 sm:h-12"
			}[size]} relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 100 100",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				className: "w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						id: "bus-swirl-wing",
						d: "\n                M 48.5 51.5\n                C 42 48, 34.5 40, 34 28.5\n                C 33.5 17.5, 41.5 13.5, 52 15\n                C 58 16, 65 19, 73.5 22.5\n                C 68.5 28.5, 62.5 33, 58 35.5\n                L 52 33\n                C 49 39.5, 47 46, 48.5 51.5 Z\n              "
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("use", {
						href: "#bus-swirl-wing",
						fill: "#0062cc",
						stroke: "#ffffff",
						strokeWidth: "3",
						strokeLinejoin: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("use", {
						href: "#bus-swirl-wing",
						transform: "rotate(90, 50, 50)",
						fill: "#28b835",
						stroke: "#ffffff",
						strokeWidth: "3",
						strokeLinejoin: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("use", {
						href: "#bus-swirl-wing",
						transform: "rotate(180, 50, 50)",
						fill: "#0062cc",
						stroke: "#ffffff",
						strokeWidth: "3",
						strokeLinejoin: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("use", {
						href: "#bus-swirl-wing",
						transform: "rotate(270, 50, 50)",
						fill: "#28b835",
						stroke: "#ffffff",
						strokeWidth: "3",
						strokeLinejoin: "round"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5 leading-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `${{
						sm: "text-sm",
						md: "text-base sm:text-base",
						lg: "text-xl sm:text-2xl"
					}[size]} font-bold tracking-tight ${isLight ? "text-on-primary" : "text-ink"}`,
					children: "Busa Express"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-success shrink-0" })]
			}), displaySubtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `${{
					sm: "text-2xs",
					md: "text-2xs",
					lg: "text-xxs"
				}[size]} font-medium tracking-normal text-muted mt-1 ${isLight ? "text-on-primary/60" : "text-muted"}`,
				children: "Busachamone Luxury Coaches"
			})]
		})]
	});
};
var TERMINALS = [
	{
		id: "JNB",
		city: "Johannesburg",
		terminalName: "Powerhouse Terminal",
		country: "South Africa",
		address: "102 Wanderers St, Johannesburg CBD, Gauteng"
	},
	{
		id: "MID",
		city: "Midrand",
		terminalName: "Big Bird Engen Stop",
		country: "South Africa",
		address: "N1 Highway & New Road, Midrand"
	},
	{
		id: "PTA",
		city: "Pretoria",
		terminalName: "Bosman Station Terminal",
		country: "South Africa",
		address: "Bosman Street & Scheiding St, Pretoria Central"
	},
	{
		id: "PLK",
		city: "Polokwane",
		terminalName: "Polokwane Ultra City Depot",
		country: "South Africa",
		address: "N1 Highway Bypass, Polokwane"
	},
	{
		id: "MSN",
		city: "Musina",
		terminalName: "Musina Gateway Stop",
		country: "South Africa",
		address: "National Road N1, Musina Border Gate"
	},
	{
		id: "BBR",
		city: "Beitbridge",
		terminalName: "Beitbridge Border VIP Lounge",
		country: "Zimbabwe",
		address: "Border Post Transit Plaza, Beitbridge"
	},
	{
		id: "GWA",
		city: "Gwanda",
		terminalName: "Gwanda Central Depot",
		country: "Zimbabwe",
		address: "Soutter St & 6th Ave, Gwanda"
	},
	{
		id: "BYO",
		city: "Bulawayo",
		terminalName: "Spar 5th Ave & G. Silundika",
		country: "Zimbabwe",
		address: "Corner 5th Avenue & George Silundika, Bulawayo"
	},
	{
		id: "MAS",
		city: "Masvingo",
		terminalName: "Masvingo Exor Complex",
		country: "Zimbabwe",
		address: "A4 Highway & Robert Mugabe Way, Masvingo"
	},
	{
		id: "CHI",
		city: "Chiredzi",
		terminalName: "Chiredzi Transit Center",
		country: "Zimbabwe",
		address: "Inyathi Road, Chiredzi"
	},
	{
		id: "MAR",
		city: "Marondera",
		terminalName: "Marondera Main Stop",
		country: "Zimbabwe",
		address: "Harare-Mutare Road, Marondera"
	},
	{
		id: "HAR",
		city: "Harare",
		terminalName: "Roadport International Terminal",
		country: "Zimbabwe",
		address: "Corner 5th Street & Robert Mugabe Way, Harare"
	}
];
var BUS_TRIPS = [
	{
		id: "TRIP-JNB-HAR-01",
		coachName: "Busachamone Joburg Express",
		coachModel: "Scania Irizar i6S Luxury Coach (3-Axle)",
		origin: "JNB",
		destination: "HAR",
		departureTime: "14:00",
		arrivalTime: "07:30",
		transitDuration: "17h 30m",
		priceZar: 900,
		priceUsd: 50,
		priceZig: 1350,
		availableSeats: 14,
		totalSeats: 50,
		amenities: [
			"Contoured Two-Tone Leather Recliners",
			"High-Speed Starlink Wi-Fi",
			"Individual USB & 220V Outlets",
			"Wooden Center Aisle Flooring",
			"Clean Unisex Restroom",
			"Dedicated Border Fast-Track Concierge",
			"Complimentary Bottled Water & Snack Pack"
		],
		days: [
			"Mon",
			"Wed",
			"Fri"
		]
	},
	{
		id: "TRIP-PTA-HAR-02",
		coachName: "Busachamone Prime Star",
		coachModel: "Scania Irizar i6S Luxury Coach",
		origin: "PTA",
		destination: "HAR",
		departureTime: "16:30",
		arrivalTime: "07:30",
		transitDuration: "15h 00m",
		priceZar: 900,
		priceUsd: 50,
		priceZig: 1350,
		availableSeats: 9,
		totalSeats: 50,
		amenities: [
			"Two-Tone Executive Leather Seating",
			"Onboard Starlink Wi-Fi",
			"Personal Reading Lights",
			"Clean Chemical Washroom",
			"Border Clearance Assistant",
			"Scania Air Suspension Ride Comfort"
		],
		days: [
			"Mon",
			"Wed",
			"Fri"
		]
	},
	{
		id: "TRIP-HAR-JNB-01",
		coachName: "Busachamone Diamond Express",
		coachModel: "Scania Irizar i6S Luxury Coach",
		origin: "HAR",
		destination: "JNB",
		departureTime: "16:30",
		arrivalTime: "08:45",
		transitDuration: "16h 15m",
		priceZar: 800,
		priceUsd: 45,
		priceZig: 1200,
		availableSeats: 18,
		totalSeats: 50,
		amenities: [
			"Contoured Leather Recliners",
			"High-Speed Starlink Wi-Fi",
			"Individual USB & 220V Outlets",
			"Climate Control",
			"Unisex Restroom",
			"Border Fast-Track Concierge"
		],
		days: [
			"Sun",
			"Tue",
			"Thu"
		]
	},
	{
		id: "TRIP-JNB-BYO-01",
		coachName: "Matabeleland Grand Express",
		coachModel: "Volvo B11R Luxury Coach",
		origin: "JNB",
		destination: "BYO",
		departureTime: "13:30",
		arrivalTime: "06:15",
		transitDuration: "16h 45m",
		priceZar: 850,
		priceUsd: 48,
		priceZig: 1280,
		availableSeats: 12,
		totalSeats: 50,
		amenities: [
			"Reclining Seats with Footrests",
			"Onboard Restroom",
			"USB Device Chargers",
			"Luggage Security Seals",
			"Fast-track Border Transit"
		],
		days: [
			"Mon",
			"Wed",
			"Fri",
			"Sat"
		]
	},
	{
		id: "TRIP-BYO-HAR-01",
		coachName: "Intercity Executive Shuttle",
		coachModel: "Marcopolo Viaggio 1050",
		origin: "BYO",
		destination: "HAR",
		departureTime: "07:30",
		arrivalTime: "13:45",
		transitDuration: "6h 15m",
		priceZar: 450,
		priceUsd: 25,
		priceZig: 675,
		availableSeats: 22,
		totalSeats: 44,
		amenities: [
			"Express Non-stop Corridor",
			"High-Speed Wi-Fi",
			"Air Conditioning",
			"Overhead Luggage Bins"
		],
		days: ["Daily"]
	}
];
var ACTIVE_TRACKING_COACHES = [
	{
		id: "BUS-01-ROYALE",
		ticketPrefix: "BUSA-7821-HAR",
		coachNumber: "Coach 01",
		coachName: "Busachamone Joburg Express",
		model: "Scania Irizar i6S (3-Axle)",
		registration: "BUSA 01 GP",
		routeName: "Johannesburg (Powerhouse) ➔ Harare (Roadport)",
		originCity: "Johannesburg",
		destinationCity: "Harare",
		departureDate: "Today, 14:00",
		currentSpeedKmH: 89,
		currentLatitude: -22.3481,
		currentLongitude: 29.9892,
		currentLocationName: "Approaching Musina Limpopo Gateway (N1 Northbound)",
		nextStopName: "Beitbridge Border Post Clearance Bay",
		nextStopEta: "28 minutes",
		overallProgressPercent: 64,
		borderStatus: "Pre-cleared by Fast-Track Agent · Normal Queue Bypass",
		cabinTempC: 21.2,
		wifiStatus: "Active (Starlink Satellite 54 Mbps)",
		driverName: "Captain T. Moyo",
		copilotName: "N. Ndlovu",
		passengersOnboard: 44,
		stops: [
			{
				city: "Johannesburg",
				name: "Powerhouse Terminal",
				scheduledTime: "14:00",
				status: "passed",
				passedAt: "14:02 (On Time)",
				coords: {
					x: 32,
					y: 88
				}
			},
			{
				city: "Pretoria",
				name: "Bosman Station",
				scheduledTime: "16:30",
				status: "passed",
				passedAt: "16:35",
				coords: {
					x: 35,
					y: 78
				}
			},
			{
				city: "Polokwane",
				name: "Shell Ultra City",
				scheduledTime: "20:15",
				status: "passed",
				passedAt: "20:10",
				coords: {
					x: 44,
					y: 58
				}
			},
			{
				city: "Musina",
				name: "Limpopo Gateway Stop",
				scheduledTime: "23:30",
				status: "current",
				eta: "In 12 mins",
				coords: {
					x: 50,
					y: 44
				}
			},
			{
				city: "Beitbridge",
				name: "Border VIP Lounge & Fast-Track Bay",
				scheduledTime: "00:45",
				status: "upcoming",
				eta: "ETA 00:40",
				coords: {
					x: 54,
					y: 38
				}
			},
			{
				city: "Masvingo",
				name: "Exor Complex Stop",
				scheduledTime: "04:15",
				status: "upcoming",
				eta: "ETA 04:05",
				coords: {
					x: 62,
					y: 24
				}
			},
			{
				city: "Harare",
				name: "Roadport International Terminal",
				scheduledTime: "07:30",
				status: "upcoming",
				eta: "ETA 07:15",
				coords: {
					x: 74,
					y: 12
				}
			}
		]
	},
	{
		id: "BUS-02-SOVEREIGN",
		ticketPrefix: "BUSA-9042-JNB",
		coachNumber: "Coach 07",
		coachName: "The Sovereign Diamond",
		model: "Mercedes-Benz Irizar i8",
		registration: "BUSA 07 GP",
		routeName: "Harare (Roadport) ➔ Johannesburg (Powerhouse)",
		originCity: "Harare",
		destinationCity: "Johannesburg",
		departureDate: "Today, 16:30",
		currentSpeedKmH: 94,
		currentLatitude: -24.1204,
		currentLongitude: 29.2105,
		currentLocationName: "Cruising N1 Southbound near Mokopane / Kranskop",
		nextStopName: "Pretoria Bosman Station Terminal",
		nextStopEta: "1 hour 25 mins",
		overallProgressPercent: 82,
		borderStatus: "Beitbridge Border Cleared in 38 mins (Smooth Transit)",
		cabinTempC: 20.8,
		wifiStatus: "Active (Starlink Satellite 61 Mbps)",
		driverName: "Captain K. Sibanda",
		copilotName: "E. Chidamba",
		passengersOnboard: 46,
		stops: [
			{
				city: "Harare",
				name: "Roadport Terminal",
				scheduledTime: "16:30",
				status: "passed",
				passedAt: "16:30 (On Time)",
				coords: {
					x: 74,
					y: 12
				}
			},
			{
				city: "Masvingo",
				name: "Exor Complex Stop",
				scheduledTime: "20:00",
				status: "passed",
				passedAt: "19:55",
				coords: {
					x: 62,
					y: 24
				}
			},
			{
				city: "Beitbridge",
				name: "Border VIP Clearing Bay",
				scheduledTime: "23:30",
				status: "passed",
				passedAt: "23:25",
				coords: {
					x: 54,
					y: 38
				}
			},
			{
				city: "Polokwane",
				name: "Ultra City Depot",
				scheduledTime: "03:45",
				status: "passed",
				passedAt: "03:40",
				coords: {
					x: 44,
					y: 58
				}
			},
			{
				city: "Pretoria",
				name: "Bosman Station Terminal",
				scheduledTime: "07:00",
				status: "current",
				eta: "ETA 06:45",
				coords: {
					x: 35,
					y: 78
				}
			},
			{
				city: "Johannesburg",
				name: "Powerhouse Terminal",
				scheduledTime: "08:30",
				status: "upcoming",
				eta: "ETA 08:15",
				coords: {
					x: 32,
					y: 88
				}
			}
		]
	},
	{
		id: "BUS-03-BULAWAYO",
		ticketPrefix: "BUSA-4418-BYO",
		coachNumber: "Coach 12",
		coachName: "Bulawayo Express Deluxe",
		model: "Volvo B11R Grand Luxe",
		registration: "BUSA 12 GP",
		routeName: "Johannesburg ➔ Bulawayo via Gwanda",
		originCity: "Johannesburg",
		destinationCity: "Bulawayo",
		departureDate: "Today, 13:30",
		currentSpeedKmH: 82,
		currentLatitude: -20.9321,
		currentLongitude: 29.0123,
		currentLocationName: "Passing Colleen Bawn en route to Gwanda",
		nextStopName: "Gwanda Central Depot",
		nextStopEta: "22 minutes",
		overallProgressPercent: 86,
		borderStatus: "Beitbridge Border Complete",
		cabinTempC: 21.5,
		wifiStatus: "Active (4G LTE 32 Mbps)",
		driverName: "Captain M. Dube",
		copilotName: "S. Mpofu",
		passengersOnboard: 41,
		stops: [
			{
				city: "Johannesburg",
				name: "Powerhouse Terminal",
				scheduledTime: "13:30",
				status: "passed",
				passedAt: "13:30",
				coords: {
					x: 32,
					y: 88
				}
			},
			{
				city: "Pretoria",
				name: "Bosman Station",
				scheduledTime: "15:45",
				status: "passed",
				passedAt: "15:40",
				coords: {
					x: 35,
					y: 78
				}
			},
			{
				city: "Beitbridge",
				name: "Border Post",
				scheduledTime: "23:45",
				status: "passed",
				passedAt: "23:35",
				coords: {
					x: 54,
					y: 38
				}
			},
			{
				city: "Gwanda",
				name: "Town Center Depot",
				scheduledTime: "03:45",
				status: "current",
				eta: "In 22 mins",
				coords: {
					x: 42,
					y: 28
				}
			},
			{
				city: "Bulawayo",
				name: "Spar 5th Ave & G. Silundika",
				scheduledTime: "06:15",
				status: "upcoming",
				eta: "ETA 05:55",
				coords: {
					x: 38,
					y: 18
				}
			}
		]
	}
];
var BUSA_CONTACTS = {
	phoneSaPrimary: "+27 81 304 7969",
	phoneSaSecondary: "+27 78 598 7270",
	phoneSaLandline: "+27 81 363 6614",
	phoneZimPrimary: "+263 78 940 9698",
	phoneZimSecondary: "+263 78 977 4356",
	whatsappNumber: "+27813047969",
	facebookUrl: "https://www.facebook.com/BusaExpress.Luxury",
	email: "bookings@busaexpress.com",
	inquiriesEmail: "charters@busaexpress.com"
};
var Navbar = ({ onOpenBooking, onScrollToSection, currency, onCurrencyChange }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const handleNavClick = (sectionId) => {
		onScrollToSection(sectionId);
		setMobileMenuOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 w-full bg-bg/80 backdrop-blur-2xl saturate-150 border-b border-ink/6 transition-all",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					onClick: (e) => {
						e.preventDefault();
						window.scrollTo({
							top: 0,
							behavior: "smooth"
						});
					},
					className: "cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg",
					"aria-label": "Busa Express Luxury Coaches",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
						size: "md",
						showSubtitle: false
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-7 text-sm font-medium text-ink/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleNavClick("booking-section"),
							className: "hover:text-ink transition-colors cursor-pointer",
							children: "Bookings"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleNavClick("tracking-section"),
							className: "hover:text-ink transition-colors cursor-pointer",
							children: "Live Tracking"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleNavClick("fleet-section"),
							className: "hover:text-ink transition-colors cursor-pointer",
							children: "Fleet & Cabin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleNavClick("schedules-section"),
							className: "hover:text-ink transition-colors cursor-pointer",
							children: "Timetables"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => handleNavClick("inquiries-section"),
							className: "hover:text-ink transition-colors cursor-pointer",
							children: "Charter & Freight"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden sm:flex items-center bg-ink/4 p-0.5 rounded-full text-xxs font-medium border border-ink/4",
							children: [
								"ZAR",
								"USD",
								"ZIG"
							].map((curr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => onCurrencyChange(curr),
								className: `px-2.5 py-1 rounded-full transition-all cursor-pointer ${currency === curr ? "bg-card text-ink shadow-sm font-semibold" : "text-muted hover:text-ink"}`,
								children: curr === "ZAR" ? "R (ZAR)" : curr === "USD" ? "$ (USD)" : "ZiG"
							}, curr))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onOpenBooking,
							className: "px-4 sm:px-5 min-h-11 text-xs font-semibold text-on-primary bg-primary hover:bg-primary-hover active:scale-[0.96] rounded-full transition-[background-color,transform] duration-150 shadow-primary-glow whitespace-nowrap",
							children: "Book Coach"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMobileMenuOpen(!mobileMenuOpen),
							className: "md:hidden min-h-11 min-w-11 flex items-center justify-center text-ink hover:bg-ink/5 active:scale-[0.96] rounded-xl transition-[background-color,transform] duration-150",
							"aria-label": "Toggle Navigation Menu",
							"aria-expanded": mobileMenuOpen,
							children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-5 h-5" })
						})
					]
				})
			]
		}), mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:hidden bg-bg/95 backdrop-blur-2xl border-b border-ink/6 px-6 py-5 space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between pb-3 border-b border-ink/6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium text-muted",
						children: "Currency:"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center bg-ink/4 p-0.5 rounded-full text-xs font-medium",
						children: [
							"ZAR",
							"USD",
							"ZIG"
						].map((curr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onCurrencyChange(curr),
							className: `px-3 py-1 rounded-full transition-all ${currency === curr ? "bg-card text-ink shadow-sm font-semibold" : "text-muted"}`,
							children: curr
						}, curr))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col space-y-3 text-base font-medium text-ink",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleNavClick("booking-section"),
							className: "text-left min-h-11 hover:text-primary flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bookings" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4 text-muted" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleNavClick("tracking-section"),
							className: "text-left min-h-11 hover:text-primary flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Live GPS Tracking" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4 text-muted" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleNavClick("fleet-section"),
							className: "text-left min-h-11 hover:text-primary flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Executive Fleet & Cabin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4 text-muted" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleNavClick("schedules-section"),
							className: "text-left min-h-11 hover:text-primary flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Timetables & Stations" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4 text-muted" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleNavClick("inquiries-section"),
							className: "text-left min-h-11 hover:text-primary flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Charter & Freight Inquiries" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4 text-muted" })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-3 border-t border-ink/6 flex flex-col gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setMobileMenuOpen(false);
							onOpenBooking();
						},
						className: "w-full py-2.5 text-center text-xs font-semibold text-on-primary bg-primary active:scale-[0.98] rounded-full shadow-sm",
						children: "Book Seats Now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `https://wa.me/${BUSA_CONTACTS.whatsappNumber}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "w-full py-2 text-center text-xs font-medium text-ink bg-card border border-ink/6 rounded-full flex items-center justify-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3.5 h-3.5 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["WhatsApp Concierge: ", BUSA_CONTACTS.phoneSaPrimary] })]
					})]
				})
			]
		})]
	});
};
/** Cache-busted paths so previous (wrong) fleet shots cannot linger. */
var V = "v20260925real";
var DEFAULT_COACH_IMAGES = {
	heroCoach: `/busa/hero.jpg?${V}`,
	sideProfile: `/busa/side.jpg?${V}`,
	cabinInterior: `/busa/cabin.jpg?${V}`,
	luggageHold: `/busa/luggage.jpg?${V}`,
	frontBoarding: `/busa/boarding.jpg?${V}`
};
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var PHOTO_VIEWS = [
	{
		id: "hero",
		label: "Coach",
		src: DEFAULT_COACH_IMAGES.heroCoach,
		position: "32% 62%"
	},
	{
		id: "cabin",
		label: "Cabin",
		src: DEFAULT_COACH_IMAGES.cabinInterior,
		position: "50% 50%"
	},
	{
		id: "side",
		label: "Side",
		src: DEFAULT_COACH_IMAGES.sideProfile,
		position: "48% 50%"
	},
	{
		id: "boarding",
		label: "Boarding",
		src: DEFAULT_COACH_IMAGES.frontBoarding,
		position: "28% 55%"
	},
	{
		id: "luggage",
		label: "Luggage",
		src: DEFAULT_COACH_IMAGES.luggageHold,
		position: "50% 58%"
	}
];
var SA_HUBS = TERMINALS.filter((t) => t.country === "South Africa");
var ZIM_HUBS = TERMINALS.filter((t) => t.country === "Zimbabwe" && t.id !== "BBR");
var PRICE = {
	ZAR: "R900",
	USD: "$50",
	ZIG: "ZiG 1,350"
};
var HeroBookingSection = ({ onSearchTrips, onScrollToTracking, currency }) => {
	const [tripType, setTripType] = (0, import_react.useState)("oneWay");
	const [origin, setOrigin] = (0, import_react.useState)("JNB");
	const [destination, setDestination] = (0, import_react.useState)("HAR");
	const [departureDate, setDepartureDate] = (0, import_react.useState)(() => {
		const today = /* @__PURE__ */ new Date();
		today.setDate(today.getDate() + 1);
		return today.toISOString().split("T")[0];
	});
	const [returnDate, setReturnDate] = (0, import_react.useState)(() => {
		const nextWeek = /* @__PURE__ */ new Date();
		nextWeek.setDate(nextWeek.getDate() + 5);
		return nextWeek.toISOString().split("T")[0];
	});
	const [passengers, setPassengers] = (0, import_react.useState)(1);
	const [activePhotoView, setActivePhotoView] = (0, import_react.useState)("hero");
	const handleSwapCities = () => {
		setOrigin(destination);
		setDestination(origin);
	};
	const handleSearchSubmit = (e) => {
		e.preventDefault();
		onSearchTrips(origin, destination, departureDate, passengers);
	};
	const todayIso = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
	const renderHubOptions = (hubs) => hubs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
		value: t.id,
		children: t.city
	}, t.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "booking-section",
		className: "relative bg-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[58vh] min-h-[320px] max-h-[640px] sm:h-[72vh] sm:min-h-[480px] overflow-hidden",
			children: [
				PHOTO_VIEWS.map((view) => {
					const visible = view.id === activePhotoView;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: view.src,
						alt: view.id === "hero" ? "Busachamone Scania Irizar i6S executive coach, Johannesburg destination" : `Busachamone coach ${view.label.toLowerCase()}`,
						fetchPriority: view.id === "hero" ? "high" : "low",
						decoding: "async",
						style: { objectPosition: view.position },
						className: cn("absolute inset-0 size-full object-cover transition-opacity duration-500", visible ? "opacity-100" : "opacity-0", view.id === "hero" ? "hero-coach-img" : "hero-still-img")
					}, view.id);
				}),
				activePhotoView === "hero" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-gleam pointer-events-none absolute inset-y-0 -left-1/4 w-1/3 bg-gradient-to-r from-transparent via-on-primary/30 to-transparent",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/25 via-transparent to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 z-10 flex flex-col justify-end px-4 sm:px-8 lg:px-12 pb-20 sm:pb-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-7xl mx-auto w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-copy inline-flex items-center gap-2 text-xxs sm:text-xs font-medium text-on-primary/85 mb-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-success" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Busachamone Integrated Services" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-on-primary/35",
										"aria-hidden": "true",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SA ⇄ Zimbabwe daily" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "hero-copy hero-copy-delay-1 max-w-2xl text-3xl sm:text-5xl lg:text-6xl font-bold text-on-primary tracking-tight leading-[1.08] text-balance",
								children: ["Johannesburg to Harare.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-on-primary/80",
									children: "Your coach is waiting."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "hero-copy hero-copy-delay-2 mt-3 max-w-lg text-sm sm:text-base text-on-primary/75 leading-relaxed",
								children: [
									"Scania Irizar i6S executive coaches. Leather recliners, Starlink Wi-Fi, live GPS. From ",
									PRICE[currency],
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-copy hero-copy-delay-3 mt-5 flex items-center gap-1.5 overflow-x-auto pb-1 -mx-1 px-1",
								children: PHOTO_VIEWS.map((view) => {
									const selected = view.id === activePhotoView;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setActivePhotoView(view.id),
										className: cn("shrink-0 min-h-11 px-3.5 rounded-full text-xs font-semibold border transition-[background-color,color,border-color,transform] duration-150 active:scale-[0.96]", selected ? "bg-card text-ink border-card" : "bg-ink/45 text-on-primary border-on-primary/20 backdrop-blur-md hover:bg-ink/60"),
										children: view.label
									}, view.id);
								})
							})
						]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-20 -mt-14 sm:-mt-20 px-4 sm:px-6 lg:px-8 pb-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSearchSubmit,
				className: "max-w-5xl mx-auto bg-card rounded-3xl border border-ink/8 shadow-soft p-4 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center bg-bg p-1 rounded-full border border-ink/4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setTripType("oneWay"),
								className: cn("min-h-11 px-4 rounded-full text-xs font-semibold transition-[background-color,color,box-shadow] duration-150", tripType === "oneWay" ? "bg-card text-ink shadow-sm" : "text-muted hover:text-ink"),
								children: "One way"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setTripType("roundTrip"),
								className: cn("min-h-11 px-4 rounded-full text-xs font-semibold transition-[background-color,color,box-shadow] duration-150", tripType === "roundTrip" ? "bg-card text-ink shadow-sm" : "text-muted hover:text-ink"),
								children: "Return"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: onScrollToTracking,
							className: "hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-ink min-h-11",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "w-3.5 h-3.5 text-primary" }), "Track a coach"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-2 sm:gap-3 items-stretch",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block bg-bg rounded-2xl px-3.5 py-2.5 border border-ink/5 min-h-14",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-2xs font-semibold text-muted tracking-wide",
									children: "From"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 mt-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: origin,
										onChange: (e) => setOrigin(e.target.value),
										className: "w-full bg-transparent text-sm font-semibold text-ink focus:outline-none min-h-8",
										"aria-label": "Departure city",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
											label: "South Africa",
											children: renderHubOptions(SA_HUBS)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
											label: "Zimbabwe",
											children: renderHubOptions(ZIM_HUBS)
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handleSwapCities,
									className: "w-11 h-11 rounded-full bg-bg border border-ink/8 flex items-center justify-center text-ink transition-transform duration-200 active:rotate-180 shadow-sm",
									"aria-label": "Swap origin and destination",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRightLeft, { className: "w-4 h-4" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block bg-bg rounded-2xl px-3.5 py-2.5 border border-ink/5 min-h-14",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-2xs font-semibold text-muted tracking-wide",
									children: "To"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 mt-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-success shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: destination,
										onChange: (e) => setDestination(e.target.value),
										className: "w-full bg-transparent text-sm font-semibold text-ink focus:outline-none min-h-8",
										"aria-label": "Arrival city",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
											label: "Zimbabwe",
											children: renderHubOptions(ZIM_HUBS)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("optgroup", {
											label: "South Africa",
											children: renderHubOptions(SA_HUBS)
										})]
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("mt-2 grid gap-2 sm:gap-3", tripType === "roundTrip" ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block bg-bg rounded-2xl px-3.5 py-2.5 border border-ink/5 min-h-14",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-2xs font-semibold text-muted tracking-wide",
									children: "Depart"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 mt-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "date",
										value: departureDate,
										onChange: (e) => setDepartureDate(e.target.value),
										min: todayIso,
										className: "w-full bg-transparent text-sm font-semibold text-ink focus:outline-none min-h-8",
										"aria-label": "Departure date"
									})]
								})]
							}),
							tripType === "roundTrip" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block bg-bg rounded-2xl px-3.5 py-2.5 border border-ink/5 min-h-14",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-2xs font-semibold text-muted tracking-wide",
									children: "Return"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 mt-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-4 h-4 text-muted shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "date",
										value: returnDate,
										onChange: (e) => setReturnDate(e.target.value),
										min: departureDate,
										className: "w-full bg-transparent text-sm font-semibold text-ink focus:outline-none min-h-8",
										"aria-label": "Return date"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block bg-bg rounded-2xl px-3.5 py-2.5 border border-ink/5 min-h-14",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-2xs font-semibold text-muted tracking-wide",
									children: "Passengers"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2 mt-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-4 h-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: passengers,
										onChange: (e) => setPassengers(Number(e.target.value)),
										className: "w-full bg-transparent text-sm font-semibold text-ink focus:outline-none min-h-8",
										"aria-label": "Number of passengers",
										children: [
											1,
											2,
											3,
											4,
											5,
											6,
											7,
											8
										].map((num) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
											value: num,
											children: [
												num,
												" ",
												num === 1 ? "adult" : "adults"
											]
										}, num))
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "col-span-2 sm:col-span-1 min-h-14 px-5 bg-primary hover:bg-primary-hover active:scale-[0.96] text-on-primary text-sm font-semibold rounded-2xl shadow-primary-glow transition-[background-color,transform] duration-150 flex items-center justify-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Find coaches" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xxs sm:text-xs text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, { className: "w-3.5 h-3.5 text-primary" }), "Starlink Wi-Fi"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-3.5 h-3.5 text-success" }), "Fast-track Beitbridge"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "50kg bags included" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: onScrollToTracking,
								className: "sm:hidden inline-flex items-center gap-1.5 min-h-11 font-medium text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "w-3.5 h-3.5" }), "Track my coach"]
							})
						]
					})
				]
			})
		})]
	});
};
var defaultPhotos = {
	heroCoach: null,
	sideProfile: null,
	cabinInterior: null,
	luggageHold: null,
	frontBoarding: null
};
var PhotoContext = (0, import_react.createContext)(void 0);
function PhotoProvider({ children }) {
	const [photos] = (0, import_react.useState)(defaultPhotos);
	const [isUploadModalOpen, setIsUploadModalOpen] = (0, import_react.useState)(false);
	const [activeUploadTarget, setActiveUploadTarget] = (0, import_react.useState)(null);
	const value = (0, import_react.useMemo)(() => {
		const setPhoto = (_key, _dataUrl) => {};
		const setMultiplePhotos = (_photosMap) => {};
		const resetPhotos = () => {};
		const openUploadModal = (target) => {
			setActiveUploadTarget(target ?? null);
			setIsUploadModalOpen(false);
		};
		return {
			photos,
			setPhoto,
			setMultiplePhotos,
			resetPhotos,
			isUploadModalOpen,
			setIsUploadModalOpen,
			activeUploadTarget,
			openUploadModal,
			hasPhotos: false
		};
	}, [
		photos,
		isUploadModalOpen,
		activeUploadTarget
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoContext.Provider, {
		value,
		children
	});
}
function useBusPhotos() {
	const context = (0, import_react.useContext)(PhotoContext);
	if (!context) throw new Error("useBusPhotos must be used within a PhotoProvider");
	return context;
}
var generateSeatMap = () => {
	const seats = [];
	const occupiedPreset = [
		3,
		4,
		7,
		12,
		15,
		16,
		21,
		22,
		27,
		33,
		34,
		41
	];
	for (let row = 1; row <= 12; row++) [
		"A",
		"B",
		"C",
		"D"
	].forEach((col, idx) => {
		const seatNum = (row - 1) * 4 + idx + 1;
		seats.push({
			id: `seat-${seatNum}`,
			number: seatNum,
			row,
			column: col,
			isVip: row <= 2,
			status: occupiedPreset.includes(seatNum) ? "booked" : "available",
			hasPower: true
		});
	});
	return seats;
};
var BookingFlowModal = ({ isOpen, onClose, initialOrigin, initialDestination, initialDate, initialPassengers, currency, onTrackTrip }) => {
	const [step, setStep] = (0, import_react.useState)("select-coach");
	const [selectedTrip, setSelectedTrip] = (0, import_react.useState)(BUS_TRIPS[0]);
	const [seats, setSeats] = (0, import_react.useState)(generateSeatMap);
	const [selectedSeatNumbers, setSelectedSeatNumbers] = (0, import_react.useState)([1]);
	const [passenger, setPassenger] = (0, import_react.useState)({
		fullName: "",
		passportOrId: "",
		nationality: "Zimbabwean",
		phone: "",
		email: "",
		emergencyContact: "",
		dietaryOrBaggageNotes: "",
		selectedSeats: ["1"]
	});
	const [confirmedBooking, setConfirmedBooking] = (0, import_react.useState)(null);
	const [notice, setNotice] = (0, import_react.useState)(null);
	const { photos } = useBusPhotos();
	if (!isOpen) return null;
	const originTerminal = TERMINALS.find((t) => t.id === selectedTrip.origin);
	const destTerminal = TERMINALS.find((t) => t.id === selectedTrip.destination);
	const formatPrice = (zar, usd, zig) => {
		if (currency === "USD") return `$${usd}`;
		if (currency === "ZIG") return `ZiG ${zig.toLocaleString()}`;
		return `R${zar}`;
	};
	const handleSeatClick = (seat) => {
		if (seat.status === "booked") return;
		if (selectedSeatNumbers.includes(seat.number)) {
			if (selectedSeatNumbers.length === 1) return;
			setSelectedSeatNumbers(selectedSeatNumbers.filter((n) => n !== seat.number));
		} else {
			if (selectedSeatNumbers.length >= 6) {
				setNotice("Groups over 6 seats: use the Charter & Inquiries form.");
				return;
			}
			setSelectedSeatNumbers([...selectedSeatNumbers, seat.number]);
		}
	};
	const handlePassengerSubmit = (e) => {
		e.preventDefault();
		if (!passenger.fullName || !passenger.passportOrId || !passenger.phone) {
			setNotice("Please fill in your full name, passport/ID, and WhatsApp number.");
			return;
		}
		setNotice(null);
		const bookingRef = `BUSA-${Math.floor(1e3 + Math.random() * 9e3)}-${selectedTrip.destination}`;
		const newBooking = {
			bookingRef,
			trip: selectedTrip,
			passenger: {
				...passenger,
				selectedSeats: selectedSeatNumbers.map((s) => `Seat ${s}`)
			},
			selectedSeats: selectedSeatNumbers.map((s) => `Seat ${s}`),
			totalPriceZar: selectedTrip.priceZar * selectedSeatNumbers.length,
			totalPriceUsd: selectedTrip.priceUsd * selectedSeatNumbers.length,
			bookingDate: (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB"),
			travelDate: initialDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
			qrPayload: `BUSA-EXPRESS|${bookingRef}|${selectedTrip.origin}-${selectedTrip.destination}|SEATS:${selectedSeatNumbers.join(",")}`
		};
		setConfirmedBooking(newBooking);
		setStep("confirmation");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink/40 backdrop-blur-sm overflow-y-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card rounded-3xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden my-auto border border-ink/8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-6 pt-4 pb-4 border-b border-ink/6 bg-card sticky top-0 z-10 flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-1 rounded-full bg-surface mb-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [step !== "select-coach" && step !== "confirmation" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setStep(step === "passenger-info" ? "select-seats" : "select-coach"),
								className: "p-1.5 rounded-full hover:bg-bg text-ink transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-5 h-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xxs font-semibold text-primary uppercase tracking-wider",
								children: ["Step ", step === "select-coach" ? "1 of 3" : step === "select-seats" ? "2 of 3" : step === "passenger-info" ? "3 of 3" : "Confirmed"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-base sm:text-lg font-bold text-ink",
								children: [
									step === "select-coach" && "Select Luxury Coach & Departure",
									step === "select-seats" && "Select Your Seats Onboard",
									step === "passenger-info" && "Passenger & Customs Verification",
									step === "confirmation" && "Apple Wallet Boarding Pass"
								]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onClose,
							className: "p-2 rounded-full text-muted hover:text-ink hover:bg-bg transition-colors cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
						})]
					})]
				}),
				notice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-6 mt-3 rounded-xl border border-danger/20 bg-danger/8 px-3 py-2 text-xs font-medium text-danger",
					children: notice
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 overflow-y-auto flex-1 space-y-6",
					children: [
						step === "select-coach" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 rounded-2xl bg-bg text-xs text-ink flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Showing departures for: ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: originTerminal?.city }),
									" ➔ ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: destTerminal?.city }),
									" (",
									initialDate,
									")"
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold text-primary",
									children: [BUS_TRIPS.length, " Coaches Scheduled"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: BUS_TRIPS.map((trip) => {
									const isSelected = selectedTrip.id === trip.id;
									const fromT = TERMINALS.find((t) => t.id === trip.origin);
									const toT = TERMINALS.find((t) => t.id === trip.destination);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										onClick: () => setSelectedTrip(trip),
										className: `p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${isSelected ? "bg-bg border-primary ring-2 ring-primary/20 shadow-sm" : "bg-card border-ink/8 hover:border-ink/18"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start gap-3.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "w-16 h-14 rounded-xl overflow-hidden border border-ink/8 shrink-0 hidden sm:flex items-center justify-center bg-ink/5",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: photos.heroCoach || DEFAULT_COACH_IMAGES.heroCoach,
														alt: trip.coachName,
														className: "w-full h-full object-cover"
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-base font-bold text-ink",
															children: trip.coachName
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-2xs px-2 py-0.5 rounded-full bg-surface text-ink font-mono",
															children: trip.coachModel
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-2.5 flex items-center gap-4 text-sm",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-lg font-extrabold text-ink font-mono",
																children: trip.departureTime
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "text-xs text-muted",
																children: [
																	fromT?.city,
																	" (",
																	fromT?.terminalName.split(" ")[0],
																	")"
																]
															})] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex flex-col items-center px-2",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-xxs text-muted font-mono",
																		children: trip.transitDuration
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																		className: "w-16 h-0.5 bg-surface relative my-1",
																		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary" })
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-2xs text-success font-medium",
																		children: "Fast Border"
																	})
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "text-lg font-extrabold text-ink font-mono",
																children: trip.arrivalTime
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "text-xs text-muted",
																children: [
																	toT?.city,
																	" (",
																	toT?.terminalName.split(" ")[0],
																	")"
																]
															})] })
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-2.5 flex items-center gap-3 text-xs text-muted",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "text-success font-medium",
																children: [trip.availableSeats, " VIP Seats Left"]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Starlink Wi-Fi" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Leather Recliner" })
														]
													})
												] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-3 sm:pt-0 border-ink/6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-right",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-2xl font-extrabold text-ink font-mono",
														children: formatPrice(trip.priceZar, trip.priceUsd, trip.priceZig)
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xxs text-muted",
														children: "All Taxes Included"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: (e) => {
														e.stopPropagation();
														setSelectedTrip(trip);
														setStep("select-seats");
													},
													className: "mt-2 px-5 py-2 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-full transition-all shadow-sm cursor-pointer",
													children: "Select Seats"
												})]
											})]
										})
									}, trip.id);
								})
							})]
						}),
						step === "select-seats" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-4 p-3.5 bg-bg rounded-2xl text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted",
											children: "Selected:"
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											className: "text-ink",
											children: selectedTrip.coachName
										}),
										" (",
										originTerminal?.city,
										" ➔ ",
										destTerminal?.city,
										")"
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3.5 h-3.5 rounded-md bg-card border border-ink/15" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted",
													children: "Available"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3.5 h-3.5 rounded-md bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-ink font-semibold",
													children: "Selected"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3.5 h-3.5 rounded-md bg-surface" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted",
													children: "Occupied"
												})]
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-bg p-6 rounded-3xl border border-ink/6 max-w-md mx-auto",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-b border-ink/8 pb-3 mb-4 flex items-center justify-between text-xs text-muted",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold text-ink",
													children: "Driver Cabin"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-2xs font-semibold uppercase tracking-wider text-primary",
													children: "▲ Front of Coach ▲"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-2xs text-success font-medium",
													children: "Entrance"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-2",
											children: Array.from({ length: 12 }).map((_, rowIdx) => {
												const rowNum = rowIdx + 1;
												const rowSeats = seats.filter((s) => s.row === rowNum);
												const leftSeats = rowSeats.slice(0, 2);
												const rightSeats = rowSeats.slice(2, 4);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-3",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex items-center gap-2",
															children: leftSeats.map((seat) => {
																const isSelected = selectedSeatNumbers.includes(seat.number);
																const isBooked = seat.status === "booked";
																return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	disabled: isBooked,
																	onClick: () => handleSeatClick(seat),
																	className: `w-9 h-9 rounded-xl flex flex-col items-center justify-center text-xs font-mono font-semibold transition-all cursor-pointer ${isBooked ? "bg-surface text-muted cursor-not-allowed" : isSelected ? "bg-primary text-on-primary shadow-sm font-bold scale-105" : "bg-card hover:bg-surface text-ink border border-ink/8"}`,
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: seat.number })
																}, seat.id);
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-2xs font-mono text-muted",
															children: rowNum
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex items-center gap-2",
															children: rightSeats.map((seat) => {
																const isSelected = selectedSeatNumbers.includes(seat.number);
																const isBooked = seat.status === "booked";
																return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	disabled: isBooked,
																	onClick: () => handleSeatClick(seat),
																	className: `w-9 h-9 rounded-xl flex flex-col items-center justify-center text-xs font-mono font-semibold transition-all cursor-pointer ${isBooked ? "bg-surface text-muted cursor-not-allowed" : isSelected ? "bg-primary text-on-primary shadow-sm font-bold scale-105" : "bg-card hover:bg-surface text-ink border border-ink/8"}`,
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: seat.number })
																}, seat.id);
															})
														})
													]
												}, rowNum);
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-t border-ink/8 pt-3 mt-4 flex items-center justify-between text-xs text-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Emergency Exit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-ink",
												children: "Sanitary Lavatory"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-bg border border-ink/6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted",
										children: [
											"Selected Seats (",
											selectedSeatNumbers.length,
											"):",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-ink font-mono",
												children: selectedSeatNumbers.map((s) => `Seat ${s}`).join(", ")
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xxs text-muted",
										children: "Includes 2x 25kg checked suitcases + 1 hand luggage free"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xxs text-muted",
												children: "Total Fare:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-lg font-bold text-ink font-mono",
												children: [
													currency === "USD" && `$${selectedTrip.priceUsd * selectedSeatNumbers.length}`,
													currency === "ZIG" && `ZiG ${(selectedTrip.priceZig * selectedSeatNumbers.length).toLocaleString()}`,
													currency === "ZAR" && `R${selectedTrip.priceZar * selectedSeatNumbers.length}`
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setStep("passenger-info"),
											className: "px-5 py-2.5 bg-primary hover:bg-primary-hover text-on-primary font-semibold text-xs rounded-full transition-all shadow-sm flex items-center gap-1 cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Continue to Details" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3.5 h-3.5" })]
										})]
									})]
								})
							]
						}),
						step === "passenger-info" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handlePassengerSubmit,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 rounded-2xl bg-primary/10 text-xs text-ink flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Border Customs Verification:" }), " Passenger name and passport/ID number must match official cross-border travel documents for Beitbridge Fast-Track processing."] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-bg rounded-2xl p-3 border border-ink/4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-xxs font-semibold text-muted uppercase tracking-wider mb-1",
												children: "Legal Name (as on Passport) *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												required: true,
												placeholder: "e.g. Tendai Moyo",
												value: passenger.fullName,
												onChange: (e) => setPassenger({
													...passenger,
													fullName: e.target.value
												}),
												className: "w-full bg-transparent text-sm text-ink focus:outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-bg rounded-2xl p-3 border border-ink/4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-xxs font-semibold text-muted uppercase tracking-wider mb-1",
												children: "Passport / National ID Number *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												required: true,
												placeholder: "e.g. FN123456",
												value: passenger.passportOrId,
												onChange: (e) => setPassenger({
													...passenger,
													passportOrId: e.target.value
												}),
												className: "w-full bg-transparent text-sm font-mono text-ink focus:outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-bg rounded-2xl p-3 border border-ink/4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-xxs font-semibold text-muted uppercase tracking-wider mb-1",
												children: "WhatsApp / Mobile Number *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "tel",
												required: true,
												placeholder: "+27 or +263 number",
												value: passenger.phone,
												onChange: (e) => setPassenger({
													...passenger,
													phone: e.target.value
												}),
												className: "w-full bg-transparent text-sm text-ink focus:outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-bg rounded-2xl p-3 border border-ink/4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-xxs font-semibold text-muted uppercase tracking-wider mb-1",
												children: "Email Address *"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "email",
												required: true,
												placeholder: "tendai@example.com",
												value: passenger.email,
												onChange: (e) => setPassenger({
													...passenger,
													email: e.target.value
												}),
												className: "w-full bg-transparent text-sm text-ink focus:outline-none"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-bg rounded-2xl p-3 border border-ink/4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-xxs font-semibold text-muted uppercase tracking-wider mb-1",
												children: "Nationality"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: passenger.nationality,
												onChange: (e) => setPassenger({
													...passenger,
													nationality: e.target.value
												}),
												className: "w-full bg-transparent text-sm text-ink focus:outline-none cursor-pointer",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Zimbabwean",
														children: "Zimbabwean"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "South African",
														children: "South African"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "Other",
														children: "Other SADC / International"
													})
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-bg rounded-2xl p-3 border border-ink/4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "block text-xxs font-semibold text-muted uppercase tracking-wider mb-1",
												children: "Emergency Contact"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "tel",
												placeholder: "Family member phone",
												value: passenger.emergencyContact,
												onChange: (e) => setPassenger({
													...passenger,
													emergencyContact: e.target.value
												}),
												className: "w-full bg-transparent text-sm text-ink focus:outline-none"
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-2 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setStep("select-seats"),
										className: "text-xs text-muted hover:text-ink",
										children: "← Back to Seats"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "px-6 py-3 bg-primary hover:bg-primary-hover text-on-primary font-semibold text-xs rounded-full transition-all shadow-sm cursor-pointer",
										children: "Issue Digital Boarding Pass"
									})]
								})
							]
						}),
						step === "confirmation" && confirmedBooking && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-ink text-on-primary rounded-3xl overflow-hidden shadow-2xl relative max-w-lg mx-auto border border-ink/10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-6 py-4 bg-ink/50 border-b border-on-primary/10 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
											size: "sm",
											variant: "light"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-2xs font-mono font-semibold bg-primary/20 border border-primary/40 text-primary px-2.5 py-0.5 rounded-full uppercase tracking-wider",
											children: "VIP Pass"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-6 space-y-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-2xl font-extrabold font-mono tracking-tight",
														children: selectedTrip.origin
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs text-muted",
														children: originTerminal?.city
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "text-xxs text-success font-mono mt-0.5",
														children: ["Depart: ", selectedTrip.departureTime]
													})
												] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-col items-center px-4",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bus, { className: "w-5 h-5 text-muted" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-16 h-0.5 bg-card/20 my-1" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-2xs font-mono text-muted",
															children: "Direct"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-right",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-2xl font-extrabold font-mono tracking-tight",
															children: selectedTrip.destination
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-xs text-muted",
															children: destTerminal?.city
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "text-xxs text-success font-mono mt-0.5",
															children: ["Arrive: ", selectedTrip.arrivalTime]
														})
													]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-3 gap-2 pt-3 border-t border-on-primary/10 text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted block text-2xs",
													children: "Passenger"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-on-primary truncate block",
													children: confirmedBooking.passenger.fullName
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted block text-2xs",
													children: "Seats"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-primary font-mono",
													children: confirmedBooking.selectedSeats.join(", ")
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted block text-2xs",
													children: "Date"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-on-primary font-mono",
													children: confirmedBooking.travelDate
												})] })
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative border-t border-dashed border-on-primary/20 my-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ticket-perforation-left" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ticket-perforation-right" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-6 bg-ink/30 flex flex-col items-center justify-center text-center space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "p-2.5 bg-card rounded-2xl",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "w-20 h-20 text-ink" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-mono text-xs font-bold text-on-primary tracking-widest",
												children: confirmedBooking.bookingRef
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-2xs text-muted",
												children: "Scan at Boarding Gate · Beitbridge Fast-Track"
											})
										]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-center gap-3 pt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `https://wa.me/${BUSA_CONTACTS.whatsappNumber}?text=Hello%20Busa%20Express,%20I%20have%20booked%20reference%20${confirmedBooking.bookingRef}%20for%20${confirmedBooking.passenger.fullName}.`,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "px-5 py-2.5 bg-success hover:bg-success text-on-primary text-xs font-semibold rounded-full flex items-center gap-1.5 transition-all shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Send Ticket to WhatsApp" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											onClose();
											onTrackTrip(confirmedBooking.bookingRef);
										},
										className: "px-5 py-2.5 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-full flex items-center gap-1.5 transition-all shadow-sm cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bus, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Track This Coach" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => window.print(),
										className: "px-4 py-2.5 bg-bg hover:bg-surface text-ink text-xs font-semibold rounded-full border border-ink/8 transition-colors cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Print" })]
									})
								]
							})]
						})
					]
				})
			]
		})
	});
};
var LiveTrackingSection = ({ searchedTicketRef }) => {
	const [selectedCoach, setSelectedCoach] = (0, import_react.useState)(ACTIVE_TRACKING_COACHES[0]);
	const [ticketInput, setTicketInput] = (0, import_react.useState)("");
	const [isRefreshing, setIsRefreshing] = (0, import_react.useState)(false);
	const [lastPingTime, setLastPingTime] = (0, import_react.useState)("Just now (via Starlink Satellite)");
	const { photos } = useBusPhotos();
	(0, import_react.useEffect)(() => {
		if (searchedTicketRef) {
			setTicketInput(searchedTicketRef);
			const match = ACTIVE_TRACKING_COACHES.find((c) => c.ticketPrefix.toLowerCase().includes(searchedTicketRef.toLowerCase()) || searchedTicketRef.toLowerCase().includes(c.originCity.toLowerCase()) || searchedTicketRef.toLowerCase().includes(c.destinationCity.toLowerCase()));
			if (match) setSelectedCoach(match);
		}
	}, [searchedTicketRef]);
	const handleSearch = (e) => {
		e.preventDefault();
		if (!ticketInput.trim()) return;
		const match = ACTIVE_TRACKING_COACHES.find((c) => c.ticketPrefix.toLowerCase().includes(ticketInput.trim().toLowerCase()) || c.registration.toLowerCase().includes(ticketInput.trim().toLowerCase()) || c.coachName.toLowerCase().includes(ticketInput.trim().toLowerCase()) || c.destinationCity.toLowerCase().includes(ticketInput.trim().toLowerCase()));
		if (match) setSelectedCoach(match);
		else setSelectedCoach({
			...ACTIVE_TRACKING_COACHES[0],
			ticketPrefix: ticketInput.trim().toUpperCase()
		});
	};
	const handleRefresh = () => {
		setIsRefreshing(true);
		setTimeout(() => {
			setIsRefreshing(false);
			setLastPingTime(`${(/* @__PURE__ */ new Date()).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit"
			})} (Starlink Locked)`);
		}, 500);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "tracking-section",
		className: "py-20 bg-card border-y border-ink/6 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-ink/6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-xs font-semibold text-success",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-success animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Find My Coach · Live GPS Satellite Telemetry" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl sm:text-4xl font-extrabold text-ink tracking-tight",
								children: "Real-time cross-border tracking."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted max-w-2xl leading-relaxed",
								children: "Live location telemetry along the Trans-Limpopo highway corridor. Monitor exact speed, Beitbridge customs clearing queue status, cabin climate, and ETA."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSearch,
						className: "flex items-center gap-2 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Ticket (e.g. BUSA-7821-HAR)",
								value: ticketInput,
								onChange: (e) => setTicketInput(e.target.value),
								className: "pl-10 pr-4 py-2 bg-bg border border-ink/6 rounded-full text-xs font-mono text-ink focus:outline-none focus:border-primary focus:bg-card w-60 sm:w-64 transition-all uppercase"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "px-4 py-2 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-full transition-all shadow-sm cursor-pointer",
							children: "Track"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium text-muted mr-1",
						children: "Active Coaches en Route:"
					}), ACTIVE_TRACKING_COACHES.map((coach) => {
						const isSelected = selectedCoach.id === coach.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								setSelectedCoach(coach);
								setTicketInput(coach.ticketPrefix);
							},
							className: `px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${isSelected ? "bg-ink text-on-primary shadow-sm font-semibold" : "bg-bg text-ink hover:bg-surface border border-ink/4"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-2 h-2 rounded-full ${isSelected ? "bg-success" : "bg-muted"}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: coach.coachName }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-2xs opacity-70 font-mono",
									children: [
										"(",
										coach.originCity.slice(0, 3),
										" ➔ ",
										coach.destinationCity.slice(0, 3),
										")"
									]
								})
							]
						}, coach.id);
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-bg rounded-3xl p-6 border border-ink/6 space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pb-3 border-b border-ink/6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative w-14 h-14 rounded-2xl overflow-hidden border border-ink/8 shadow-sm shrink-0 bg-primary-deep/10 flex items-center justify-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: photos.heroCoach || DEFAULT_COACH_IMAGES.heroCoach,
												alt: selectedCoach.coachName,
												className: "w-full h-full object-cover"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1 right-1 w-2 h-2 rounded-full bg-success-bright ring-2 ring-white animate-pulse" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs font-mono font-bold text-primary",
												children: [
													selectedCoach.registration,
													" · ",
													selectedCoach.ticketPrefix
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-base font-bold text-ink mt-0.5",
												children: selectedCoach.coachName
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted",
												children: selectedCoach.model
											})
										] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: handleRefresh,
										disabled: isRefreshing,
										className: "p-2 rounded-full bg-card hover:bg-ink/5 text-ink border border-ink/6 shadow-sm transition-all cursor-pointer",
										title: "Refresh Telemetry",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `w-4 h-4 ${isRefreshing ? "animate-spin text-primary" : ""}` })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-card rounded-2xl p-4 border border-ink/4 shadow-sm space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 text-xs text-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-3.5 h-3.5 text-danger" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Current GPS Position" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold text-ink",
											children: selectedCoach.currentLocationName
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xxs font-mono text-muted",
											children: [
												"GPS: ",
												selectedCoach.currentLatitude.toFixed(4),
												"° S, ",
												selectedCoach.currentLongitude.toFixed(4),
												"° E"
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted",
												children: "Corridor Transit Progress:"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-mono font-bold text-primary",
												children: [selectedCoach.overallProgressPercent, "%"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-full h-2 bg-surface rounded-full overflow-hidden",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-full bg-primary rounded-full transition-all duration-700",
												style: { width: `${selectedCoach.overallProgressPercent}%` }
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between text-xs text-muted pt-0.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Next: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-ink",
												children: selectedCoach.nextStopName
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-success font-mono font-bold",
												children: selectedCoach.nextStopEta
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-3 gap-3 pt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-card rounded-2xl p-3.5 border border-ink/4 shadow-sm text-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "w-4 h-4 text-primary mx-auto mb-1" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-2xs text-muted uppercase block",
													children: "Speed"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-base font-extrabold text-ink font-mono",
													children: [
														selectedCoach.currentSpeedKmH,
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-2xs font-normal text-muted",
															children: "km/h"
														})
													]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-card rounded-2xl p-3.5 border border-ink/4 shadow-sm text-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thermometer, { className: "w-4 h-4 text-success mx-auto mb-1" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-2xs text-muted uppercase block",
													children: "Cabin Temp"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-base font-extrabold text-ink font-mono",
													children: [selectedCoach.cabinTempC, "°C"]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-card rounded-2xl p-3.5 border border-ink/4 shadow-sm text-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, { className: "w-4 h-4 text-warn mx-auto mb-1" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-2xs text-muted uppercase block",
													children: "Starlink"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-bold text-success font-mono mt-0.5 block",
													children: "Active"
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-success/10 rounded-2xl p-3.5 border border-success/20 text-xs space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 font-bold text-success",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Beitbridge Fast-Track Status" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-ink text-xxs leading-relaxed",
										children: selectedCoach.borderStatus
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs text-muted pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Captain: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "text-ink",
										children: selectedCoach.driverName
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Co-pilot: ", selectedCoach.copilotName] })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xxs text-muted flex items-center justify-between px-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Telemetry: ", lastPingTime] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-success font-medium",
								children: "GPS Signal: 100% Locked"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 bg-bg rounded-3xl p-6 border border-ink/6 flex flex-col justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pb-4 border-b border-ink/6 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-sm font-bold text-ink",
									children: ["Corridor Route: ", selectedCoach.routeName]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: "Trans-Limpopo N1 & A4 Highway Backbone"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-mono bg-card px-3 py-1 rounded-full border border-ink/6 text-ink shadow-sm",
									children: selectedCoach.departureDate
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "my-5 relative bg-surface rounded-2xl p-4 border border-ink/6 min-h-[300px] flex items-center justify-center overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-15 bg-[radial-gradient(#1d1d1f_1px,transparent_1px)] [background-size:20px_20px]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										viewBox: "0 0 100 100",
										className: "w-full h-72 sm:h-80 drop-shadow-sm pointer-events-none",
										preserveAspectRatio: "none",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M 32 88 L 35 78 L 44 58 L 50 44 L 54 38 L 62 24 L 74 12",
												fill: "none",
												stroke: "#C7C7CC",
												strokeWidth: "2.5",
												strokeDasharray: "2 2"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M 32 88 L 35 78 L 44 58 L 50 44 L 54 38",
												fill: "none",
												stroke: "#0071E3",
												strokeWidth: "3.5",
												strokeLinecap: "round"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M 15 40 Q 50 39 95 36",
												fill: "none",
												stroke: "#1b5fbf",
												strokeWidth: "1.2",
												strokeDasharray: "3 2",
												opacity: "0.5"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
												x: "68",
												y: "34",
												fill: "#1b5fbf",
												fontSize: "2.6",
												fontFamily: "Plus Jakarta Sans, sans-serif",
												fontWeight: "bold",
												children: "LIMPOPO RIVER (BORDER)"
											}),
											selectedCoach.stops.map((stop) => {
												const isCurrent = stop.status === "current";
												const isPassed = stop.status === "passed";
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
													cx: stop.coords.x,
													cy: stop.coords.y,
													r: isCurrent ? 3.8 : 2.2,
													fill: isCurrent ? "#2f7d4a" : isPassed ? "#1b5fbf" : "#6e6e6a",
													stroke: "#fbfbfa",
													strokeWidth: "1"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
													x: stop.coords.x + 3.8,
													y: stop.coords.y + 1,
													fill: isCurrent ? "#1c1c1a" : isPassed ? "#1c1c1a" : "#6e6e6a",
													fontSize: "3.2",
													fontWeight: isCurrent ? "bold" : "normal",
													fontFamily: "Plus Jakarta Sans, sans-serif",
													children: stop.city
												})] }, stop.name);
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
												transform: `translate(${selectedCoach.stops.find((s) => s.status === "current")?.coords.x || 50}, ${selectedCoach.stops.find((s) => s.status === "current")?.coords.y || 44})`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
														r: "7",
														fill: "#2f7d4a",
														opacity: "0.25",
														className: "animate-ping"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
														r: "4.5",
														fill: "#2f7d4a",
														stroke: "#fbfbfa",
														strokeWidth: "1.5"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
														r: "2",
														fill: "#fbfbfa"
													})
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-3 left-3 bg-card/90 backdrop-blur-md border border-ink/6 rounded-xl px-3 py-2 text-2xs space-y-1 shadow-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 text-ink",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Traveled Waypoints" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 text-success font-semibold",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-success animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Live Coach Position" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 text-muted",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upcoming Stations" })]
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold text-muted uppercase tracking-wider",
									children: "Scheduled Stops & Arrival Forecast:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-1.5 max-h-48 overflow-y-auto pr-1",
									children: selectedCoach.stops.map((stop, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `flex items-center justify-between p-2.5 rounded-xl text-xs transition-colors ${stop.status === "current" ? "bg-card shadow-sm border border-ink/6 text-ink font-semibold" : stop.status === "passed" ? "bg-ink/2 text-ink" : "text-muted"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-2 h-2 rounded-full ${stop.status === "current" ? "bg-success" : stop.status === "passed" ? "bg-primary" : "bg-surface"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [stop.city, ":"] }),
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted font-normal",
													children: stop.name
												})
											] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right font-mono",
											children: [
												stop.status === "passed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted",
													children: stop.passedAt
												}),
												stop.status === "current" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-success font-bold",
													children: stop.eta || "Now Boarding"
												}),
												stop.status === "upcoming" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted",
													children: stop.eta || `Sched: ${stop.scheduledTime}`
												})
											]
										})]
									}, idx))
								})]
							})
						]
					})]
				})
			]
		})
	});
};
var FleetAndAmenities = ({ onOpenBooking }) => {
	const { photos, openUploadModal } = useBusPhotos();
	const [activeFeature, setActiveFeature] = (0, import_react.useState)("seating");
	const [isFullscreenModal, setIsFullscreenModal] = (0, import_react.useState)(false);
	const displayCabin = photos.cabinInterior || DEFAULT_COACH_IMAGES.cabinInterior;
	const displayFront = photos.frontBoarding || DEFAULT_COACH_IMAGES.frontBoarding;
	const displayLuggage = photos.luggageHold || DEFAULT_COACH_IMAGES.luggageHold;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "fleet-section",
		className: "py-20 bg-bg border-b border-ink/6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-medium text-muted mb-2 select-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Fleet Specifications" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Scania Irizar i6S Executive Coaches"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl sm:text-5xl font-bold text-ink tracking-tight",
							children: "Engineered for the 900-kilometer stretch."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted text-base sm:text-lg leading-relaxed",
							children: "Take a seat inside our passenger cabin: ergonomic leather recliners with adjustable calf supports, wide headrests, quiet air suspension, and high-speed Starlink satellite connectivity."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-card rounded-3xl p-6 sm:p-8 border border-ink/6 shadow-soft mb-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs font-medium text-success flex items-center gap-1.5 mb-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Armchair, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Executive Comfort Standard" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl sm:text-3xl font-bold text-ink tracking-tight",
										children: "Executive 2+2 Recliners"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted mt-2 leading-relaxed",
										children: "Sculpted ergonomic seating with adjustable calf supports, wide headrests, and a 140-degree recline angle calibrated for effortless overnight sleep between Johannesburg and Harare."
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2",
									children: [
										{
											id: "seating",
											title: "140° Articulated Recline",
											desc: "Dual-density foam cushioning with pneumatic lumbar support.",
											icon: Armchair
										},
										{
											id: "wifi",
											title: "Starlink In-Transit Wi-Fi",
											desc: "Continuous satellite connectivity across border provinces.",
											icon: Wifi
										},
										{
											id: "border",
											title: "Fast-Track Border Manifesting",
											desc: "Pre-cleared Beitbridge digital manifests for expedited processing.",
											icon: ShieldCheck
										},
										{
											id: "power",
											title: "Individual USB-C & 220V Outlets",
											desc: "Fast charging available at every window and aisle seat.",
											icon: Zap
										}
									].map((feature) => {
										const Icon = feature.icon;
										const isActive = activeFeature === feature.id;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setActiveFeature(feature.id),
											className: `w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${isActive ? "bg-bg border-primary shadow-sm" : "bg-card border-ink/4 hover:bg-bg/70"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `p-2 rounded-xl shrink-0 transition-colors ${isActive ? "bg-primary text-on-primary" : "bg-ink/5 text-ink"}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex-1 min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs font-semibold text-ink",
													children: feature.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xxs text-muted mt-0.5 leading-snug",
													children: feature.desc
												})]
											})]
										}, feature.id);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4 rounded-2xl bg-primary/5 border border-primary/15 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-8 h-8 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-xs",
											children: "50kg"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-semibold text-ink",
											children: "Complimentary Baggage"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xxs text-muted",
											children: "2x 25kg checked suitcases + 1 carry-on"
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xxs text-success font-semibold",
										children: "Included"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-ink border border-ink/8 shadow-[0_12px_40px_rgba(0,0,0,0.08)] group select-none flex items-center justify-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: displayCabin,
										alt: "Busachamone Executive Luxury Coach Cabin Interior with Leather Seats",
										className: "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-4 left-4 flex items-center gap-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "px-3 py-1 rounded-full bg-ink/40 backdrop-blur-xl border border-on-primary/20 text-xxs font-medium text-on-primary flex items-center gap-2 shadow-lg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Executive Cabin Experience" })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setIsFullscreenModal(true),
										className: "absolute top-4 right-4 p-2 rounded-full bg-ink/40 backdrop-blur-xl border border-on-primary/20 text-on-primary hover:bg-ink/70 transition-all shadow-lg cursor-pointer",
										title: "Expand High-Res Cabin View",
										"aria-label": "Expand High-Res Cabin View",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-ink/60 backdrop-blur-xl border border-on-primary/15 rounded-2xl p-3.5 text-on-primary shadow-xl",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-primary font-medium",
													children: "Standard Amenities"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-on-primary/60",
													children: "Scania Irizar i6S Executive"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-xs font-semibold text-on-primary",
												children: "Ergonomic Leather Recliners · Clean Center Aisle · High-Speed Wi-Fi"
											})]
										})
									})
								]
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-3xl p-5 border border-ink/6 shadow-sm flex flex-col justify-between overflow-hidden relative group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pb-2.5 border-b border-ink/5 mb-2.5 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 font-semibold text-ink",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bus, { className: "w-4 h-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Boarding Entrance" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-success font-medium",
										children: "Dedicated Bays"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[4/3] rounded-2xl overflow-hidden mb-2.5 border border-ink/6 bg-bg flex items-center justify-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: displayFront,
											alt: "Busachamone Scania Coach Passenger Boarding Door",
											className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent pointer-events-none" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute bottom-2.5 left-2.5 text-on-primary text-xs font-medium",
											children: "Pneumatic Boarding Step & Chrome Bullbar"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted leading-relaxed",
									children: "Powerhouse Terminal (Johannesburg) and Roadport (Harare) dedicated executive departure platforms."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-3xl p-5 border border-ink/6 shadow-sm flex flex-col justify-between overflow-hidden relative group",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between pb-2.5 border-b border-ink/5 mb-2.5 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 font-semibold text-ink",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "w-4 h-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Underfloor Baggage Hold" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-medium",
										children: "50kg Included"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[4/3] rounded-2xl overflow-hidden mb-2.5 border border-ink/6 bg-bg flex items-center justify-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: displayLuggage,
											alt: "Busachamone Underfloor Luggage Hold",
											className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent pointer-events-none" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute bottom-2.5 left-2.5 text-on-primary text-xs font-medium",
											children: "Continuous Pass-Through Hold"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted leading-relaxed",
									children: "Complimentary 2x 25kg checked suitcases + 1 hand luggage. Serialized tamper-evident luggage receipts."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-3xl p-5 border border-ink/6 shadow-sm flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coffee, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-semibold text-ink",
									children: "Sanitary Washroom"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted leading-relaxed mt-1.5",
									children: "Odor-controlled, continuously serviced chemical lavatory onboard for total comfort throughout the overnight journey."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-3 border-t border-ink/5 flex items-center justify-between text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: "Service Protocol"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-success",
									children: "Cleaned Every Trip"
								})]
							})]
						})
					]
				})
			]
		}), isFullscreenModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-50 bg-ink/95 backdrop-blur-2xl flex items-center justify-center p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-5xl w-full bg-ink rounded-3xl overflow-hidden border border-on-primary/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-4 border-b border-on-primary/10 text-on-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold",
						children: "Executive Cabin Experience"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setIsFullscreenModal(false),
						className: "text-on-primary/60 hover:text-on-primary px-3 py-1 bg-card/10 rounded-full text-xs font-semibold cursor-pointer",
						children: "Close"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative aspect-[16/10] w-full bg-ink flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: displayCabin,
						alt: "Executive Cabin",
						className: "w-full h-full object-contain"
					})
				})]
			})
		})]
	});
};
var CharterInquirySection = () => {
	const { photos, openUploadModal } = useBusPhotos();
	const [formData, setFormData] = (0, import_react.useState)({
		fullName: "",
		phone: "",
		email: "",
		serviceType: "Private Coach Charter",
		origin: "Johannesburg",
		destination: "Harare",
		estimatedDate: "",
		groupSize: "Full Bus (50 Seater)",
		message: ""
	});
	const [isSubmitted, setIsSubmitted] = (0, import_react.useState)(false);
	const [inquiryRef, setInquiryRef] = (0, import_react.useState)("");
	const [showFlyerModal, setShowFlyerModal] = (0, import_react.useState)(false);
	const [formError, setFormError] = (0, import_react.useState)(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.fullName || !formData.phone || !formData.email) {
			setFormError("Please fill in your name, contact phone, and email address.");
			return;
		}
		setFormError(null);
		const ref = `BUSA-INQ-${Math.floor(1e3 + Math.random() * 9e3)}`;
		setInquiryRef(ref);
		setIsSubmitted(true);
	};
	const generateWhatsAppMessage = () => {
		const text = `Hello Busachamone Luxury Desk!%0A%0A*Service Inquiry Reference:* ${inquiryRef}%0A*Name:* ${formData.fullName}%0A*Contact:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service Requested:* ${formData.serviceType}%0A*Route:* ${formData.origin} to ${formData.destination}%0A*Date:* ${formData.estimatedDate || "Flexible"}%0A*Group Size / Cargo:* ${formData.groupSize}%0A*Details:* ${formData.message || "Standard quote required."}%0A%0APlease provide a quote.`;
		return `https://wa.me/${BUSA_CONTACTS.whatsappNumber}?text=${text}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inquiries-section",
		className: "py-20 bg-card border-b border-ink/6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-3xl mb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-bg border border-ink/6 text-xs font-semibold text-muted shadow-sm mb-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Special Operations & Charters" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary-deep",
								children: "Rapid Response Dispatch"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl sm:text-4xl font-extrabold text-ink tracking-tight",
						children: "Service inquiries, bus charters & cross-border freight."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted text-base leading-relaxed",
						children: "Need an exclusive 50-seater VIP coach for a church convention, wedding, corporate retreat, or funeral? Or reliable cross-border commercial freight and parcel delivery between South Africa and Zimbabwe? Complete the inquiry form below for an immediate dispatch consultation."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5 space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-bg rounded-3xl p-4 sm:p-6 border border-ink/6 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pb-3 mb-3 border-b border-ink/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-primary-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-ink",
										children: "Official Services Charter"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-2xs font-mono text-success-bright font-bold uppercase",
									children: "Busachamone Fleet"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[16/10] rounded-2xl overflow-hidden bg-bg border border-ink/6 group shadow-inner",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: photos.sideProfile || photos.heroCoach || DEFAULT_COACH_IMAGES.sideProfile,
										alt: "Busachamone Integrated Services luxury coach side profile",
										className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setShowFlyerModal(true),
										className: "absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-ink/60 backdrop-blur-md text-on-primary text-xxs font-medium border border-on-primary/20 hover:bg-ink/80 transition-all flex items-center gap-1.5 shadow-lg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Enlarge Photo" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute bottom-3 left-3 text-on-primary text-xs font-semibold drop-shadow-sm",
										children: "Busachamone Scania Irizar i6S"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-2 text-xs text-ink",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 bg-card p-2.5 rounded-xl border border-ink/4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bus, { className: "w-4 h-4 text-primary-deep shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "50-Seater Executive Charters across SA & Zimbabwe" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 bg-card p-2.5 rounded-xl border border-ink/4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "w-4 h-4 text-success-bright shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Direct Beitbridge Commercial Freight Manifesting" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 bg-card p-2.5 rounded-xl border border-ink/4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4 text-warn shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Full Cross-Border Insurance & Certified Double Drivers" })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 pt-3 border-t border-ink/6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xxs font-semibold text-muted mb-2",
									children: "Immediate Dispatch Telephone:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-2 text-xs font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${BUSA_CONTACTS.phoneSaPrimary}`,
										className: "p-2 rounded-xl bg-card hover:bg-surface border border-ink/6 text-center text-ink transition-colors",
										children: ["SA: ", BUSA_CONTACTS.phoneSaPrimary]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${BUSA_CONTACTS.phoneZimPrimary}`,
										className: "p-2 rounded-xl bg-card hover:bg-surface border border-ink/6 text-center text-ink transition-colors",
										children: ["ZIM: ", BUSA_CONTACTS.phoneZimPrimary]
									})]
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7 bg-bg rounded-3xl p-6 sm:p-8 border border-ink/6",
					children: isSubmitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-10 text-center space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-16 h-16 rounded-full bg-success-bright/10 text-success-bright flex items-center justify-center mx-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-8 h-8" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-mono font-bold text-primary-deep uppercase tracking-wider",
										children: ["Inquiry Reference: ", inquiryRef]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-2xl font-bold text-ink",
										children: ["Inquiry Received, ", formData.fullName]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs sm:text-sm text-muted max-w-md mx-auto leading-relaxed",
										children: "Our luxury charter and freight dispatch coordinator has received your details and is calculating your customized rate."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-card rounded-2xl p-4 border border-ink/6 text-xs text-left max-w-md mx-auto space-y-1.5 text-ink font-mono shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Service:" }),
										" ",
										formData.serviceType
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Route:" }),
										" ",
										formData.origin,
										" ➔ ",
										formData.destination
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Phone:" }),
										" ",
										formData.phone
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Volume/Group:" }),
										" ",
										formData.groupSize
									] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row items-center justify-center gap-3 pt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: generateWhatsAppMessage(),
									target: "_blank",
									rel: "noopener noreferrer",
									className: "w-full sm:w-auto px-6 py-3 bg-success-bright hover:bg-success text-on-primary font-semibold text-xs rounded-full flex items-center justify-center gap-2 transition-all shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Chat With Dispatch on WhatsApp" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setIsSubmitted(false);
										setFormData({
											fullName: "",
											phone: "",
											email: "",
											serviceType: "Private Coach Charter",
											origin: "Johannesburg",
											destination: "Harare",
											estimatedDate: "",
											groupSize: "Full Bus (50 Seater)",
											message: ""
										});
									},
									className: "w-full sm:w-auto px-6 py-3 bg-card text-ink border border-ink/8 hover:bg-surface text-xs font-semibold rounded-full transition-all cursor-pointer",
									children: "Submit Another Inquiry"
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-ink/6 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-bold text-ink",
									children: "Submit Contact Details & Service Inquiries"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted mt-0.5",
									children: "Our team provides custom quotes for group charters and palletized freight within 60 minutes."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xxs font-semibold text-muted uppercase tracking-wider mb-1.5",
								children: "Service Required"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 sm:grid-cols-3 gap-2",
								children: [
									"Private Coach Charter",
									"Express Cross-Border Freight",
									"Group / Pilgrimage Tour"
								].map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setFormData({
										...formData,
										serviceType: type
									}),
									className: `p-3 rounded-2xl text-xs font-semibold text-left transition-all border cursor-pointer ${formData.serviceType === type ? "bg-ink text-on-primary border-transparent shadow-sm" : "bg-card text-ink border-ink/4 hover:bg-card/80"}`,
									children: type
								}, type))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-card rounded-2xl p-3 border border-ink/4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xxs font-semibold text-muted uppercase tracking-wider mb-1",
										children: "Full Name *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										placeholder: "e.g. Tendai Moyo",
										value: formData.fullName,
										onChange: (e) => setFormData({
											...formData,
											fullName: e.target.value
										}),
										className: "w-full bg-transparent text-xs font-semibold text-ink focus:outline-none"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-card rounded-2xl p-3 border border-ink/4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xxs font-semibold text-muted uppercase tracking-wider mb-1",
										children: "Contact Phone / WhatsApp *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "tel",
										required: true,
										placeholder: "+27 / +263 ...",
										value: formData.phone,
										onChange: (e) => setFormData({
											...formData,
											phone: e.target.value
										}),
										className: "w-full bg-transparent text-xs font-semibold text-ink focus:outline-none"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-card rounded-2xl p-3 border border-ink/4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xxs font-semibold text-muted uppercase tracking-wider mb-1",
										children: "Email Address *"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										required: true,
										placeholder: "name@example.com",
										value: formData.email,
										onChange: (e) => setFormData({
											...formData,
											email: e.target.value
										}),
										className: "w-full bg-transparent text-xs font-semibold text-ink focus:outline-none"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bg-card rounded-2xl p-3 border border-ink/4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xxs font-semibold text-muted uppercase tracking-wider mb-1",
										children: "Estimated Travel Date"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "date",
										value: formData.estimatedDate,
										onChange: (e) => setFormData({
											...formData,
											estimatedDate: e.target.value
										}),
										className: "w-full bg-transparent text-xs font-semibold text-ink focus:outline-none cursor-pointer"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-card rounded-2xl p-3 border border-ink/4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xxs font-semibold text-muted uppercase tracking-wider mb-1",
											children: "Origin City"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "e.g. Johannesburg",
											value: formData.origin,
											onChange: (e) => setFormData({
												...formData,
												origin: e.target.value
											}),
											className: "w-full bg-transparent text-xs font-semibold text-ink focus:outline-none"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-card rounded-2xl p-3 border border-ink/4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xxs font-semibold text-muted uppercase tracking-wider mb-1",
											children: "Destination City"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "e.g. Harare / Bulawayo",
											value: formData.destination,
											onChange: (e) => setFormData({
												...formData,
												destination: e.target.value
											}),
											className: "w-full bg-transparent text-xs font-semibold text-ink focus:outline-none"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-card rounded-2xl p-3 border border-ink/4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-xxs font-semibold text-muted uppercase tracking-wider mb-1",
											children: "Group Size / Cargo Volume"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: formData.groupSize,
											onChange: (e) => setFormData({
												...formData,
												groupSize: e.target.value
											}),
											className: "w-full bg-transparent text-xs font-semibold text-ink focus:outline-none cursor-pointer",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Full Bus (50 Seater)",
													children: "Full Coach (50 Seater)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Group 20-35 Persons",
													children: "Medium Group (20-35 Pax)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Small Group (10-19 Pax)",
													children: "Small Group (10-19 Pax)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Commercial Pallet / Boxes",
													children: "Commercial Pallets / Boxes"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Vehicle / Equipment Spare",
													children: "Machinery / Heavy Parts"
												})
											]
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-card rounded-2xl p-3 border border-ink/4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xxs font-semibold text-muted uppercase tracking-wider mb-1",
									children: "Special Inquiries or Cargo Details"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 2,
									placeholder: "Specify any route stops, pickup points, return journey requests, or freight weight...",
									value: formData.message,
									onChange: (e) => setFormData({
										...formData,
										message: e.target.value
									}),
									className: "w-full bg-transparent text-xs font-medium text-ink focus:outline-none resize-none"
								})]
							}),
							formError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-danger",
								children: formError
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "w-full py-3.5 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-2xl shadow-primary-glow transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Submit Inquiry for Immediate Quote" })]
							})
						]
					})
				})]
			})]
		}), showFlyerModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-50 bg-ink/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-4xl w-full bg-ink rounded-3xl overflow-hidden border border-on-primary/20 shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between p-4 border-b border-on-primary/10 text-on-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold",
							children: "Busachamone Scania Irizar i6S Charter Fleet"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setShowFlyerModal(false),
							className: "text-on-primary/60 hover:text-on-primary px-3 py-1 bg-card/10 rounded-full text-xs font-semibold cursor-pointer",
							children: "Close (ESC)"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-[16/10] w-full bg-ink flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: photos.sideProfile || photos.heroCoach || DEFAULT_COACH_IMAGES.sideProfile,
							alt: "Busachamone fleet",
							className: "w-full h-full object-contain"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 bg-ink/80 flex items-center justify-between text-xs text-on-primary/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Collect contact details and service inquiries directly via the form." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setShowFlyerModal(false),
							className: "px-4 py-2 bg-primary-deep text-on-primary rounded-full font-semibold cursor-pointer",
							children: "Complete Inquiry"
						})]
					})
				]
			})
		})]
	});
};
var RouteScheduleSection = ({ onSelectRoute }) => {
	const [activeTab, setActiveTab] = (0, import_react.useState)("sa-to-zim");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "schedules-section",
		className: "py-20 bg-bg border-b border-ink/6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-ink/6 text-xs font-semibold text-muted shadow-sm mb-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Guaranteed Departure Timetables" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "All-Week Service"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl sm:text-4xl font-extrabold text-ink tracking-tight",
							children: "Schedules, departure bays & border guidance."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted text-sm max-w-2xl leading-relaxed",
							children: "Check scheduled departure and reporting times across South Africa terminals and Zimbabwe transit centers."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center bg-surface/70 p-1 rounded-full border border-ink/4 text-xs font-semibold shrink-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveTab("sa-to-zim"),
								className: `px-4 py-1.5 rounded-full transition-all cursor-pointer ${activeTab === "sa-to-zim" ? "bg-card text-ink shadow-sm" : "text-muted hover:text-ink"}`,
								children: "SA ➔ Zimbabwe"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveTab("zim-to-sa"),
								className: `px-4 py-1.5 rounded-full transition-all cursor-pointer ${activeTab === "zim-to-sa" ? "bg-card text-ink shadow-sm" : "text-muted hover:text-ink"}`,
								children: "Zimbabwe ➔ SA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveTab("terminals"),
								className: `px-4 py-1.5 rounded-full transition-all cursor-pointer ${activeTab === "terminals" ? "bg-card text-ink shadow-sm" : "text-muted hover:text-ink"}`,
								children: "Stations"
							})
						]
					})]
				}),
				activeTab === "sa-to-zim" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-3xl p-6 border border-ink/6 shadow-sm flex flex-col justify-between space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs pb-3 border-b border-ink/6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-bold text-primary",
										children: "SERVICE LUX-01"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: "Mon, Wed, Fri"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-ink mt-3",
									children: "Johannesburg ➔ Harare Express"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted mt-1",
									children: "Via Pretoria, Polokwane, Beitbridge Border & Masvingo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 space-y-2.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl bg-bg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted",
												children: "Joburg (Powerhouse)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-ink font-mono text-xs",
												children: "14:00 Dep"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl bg-bg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted",
												children: "Midrand (Big Bird)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-ink font-mono text-xs",
												children: "15:15 Dep"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl bg-bg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted",
												children: "Pretoria (Bosman)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-ink font-mono text-xs",
												children: "16:30 Dep"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl bg-success/10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-ink font-semibold",
												children: "Harare (Roadport)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-success font-mono text-xs",
												children: "07:30 Arr"
											})]
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => onSelectRoute("JNB", "HAR"),
								className: "w-full py-2.5 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-full transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book This Route (R900)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3.5 h-3.5" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-3xl p-6 border border-ink/6 shadow-sm flex flex-col justify-between space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs pb-3 border-b border-ink/6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-bold text-primary",
										children: "SERVICE LUX-03"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: "Mon, Wed, Fri, Sat"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-ink mt-3",
									children: "Johannesburg ➔ Bulawayo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted mt-1",
									children: "Via Pretoria, Beitbridge Border & Gwanda"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 space-y-2.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl bg-bg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted",
												children: "Joburg (Powerhouse)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-ink font-mono text-xs",
												children: "13:30 Dep"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl bg-bg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted",
												children: "Pretoria (Bosman)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-ink font-mono text-xs",
												children: "15:45 Dep"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl bg-bg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted",
												children: "Gwanda (Town Depot)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-ink font-mono text-xs",
												children: "03:45 Arr"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl bg-success/10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-ink font-semibold",
												children: "Bulawayo (5th Ave)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-success font-mono text-xs",
												children: "06:15 Arr"
											})]
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => onSelectRoute("JNB", "BYO"),
								className: "w-full py-2.5 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-full transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book This Route (R850)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3.5 h-3.5" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-3xl p-6 border border-ink/6 shadow-sm space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs font-bold text-ink pb-3 border-b border-ink/6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Travel Requirements Checklist" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 text-xs text-ink",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Valid Passport:" }), " At least 6 months validity from travel date."] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Luggage Allowance:" }), " 2x 25kg checked bags + 1 hand luggage included free."] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Child Clearances:" }), " Minors require unabridged birth certificate & parental consent."] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Reporting Window:" }), " Arrive 1 hour before departure for luggage check-in."] })]
									})
								]
							})]
						})
					]
				}),
				activeTab === "zim-to-sa" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-3xl p-6 border border-ink/6 shadow-sm flex flex-col justify-between space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs pb-3 border-b border-ink/6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-bold text-primary",
										children: "SERVICE LUX-02"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: "Sun, Tue, Thu, Sat"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-ink mt-3",
									children: "Harare ➔ Johannesburg Express"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted mt-1",
									children: "Via Masvingo, Beitbridge Border, Pretoria & Midrand"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 space-y-2.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl bg-bg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted",
												children: "Harare (Roadport)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-ink font-mono text-xs",
												children: "16:30 Dep"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl bg-bg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted",
												children: "Masvingo (Exor)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-ink font-mono text-xs",
												children: "20:00 Dep"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl bg-bg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted",
												children: "Pretoria (Bosman)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-ink font-mono text-xs",
												children: "07:00 Arr"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl bg-success/10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-ink font-semibold",
												children: "Joburg (Powerhouse)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-success font-mono text-xs",
												children: "08:30 Arr"
											})]
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => onSelectRoute("HAR", "JNB"),
								className: "w-full py-2.5 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-full transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book This Route (R800 / $45)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3.5 h-3.5" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-3xl p-6 border border-ink/6 shadow-sm flex flex-col justify-between space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs pb-3 border-b border-ink/6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono font-bold text-primary",
										children: "SERVICE LUX-04"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: "Sun, Tue, Thu"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-bold text-ink mt-3",
									children: "Bulawayo ➔ Johannesburg"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted mt-1",
									children: "Via Gwanda, Beitbridge Border & Pretoria"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 space-y-2.5 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl bg-bg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted",
												children: "Bulawayo (5th Ave)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-ink font-mono text-xs",
												children: "15:00 Dep"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl bg-bg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted",
												children: "Gwanda (Town Depot)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-ink font-mono text-xs",
												children: "17:15 Dep"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl bg-bg",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted",
												children: "Pretoria (Bosman)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-ink font-mono text-xs",
												children: "06:30 Arr"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl bg-success/10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-ink font-semibold",
												children: "Joburg (Powerhouse)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-success font-mono text-xs",
												children: "08:00 Arr"
											})]
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => onSelectRoute("BYO", "JNB"),
								className: "w-full py-2.5 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-full transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book This Route (R800 / $45)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3.5 h-3.5" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-3xl p-6 border border-ink/6 shadow-sm space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-bold text-ink pb-3 border-b border-ink/6",
									children: "Zimbabwe Domestic Shuttle"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted leading-relaxed",
									children: "Traveling between Bulawayo and Harare? Busa Express operates clean executive day shuttles connecting Bulawayo 5th Avenue with Harare Roadport daily at 07:30."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-3 bg-bg rounded-2xl text-xs space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold text-ink",
										children: "Bulawayo ➔ Harare Express"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-muted",
										children: "Fare: $25 USD / R450 · ~6 Hours Transit"
									})]
								})
							]
						})
					]
				}),
				activeTab === "terminals" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
					children: TERMINALS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 bg-card border border-ink/6 rounded-2xl shadow-sm space-y-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold text-ink",
									children: t.city
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-2xs font-mono px-2 py-0.5 rounded-full bg-bg text-primary",
									children: t.country
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold text-ink",
								children: t.terminalName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted flex items-start gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-3.5 h-3.5 text-muted shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.address })]
							})
						]
					}, t.id))
				})
			]
		})
	});
};
var TestimonialsSection = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 bg-card border-b border-ink/6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg border border-ink/6 text-xs font-semibold text-muted shadow-sm mb-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verified Passenger Reviews" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Facebook Community"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl sm:text-4xl font-extrabold text-ink tracking-tight",
						children: "Trusted by thousands of cross-border travelers."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: BUSA_CONTACTS.facebookUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 px-4 py-2 bg-bg hover:bg-surface text-ink border border-ink/8 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "w-4 h-4 text-facebook" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Visit Official Facebook @BusaExpress.Luxury" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-3.5 h-3.5 text-muted" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 bg-bg rounded-2xl border border-ink/4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-extrabold text-ink font-mono",
								children: "98.4%"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted mt-1 font-medium",
								children: "On-Time Departure Rate"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 bg-bg rounded-2xl border border-ink/4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-extrabold text-success font-mono",
								children: "~35 min"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted mt-1 font-medium",
								children: "Avg. Fast-Track Border Clearance"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 bg-bg rounded-2xl border border-ink/4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-extrabold text-primary font-mono",
								children: "42,000+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted mt-1 font-medium",
								children: "Safe Cross-Border Passengers"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 bg-bg rounded-2xl border border-ink/4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl font-extrabold text-warn font-mono",
								children: "100%"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted mt-1 font-medium",
								children: "Luggage Security & Tagging"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-6",
					children: [
						{
							name: "Tariro Ndlovu",
							route: "Johannesburg to Harare (The Royale VIP)",
							date: "Traveled September 2026",
							rating: 5,
							comment: "The best cross-border trip I have ever had between SA and Zim. Beitbridge border was cleared smoothly without delays thanks to their dedicated clearing staff. Wi-Fi worked the entire journey and the leather recliners are super comfortable."
						},
						{
							name: "Dr. Farai Muringani",
							route: "Harare to Pretoria (Sovereign Diamond)",
							date: "Traveled August 2026",
							rating: 5,
							comment: "Punctual departure from Harare Roadport at 16:30 sharp. The coach was spotless, air conditioning kept the cabin at an ideal 21 degrees, and having live GPS tracking meant my family in Pretoria knew exactly when to pick me up at Bosman."
						},
						{
							name: "Sibongile Moyo",
							route: "Joburg to Bulawayo (Grand Deluxe)",
							date: "Traveled September 2026",
							rating: 5,
							comment: "I have already completed 4 trips with Busa Express and I am looking forward to my 5th trip so I can claim my 6th free ticket! Driver Captain Dube was very professional and courteous."
						}
					].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 bg-bg rounded-3xl border border-ink/6 flex flex-col justify-between space-y-4 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 text-warn",
								children: Array.from({ length: r.rating }).map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3.5 h-3.5 fill-current" }, idx))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs sm:text-sm text-ink leading-relaxed",
								children: [
									"“",
									r.comment,
									"”"
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-3 border-t border-ink/6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-bold text-ink",
									children: r.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xxs text-primary font-medium",
									children: r.route
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-2xs text-muted mt-0.5",
									children: r.date
								})
							]
						})]
					}, i))
				})
			]
		})
	});
};
var Footer = ({ onScrollToSection }) => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-bg text-muted text-xs border-t border-ink/8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-ink/8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
								size: "md",
								variant: "dark"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted leading-relaxed max-w-sm pt-1",
								children: "Cross-border road passenger mobility between South Africa and Zimbabwe. Scania and Mercedes-Benz luxury fleet, Starlink satellite connectivity, and Beitbridge border fast-tracking."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: BUSA_CONTACTS.facebookUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "w-7 h-7 rounded-full bg-card hover:bg-surface border border-ink/8 flex items-center justify-center text-facebook transition-colors",
									title: "Follow Busa Express on Facebook",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "w-3.5 h-3.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://wa.me/${BUSA_CONTACTS.whatsappNumber}`,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "px-3 py-1 rounded-full bg-card hover:bg-surface border border-ink/8 text-ink text-xs font-medium flex items-center gap-1.5 transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3 h-3 text-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["WhatsApp: ", BUSA_CONTACTS.phoneSaPrimary] })]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold text-ink",
							children: "Quick Links"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onScrollToSection("booking-section"),
									className: "hover:text-primary transition-colors cursor-pointer",
									children: "Book Coach"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onScrollToSection("tracking-section"),
									className: "hover:text-primary transition-colors cursor-pointer",
									children: "Find My Coach (Live GPS)"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onScrollToSection("fleet-section"),
									className: "hover:text-primary transition-colors cursor-pointer",
									children: "Executive Fleet"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onScrollToSection("schedules-section"),
									className: "hover:text-primary transition-colors cursor-pointer",
									children: "Timetables & Routes"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => onScrollToSection("inquiries-section"),
									className: "hover:text-primary transition-colors cursor-pointer",
									children: "Charter & Freight Inquiries"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold text-ink",
							children: "Major Stations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 text-xxs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-ink block",
									children: "Johannesburg Depot"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Powerhouse Terminal, 102 Wanderers St" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-ink block",
									children: "Pretoria Central"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bosman Station Terminal" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-ink block",
									children: "Harare Roadport"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Corner 5th St & Robert Mugabe" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-ink block",
									children: "Bulawayo Station"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Spar 5th Ave & G. Silundika" })] })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold text-ink",
							children: "24/7 Operations Desk"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1 text-xs font-mono",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted block text-2xs font-sans",
									children: "South Africa Hotline:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${BUSA_CONTACTS.phoneSaPrimary}`,
									className: "text-ink hover:text-primary",
									children: BUSA_CONTACTS.phoneSaPrimary
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted block text-2xs font-sans",
									children: "SA Secondary Dispatch:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${BUSA_CONTACTS.phoneSaSecondary}`,
									className: "text-ink hover:text-primary",
									children: BUSA_CONTACTS.phoneSaSecondary
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted block text-2xs font-sans",
									children: "Zimbabwe Hotline:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${BUSA_CONTACTS.phoneZimPrimary}`,
									className: "text-ink hover:text-primary",
									children: BUSA_CONTACTS.phoneZimPrimary
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted block text-2xs font-sans",
									children: "Harare Roadport Desk:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${BUSA_CONTACTS.phoneZimSecondary}`,
									className: "text-ink hover:text-primary",
									children: BUSA_CONTACTS.phoneZimSecondary
								})] })
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Busa Express Luxury Coaches. All rights reserved."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "South Africa & Zimbabwe Cross-Border Transit" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: scrollToTop,
					className: "flex items-center gap-1 text-ink hover:text-primary transition-colors cursor-pointer font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back to top" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "w-3.5 h-3.5" })]
				})]
			})]
		})
	});
};
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppContent, {}) });
}
function AppContent() {
	const [currency, setCurrency] = (0, import_react.useState)("ZAR");
	const [isBookingOpen, setIsBookingOpen] = (0, import_react.useState)(false);
	const [bookingOrigin, setBookingOrigin] = (0, import_react.useState)("JNB");
	const [bookingDestination, setBookingDestination] = (0, import_react.useState)("HAR");
	const [bookingDate, setBookingDate] = (0, import_react.useState)(() => {
		const tomorrow = /* @__PURE__ */ new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		return tomorrow.toISOString().split("T")[0] ?? "";
	});
	const [bookingPassengers, setBookingPassengers] = (0, import_react.useState)(1);
	const [trackedTicketRef, setTrackedTicketRef] = (0, import_react.useState)("BUSA-7821-HAR");
	const handleOpenBooking = () => {
		setIsBookingOpen(true);
	};
	const handleSearchTrips = (origin, destination, date, passengers) => {
		setBookingOrigin(origin);
		setBookingDestination(destination);
		setBookingDate(date);
		setBookingPassengers(passengers);
		setIsBookingOpen(true);
	};
	const handleSelectRouteFromSchedule = (originId, destId) => {
		setBookingOrigin(originId);
		setBookingDestination(destId);
		setIsBookingOpen(true);
	};
	const handleScrollToSection = (sectionId) => {
		const el = document.getElementById(sectionId);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};
	const handleTrackTrip = (ticketRef) => {
		setTrackedTicketRef(ticketRef);
		handleScrollToSection("tracking-section");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-ink flex flex-col font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {
				onOpenBooking: handleOpenBooking,
				onScrollToSection: handleScrollToSection,
				currency,
				onCurrencyChange: setCurrency
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBookingSection, {
						onSearchTrips: handleSearchTrips,
						onScrollToTracking: () => handleScrollToSection("tracking-section"),
						currency
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveTrackingSection, { searchedTicketRef: trackedTicketRef }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FleetAndAmenities, { onOpenBooking: handleOpenBooking }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteScheduleSection, { onSelectRoute: handleSelectRouteFromSchedule }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharterInquirySection, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { onScrollToSection: handleScrollToSection }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingFlowModal, {
				isOpen: isBookingOpen,
				onClose: () => setIsBookingOpen(false),
				initialOrigin: bookingOrigin,
				initialDestination: bookingDestination,
				initialDate: bookingDate,
				initialPassengers: bookingPassengers,
				currency,
				onTrackTrip: handleTrackTrip
			})
		]
	});
}
//#endregion
export { Home as component };
