import React, { useState } from 'react';
import { Wifi, ShieldCheck, Zap, Coffee, Armchair, Maximize2, Package, Bus, Camera } from 'lucide-react';
import { useBusPhotos } from '@/context/PhotoContext';
import { DEFAULT_COACH_IMAGES } from '@/assets/images';

interface FleetAndAmenitiesProps {
  onOpenBooking: () => void;
}

export const FleetAndAmenities: React.FC<FleetAndAmenitiesProps> = ({ onOpenBooking }) => {
  const { photos, openUploadModal } = useBusPhotos();
  const [activeFeature, setActiveFeature] = useState<'seating' | 'wifi' | 'border' | 'power'>('seating');
  const [isFullscreenModal, setIsFullscreenModal] = useState(false);

  const displayCabin = photos.cabinInterior || DEFAULT_COACH_IMAGES.cabinInterior;
  const displayFront = photos.frontBoarding || DEFAULT_COACH_IMAGES.frontBoarding;
  const displayLuggage = photos.luggageHold || DEFAULT_COACH_IMAGES.luggageHold;

  return (
    <section id="fleet-section" className="py-20 bg-bg border-b border-ink/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Apple Product Headline */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-medium text-muted mb-2 select-none">
            <span>Fleet Specifications</span>
            <span aria-hidden="true">·</span>
            <span className="text-primary">Scania Irizar i6S Executive Coaches</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-ink tracking-tight">
            Engineered for the 900-kilometer stretch.
          </h2>
          <p className="mt-3 text-muted text-base sm:text-lg leading-relaxed">
            Take a seat inside our passenger cabin: ergonomic leather recliners with adjustable calf supports, wide headrests, quiet air suspension, and high-speed Starlink satellite connectivity.
          </p>
        </div>

        {/* Apple Keynote Stage: Passenger Cabin Showcase */}
        <div className="bg-card rounded-3xl p-6 sm:p-8 border border-ink/6 shadow-soft mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls & Specifications (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-xs font-medium text-success flex items-center gap-1.5 mb-1.5">
                  <Armchair className="w-3.5 h-3.5" />
                  <span>Executive Comfort Standard</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                  Executive 2+2 Recliners
                </h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">
                  Sculpted ergonomic seating with adjustable calf supports, wide headrests, and a 140-degree recline angle calibrated for effortless overnight sleep between Johannesburg and Harare.
                </p>
              </div>

              {/* Interactive Specification Selectors */}
              <div className="space-y-2">
                {[
                  {
                    id: 'seating',
                    title: '140° Articulated Recline',
                    desc: 'Dual-density foam cushioning with pneumatic lumbar support.',
                    icon: Armchair,
                  },
                  {
                    id: 'wifi',
                    title: 'Starlink In-Transit Wi-Fi',
                    desc: 'Continuous satellite connectivity across border provinces.',
                    icon: Wifi,
                  },
                  {
                    id: 'border',
                    title: 'Fast-Track Border Manifesting',
                    desc: 'Pre-cleared Beitbridge digital manifests for expedited processing.',
                    icon: ShieldCheck,
                  },
                  {
                    id: 'power',
                    title: 'Individual USB-C & 220V Outlets',
                    desc: 'Fast charging available at every window and aisle seat.',
                    icon: Zap,
                  },
                ].map((feature) => {
                  const Icon = feature.icon;
                  const isActive = activeFeature === feature.id;
                  return (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => setActiveFeature(feature.id as any)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isActive
                          ? 'bg-bg border-primary shadow-sm'
                          : 'bg-card border-ink/4 hover:bg-bg/70'
                      }`}
                    >
                      <div className={`p-2 rounded-xl shrink-0 transition-colors ${
                        isActive ? 'bg-primary text-on-primary' : 'bg-ink/5 text-ink'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-ink">
                          {feature.title}
                        </div>
                        <div className="text-xxs text-muted mt-0.5 leading-snug">
                          {feature.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Verified Baggage Allowance Pill */}
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-xs">
                    50kg
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-ink">Complimentary Baggage</div>
                    <div className="text-xxs text-muted">2x 25kg checked suitcases + 1 carry-on</div>
                  </div>
                </div>
                <div className="text-xxs text-success font-semibold">
                  Included
                </div>
              </div>
            </div>

            {/* Right Photo Viewport: Cabin Interior Photography (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-ink border border-ink/8 shadow-[0_12px_40px_rgba(0,0,0,0.08)] group select-none flex items-center justify-center">
                
                <img
                  src={displayCabin}
                  alt="Busachamone Executive Luxury Coach Cabin Interior with Leather Seats"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-ink/40 backdrop-blur-xl border border-on-primary/20 text-xxs font-medium text-on-primary flex items-center gap-2 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    <span>Executive Cabin Experience</span>
                  </div>
                </div>

                {/* Expand / Inspect Button */}
                <button
                  type="button"
                  onClick={() => setIsFullscreenModal(true)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-ink/40 backdrop-blur-xl border border-on-primary/20 text-on-primary hover:bg-ink/70 transition-all shadow-lg cursor-pointer"
                  title="Expand High-Res Cabin View"
                  aria-label="Expand High-Res Cabin View"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Dynamic Feature Callout Overlay on Photo */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="bg-ink/60 backdrop-blur-xl border border-on-primary/15 rounded-2xl p-3.5 text-on-primary shadow-xl">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-primary font-medium">Standard Amenities</span>
                      <span className="text-on-primary/60">Scania Irizar i6S Executive</span>
                    </div>
                    <div className="mt-1 text-xs font-semibold text-on-primary">
                      Ergonomic Leather Recliners · Clean Center Aisle · High-Speed Wi-Fi
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bento Grid: Fleet Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1: Front Boarding & Grille */}
          <div className="bg-card rounded-3xl p-5 border border-ink/6 shadow-sm flex flex-col justify-between overflow-hidden relative group">
            <div className="flex items-center justify-between pb-2.5 border-b border-ink/5 mb-2.5 text-xs">
              <div className="flex items-center gap-1.5 font-semibold text-ink">
                <Bus className="w-4 h-4 text-primary" />
                <h4>Boarding Entrance</h4>
              </div>
              <span className="text-success font-medium">Dedicated Bays</span>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-2.5 border border-ink/6 bg-bg flex items-center justify-center">
              <img
                src={displayFront}
                alt="Busachamone Scania Coach Passenger Boarding Door"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 text-on-primary text-xs font-medium">
                Pneumatic Boarding Step & Chrome Bullbar
              </div>
            </div>

            <p className="text-xs text-muted leading-relaxed">
              Powerhouse Terminal (Johannesburg) and Roadport (Harare) dedicated executive departure platforms.
            </p>
          </div>

          {/* Card 2: Luggage Cargo Bay */}
          <div className="bg-card rounded-3xl p-5 border border-ink/6 shadow-sm flex flex-col justify-between overflow-hidden relative group">
            <div className="flex items-center justify-between pb-2.5 border-b border-ink/5 mb-2.5 text-xs">
              <div className="flex items-center gap-1.5 font-semibold text-ink">
                <Package className="w-4 h-4 text-primary" />
                <h4>Underfloor Baggage Hold</h4>
              </div>
              <span className="text-primary font-medium">50kg Included</span>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-2.5 border border-ink/6 bg-bg flex items-center justify-center">
              <img
                src={displayLuggage}
                alt="Busachamone Underfloor Luggage Hold"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 text-on-primary text-xs font-medium">
                Continuous Pass-Through Hold
              </div>
            </div>

            <p className="text-xs text-muted leading-relaxed">
              Complimentary 2x 25kg checked suitcases + 1 hand luggage. Serialized tamper-evident luggage receipts.
            </p>
          </div>

          {/* Card 3: Sanitary Lavatory */}
          <div className="bg-card rounded-3xl p-5 border border-ink/6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                <Coffee className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-ink">Sanitary Washroom</h4>
              <p className="text-xs text-muted leading-relaxed mt-1.5">
                Odor-controlled, continuously serviced chemical lavatory onboard for total comfort throughout the overnight journey.
              </p>
            </div>
            <div className="pt-3 border-t border-ink/5 flex items-center justify-between text-xs">
              <span className="text-muted">Service Protocol</span>
              <span className="font-semibold text-success">Cleaned Every Trip</span>
            </div>
          </div>

        </div>

      </div>

      {/* High-Resolution Cabin Modal */}
      {isFullscreenModal && (
        <div className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-2xl flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-ink rounded-3xl overflow-hidden border border-on-primary/20">
            <div className="flex items-center justify-between p-4 border-b border-on-primary/10 text-on-primary">
              <span className="text-xs font-semibold">Executive Cabin Experience</span>
              <button
                type="button"
                onClick={() => setIsFullscreenModal(false)}
                className="text-on-primary/60 hover:text-on-primary px-3 py-1 bg-card/10 rounded-full text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
            <div className="relative aspect-[16/10] w-full bg-ink flex items-center justify-center">
              <img
                src={displayCabin}
                alt="Executive Cabin"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
