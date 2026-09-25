import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRightLeft,
  Search,
  ShieldCheck,
  Wifi,
  Navigation,
} from "lucide-react";
import { TERMINALS } from "@/data/busData";
import { CityId } from "@/types/bus";
import { DEFAULT_COACH_IMAGES } from "@/assets/images";
import { cn } from "@/lib/cn";

interface HeroBookingSectionProps {
  onSearchTrips: (origin: CityId, destination: CityId, date: string, passengers: number) => void;
  onScrollToTracking: () => void;
  currency: "ZAR" | "USD" | "ZIG";
}

type PhotoViewTab = "hero" | "side" | "cabin" | "luggage" | "boarding";

const PHOTO_VIEWS: { id: PhotoViewTab; label: string; src: string; position: string }[] = [
  { id: "hero", label: "Coach", src: DEFAULT_COACH_IMAGES.heroCoach, position: "32% 62%" },
  { id: "cabin", label: "Cabin", src: DEFAULT_COACH_IMAGES.cabinInterior, position: "50% 50%" },
  { id: "side", label: "Side", src: DEFAULT_COACH_IMAGES.sideProfile, position: "48% 50%" },
  { id: "boarding", label: "Boarding", src: DEFAULT_COACH_IMAGES.frontBoarding, position: "28% 55%" },
  { id: "luggage", label: "Luggage", src: DEFAULT_COACH_IMAGES.luggageHold, position: "50% 58%" },
];

const SA_HUBS = TERMINALS.filter((t) => t.country === "South Africa");
const ZIM_HUBS = TERMINALS.filter((t) => t.country === "Zimbabwe" && t.id !== "BBR");

const PRICE: Record<"ZAR" | "USD" | "ZIG", string> = {
  ZAR: "R900",
  USD: "$50",
  ZIG: "ZiG 1,350",
};

export const HeroBookingSection: React.FC<HeroBookingSectionProps> = ({
  onSearchTrips,
  onScrollToTracking,
  currency,
}) => {
  const [tripType, setTripType] = useState<"oneWay" | "roundTrip">("oneWay");
  const [origin, setOrigin] = useState<CityId>("JNB");
  const [destination, setDestination] = useState<CityId>("HAR");
  const [departureDate, setDepartureDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split("T")[0];
  });
  const [returnDate, setReturnDate] = useState(() => {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 5);
    return nextWeek.toISOString().split("T")[0];
  });
  const [passengers, setPassengers] = useState(1);
  const [activePhotoView, setActivePhotoView] = useState<PhotoViewTab>("hero");

  const handleSwapCities = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchTrips(origin, destination, departureDate, passengers);
  };

  const todayIso = new Date().toISOString().split("T")[0];

  const renderHubOptions = (hubs: typeof TERMINALS) =>
    hubs.map((t) => (
      <option key={t.id} value={t.id}>
        {t.city}
      </option>
    ));

  return (
    <section id="booking-section" className="relative bg-ink">
      {/* Cinematic photo stage — fills the first screen */}
      <div className="relative h-[58vh] min-h-[320px] max-h-[640px] sm:h-[72vh] sm:min-h-[480px] overflow-hidden">
        {PHOTO_VIEWS.map((view) => {
          const visible = view.id === activePhotoView;
          return (
            <img
              key={view.id}
              src={view.src}
              alt={
                view.id === "hero"
                  ? "Busachamone Scania Irizar i6S executive coach, Johannesburg destination"
                  : `Busachamone coach ${view.label.toLowerCase()}`
              }
              fetchPriority={view.id === "hero" ? "high" : "low"}
              decoding="async"
              style={{ objectPosition: view.position }}
              className={cn(
                "absolute inset-0 size-full object-cover transition-opacity duration-500",
                visible ? "opacity-100" : "opacity-0",
                view.id === "hero" ? "hero-coach-img" : "hero-still-img",
              )}
            />
          );
        })}

        {/* Sun gleam across the coach */}
        {activePhotoView === "hero" && (
          <div
            className="hero-gleam pointer-events-none absolute inset-y-0 -left-1/4 w-1/3 bg-gradient-to-r from-transparent via-on-primary/30 to-transparent"
            aria-hidden="true"
          />
        )}

        {/* Readability scrims — keep the coach visible */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/5" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/25 via-transparent to-transparent" />

        {/* Copy over the photo */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end px-4 sm:px-8 lg:px-12 pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto w-full">
            <div className="hero-copy inline-flex items-center gap-2 text-xxs sm:text-xs font-medium text-on-primary/85 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              <span>Busachamone Integrated Services</span>
              <span className="text-on-primary/35" aria-hidden="true">
                ·
              </span>
              <span>SA ⇄ Zimbabwe daily</span>
            </div>

            <h1 className="hero-copy hero-copy-delay-1 max-w-2xl text-3xl sm:text-5xl lg:text-6xl font-bold text-on-primary tracking-tight leading-[1.08] text-balance">
              Johannesburg to Harare.
              <span className="block text-on-primary/80">Your coach is waiting.</span>
            </h1>

            <p className="hero-copy hero-copy-delay-2 mt-3 max-w-lg text-sm sm:text-base text-on-primary/75 leading-relaxed">
              Scania Irizar i6S executive coaches. Leather recliners, Starlink Wi-Fi, live GPS.
              From {PRICE[currency]}.
            </p>

            {/* Photo view chips */}
            <div className="hero-copy hero-copy-delay-3 mt-5 flex items-center gap-1.5 overflow-x-auto pb-1 -mx-1 px-1">
              {PHOTO_VIEWS.map((view) => {
                const selected = view.id === activePhotoView;
                return (
                  <button
                    key={view.id}
                    type="button"
                    onClick={() => setActivePhotoView(view.id)}
                    className={cn(
                      "shrink-0 min-h-11 px-3.5 rounded-full text-xs font-semibold border transition-[background-color,color,border-color,transform] duration-150 active:scale-[0.96]",
                      selected
                        ? "bg-card text-ink border-card"
                        : "bg-ink/45 text-on-primary border-on-primary/20 backdrop-blur-md hover:bg-ink/60",
                    )}
                  >
                    {view.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Booking card overlapping the photo */}
      <div className="relative z-20 -mt-14 sm:-mt-20 px-4 sm:px-6 lg:px-8 pb-10">
        <form
          onSubmit={handleSearchSubmit}
          className="max-w-5xl mx-auto bg-card rounded-3xl border border-ink/8 shadow-soft p-4 sm:p-5"
        >
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center bg-bg p-1 rounded-full border border-ink/4">
              <button
                type="button"
                onClick={() => setTripType("oneWay")}
                className={cn(
                  "min-h-11 px-4 rounded-full text-xs font-semibold transition-[background-color,color,box-shadow] duration-150",
                  tripType === "oneWay" ? "bg-card text-ink shadow-sm" : "text-muted hover:text-ink",
                )}
              >
                One way
              </button>
              <button
                type="button"
                onClick={() => setTripType("roundTrip")}
                className={cn(
                  "min-h-11 px-4 rounded-full text-xs font-semibold transition-[background-color,color,box-shadow] duration-150",
                  tripType === "roundTrip" ? "bg-card text-ink shadow-sm" : "text-muted hover:text-ink",
                )}
              >
                Return
              </button>
            </div>
            <button
              type="button"
              onClick={onScrollToTracking}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-ink min-h-11"
            >
              <Navigation className="w-3.5 h-3.5 text-primary" />
              Track a coach
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-2 sm:gap-3 items-stretch">
            <label className="block bg-bg rounded-2xl px-3.5 py-2.5 border border-ink/5 min-h-14">
              <span className="block text-2xs font-semibold text-muted tracking-wide">From</span>
              <span className="flex items-center gap-2 mt-0.5">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value as CityId)}
                  className="w-full bg-transparent text-sm font-semibold text-ink focus:outline-none min-h-8"
                  aria-label="Departure city"
                >
                  <optgroup label="South Africa">{renderHubOptions(SA_HUBS)}</optgroup>
                  <optgroup label="Zimbabwe">{renderHubOptions(ZIM_HUBS)}</optgroup>
                </select>
              </span>
            </label>

            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={handleSwapCities}
                className="w-11 h-11 rounded-full bg-bg border border-ink/8 flex items-center justify-center text-ink transition-transform duration-200 active:rotate-180 shadow-sm"
                aria-label="Swap origin and destination"
              >
                <ArrowRightLeft className="w-4 h-4" />
              </button>
            </div>

            <label className="block bg-bg rounded-2xl px-3.5 py-2.5 border border-ink/5 min-h-14">
              <span className="block text-2xs font-semibold text-muted tracking-wide">To</span>
              <span className="flex items-center gap-2 mt-0.5">
                <MapPin className="w-4 h-4 text-success shrink-0" />
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value as CityId)}
                  className="w-full bg-transparent text-sm font-semibold text-ink focus:outline-none min-h-8"
                  aria-label="Arrival city"
                >
                  <optgroup label="Zimbabwe">{renderHubOptions(ZIM_HUBS)}</optgroup>
                  <optgroup label="South Africa">{renderHubOptions(SA_HUBS)}</optgroup>
                </select>
              </span>
            </label>
          </div>

          <div
            className={cn(
              "mt-2 grid gap-2 sm:gap-3",
              tripType === "roundTrip" ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3",
            )}
          >
            <label className="block bg-bg rounded-2xl px-3.5 py-2.5 border border-ink/5 min-h-14">
              <span className="block text-2xs font-semibold text-muted tracking-wide">Depart</span>
              <span className="flex items-center gap-2 mt-0.5">
                <Calendar className="w-4 h-4 text-primary shrink-0" />
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  min={todayIso}
                  className="w-full bg-transparent text-sm font-semibold text-ink focus:outline-none min-h-8"
                  aria-label="Departure date"
                />
              </span>
            </label>

            {tripType === "roundTrip" && (
              <label className="block bg-bg rounded-2xl px-3.5 py-2.5 border border-ink/5 min-h-14">
                <span className="block text-2xs font-semibold text-muted tracking-wide">Return</span>
                <span className="flex items-center gap-2 mt-0.5">
                  <Calendar className="w-4 h-4 text-muted shrink-0" />
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    min={departureDate}
                    className="w-full bg-transparent text-sm font-semibold text-ink focus:outline-none min-h-8"
                    aria-label="Return date"
                  />
                </span>
              </label>
            )}

            <label className="block bg-bg rounded-2xl px-3.5 py-2.5 border border-ink/5 min-h-14">
              <span className="block text-2xs font-semibold text-muted tracking-wide">Passengers</span>
              <span className="flex items-center gap-2 mt-0.5">
                <Users className="w-4 h-4 text-primary shrink-0" />
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="w-full bg-transparent text-sm font-semibold text-ink focus:outline-none min-h-8"
                  aria-label="Number of passengers"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "adult" : "adults"}
                    </option>
                  ))}
                </select>
              </span>
            </label>

            <button
              type="submit"
              className="col-span-2 sm:col-span-1 min-h-14 px-5 bg-primary hover:bg-primary-hover active:scale-[0.96] text-on-primary text-sm font-semibold rounded-2xl shadow-primary-glow transition-[background-color,transform] duration-150 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Find coaches</span>
            </button>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xxs sm:text-xs text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Wifi className="w-3.5 h-3.5 text-primary" />
              Starlink Wi-Fi
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-success" />
              Fast-track Beitbridge
            </span>
            <span>50kg bags included</span>
            <button
              type="button"
              onClick={onScrollToTracking}
              className="sm:hidden inline-flex items-center gap-1.5 min-h-11 font-medium text-primary"
            >
              <Navigation className="w-3.5 h-3.5" />
              Track my coach
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
