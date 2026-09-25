import React from 'react';
import { Star, ShieldCheck, Facebook, ArrowUpRight } from 'lucide-react';
import { BUSA_CONTACTS } from '@/data/busData';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Tariro Ndlovu',
      route: 'Johannesburg to Harare (The Royale VIP)',
      date: 'Traveled September 2026',
      rating: 5,
      comment:
        'The best cross-border trip I have ever had between SA and Zim. Beitbridge border was cleared smoothly without delays thanks to their dedicated clearing staff. Wi-Fi worked the entire journey and the leather recliners are super comfortable.',
    },
    {
      name: 'Dr. Farai Muringani',
      route: 'Harare to Pretoria (Sovereign Diamond)',
      date: 'Traveled August 2026',
      rating: 5,
      comment:
        'Punctual departure from Harare Roadport at 16:30 sharp. The coach was spotless, air conditioning kept the cabin at an ideal 21 degrees, and having live GPS tracking meant my family in Pretoria knew exactly when to pick me up at Bosman.',
    },
    {
      name: 'Sibongile Moyo',
      route: 'Joburg to Bulawayo (Grand Deluxe)',
      date: 'Traveled September 2026',
      rating: 5,
      comment:
        'I have already completed 4 trips with Busa Express and I am looking forward to my 5th trip so I can claim my 6th free ticket! Driver Captain Dube was very professional and courteous.',
    },
  ];

  return (
    <section className="py-20 bg-card border-b border-ink/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg border border-ink/6 text-xs font-semibold text-muted shadow-sm mb-3">
              <span>Verified Passenger Reviews</span>
              <span>·</span>
              <span className="text-primary">Facebook Community</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
              Trusted by thousands of cross-border travelers.
            </h2>
          </div>

          <a
            href={BUSA_CONTACTS.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-bg hover:bg-surface text-ink border border-ink/8 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer"
          >
            <Facebook className="w-4 h-4 text-facebook" />
            <span>Visit Official Facebook @BusaExpress.Luxury</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
          </a>
        </div>

        {/* Apple Style Quantified Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-5 bg-bg rounded-2xl border border-ink/4">
            <div className="text-3xl font-extrabold text-ink font-mono">
              98.4%
            </div>
            <div className="text-xs text-muted mt-1 font-medium">On-Time Departure Rate</div>
          </div>

          <div className="p-5 bg-bg rounded-2xl border border-ink/4">
            <div className="text-3xl font-extrabold text-success font-mono">
              ~35 min
            </div>
            <div className="text-xs text-muted mt-1 font-medium">Avg. Fast-Track Border Clearance</div>
          </div>

          <div className="p-5 bg-bg rounded-2xl border border-ink/4">
            <div className="text-3xl font-extrabold text-primary font-mono">
              42,000+
            </div>
            <div className="text-xs text-muted mt-1 font-medium">Safe Cross-Border Passengers</div>
          </div>

          <div className="p-5 bg-bg rounded-2xl border border-ink/4">
            <div className="text-3xl font-extrabold text-warn font-mono">
              100%
            </div>
            <div className="text-xs text-muted mt-1 font-medium">Luggage Security & Tagging</div>
          </div>
        </div>

        {/* Review Cards (Apple App Store Reviews Card Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-6 bg-bg rounded-3xl border border-ink/6 flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-warn">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-ink leading-relaxed">
                  &ldquo;{r.comment}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-ink/6">
                <div className="text-xs font-bold text-ink">{r.name}</div>
                <div className="text-xxs text-primary font-medium">{r.route}</div>
                <div className="text-2xs text-muted mt-0.5">{r.date}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
