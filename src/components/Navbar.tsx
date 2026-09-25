import React, { useState } from 'react';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSA_CONTACTS } from '@/data/busData';

interface NavbarProps {
  onOpenBooking: () => void;
  onScrollToSection: (sectionId: string) => void;
  currency: 'ZAR' | 'USD' | 'ZIG';
  onCurrencyChange: (currency: 'ZAR' | 'USD' | 'ZIG') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onScrollToSection,
  currency,
  onCurrencyChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-bg/80 backdrop-blur-2xl saturate-150 border-b border-ink/6 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
        
        {/* Zone 1: Single Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
          aria-label="Busa Express Luxury Coaches"
        >
          <BrandLogo size="md" showSubtitle={false} />
        </a>

        {/* Zone 2: Clean Typography Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink/70">
          <button
            onClick={() => handleNavClick('booking-section')}
            className="hover:text-ink transition-colors cursor-pointer"
          >
            Bookings
          </button>
          <button
            onClick={() => handleNavClick('tracking-section')}
            className="hover:text-ink transition-colors cursor-pointer"
          >
            Live Tracking
          </button>
          <button
            onClick={() => handleNavClick('fleet-section')}
            className="hover:text-ink transition-colors cursor-pointer"
          >
            Fleet & Cabin
          </button>
          <button
            onClick={() => handleNavClick('schedules-section')}
            className="hover:text-ink transition-colors cursor-pointer"
          >
            Timetables
          </button>
          <button
            onClick={() => handleNavClick('inquiries-section')}
            className="hover:text-ink transition-colors cursor-pointer"
          >
            Charter & Freight
          </button>
        </nav>

        {/* Zone 3: Actions & Controls */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* iOS Segmented Currency Control */}
          <div className="hidden sm:flex items-center bg-ink/4 p-0.5 rounded-full text-xxs font-medium border border-ink/4">
            {(['ZAR', 'USD', 'ZIG'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => onCurrencyChange(curr)}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  currency === curr
                    ? 'bg-card text-ink shadow-sm font-semibold'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {curr === 'ZAR' ? 'R (ZAR)' : curr === 'USD' ? '$ (USD)' : 'ZiG'}
              </button>
            ))}
          </div>

          {/* Primary Action Button (Apple Blue Tactile Pill) */}
          <button
            onClick={onOpenBooking}
            className="px-4 sm:px-5 min-h-11 text-xs font-semibold text-on-primary bg-primary hover:bg-primary-hover active:scale-[0.96] rounded-full transition-[background-color,transform] duration-150 shadow-primary-glow whitespace-nowrap"
          >
            Book Coach
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-h-11 min-w-11 flex items-center justify-center text-ink hover:bg-ink/5 active:scale-[0.96] rounded-xl transition-[background-color,transform] duration-150"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* iOS Style Frosted Glass Mobile Sheet */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-2xl border-b border-ink/6 px-6 py-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-ink/6">
            <span className="text-xs font-medium text-muted">Currency:</span>
            <div className="flex items-center bg-ink/4 p-0.5 rounded-full text-xs font-medium">
              {(['ZAR', 'USD', 'ZIG'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => onCurrencyChange(curr)}
                  className={`px-3 py-1 rounded-full transition-all ${
                    currency === curr
                      ? 'bg-card text-ink shadow-sm font-semibold'
                      : 'text-muted'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-3 text-base font-medium text-ink">
            <button
              onClick={() => handleNavClick('booking-section')}
              className="text-left min-h-11 hover:text-primary flex items-center justify-between"
            >
              <span>Bookings</span>
              <ChevronRight className="w-4 h-4 text-muted" />
            </button>
            <button
              onClick={() => handleNavClick('tracking-section')}
              className="text-left min-h-11 hover:text-primary flex items-center justify-between"
            >
              <span>Live GPS Tracking</span>
              <ChevronRight className="w-4 h-4 text-muted" />
            </button>
            <button
              onClick={() => handleNavClick('fleet-section')}
              className="text-left min-h-11 hover:text-primary flex items-center justify-between"
            >
              <span>Executive Fleet & Cabin</span>
              <ChevronRight className="w-4 h-4 text-muted" />
            </button>
            <button
              onClick={() => handleNavClick('schedules-section')}
              className="text-left min-h-11 hover:text-primary flex items-center justify-between"
            >
              <span>Timetables & Stations</span>
              <ChevronRight className="w-4 h-4 text-muted" />
            </button>
            <button
              onClick={() => handleNavClick('inquiries-section')}
              className="text-left min-h-11 hover:text-primary flex items-center justify-between"
            >
              <span>Charter & Freight Inquiries</span>
              <ChevronRight className="w-4 h-4 text-muted" />
            </button>
          </div>

          <div className="pt-3 border-t border-ink/6 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-on-primary bg-primary active:scale-[0.98] rounded-full shadow-sm"
            >
              Book Seats Now
            </button>
            <a
              href={`https://wa.me/${BUSA_CONTACTS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 text-center text-xs font-medium text-ink bg-card border border-ink/6 rounded-full flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-success" />
              <span>WhatsApp Concierge: {BUSA_CONTACTS.phoneSaPrimary}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
