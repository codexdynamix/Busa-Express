import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, ArrowRight, ChevronRight } from 'lucide-react';
import { TERMINALS } from '@/data/busData';
import type { CityId } from '@/types/bus';

interface RouteScheduleSectionProps {
  onSelectRoute: (originId: CityId, destId: CityId) => void;
}

export const RouteScheduleSection: React.FC<RouteScheduleSectionProps> = ({ onSelectRoute }) => {
  const [activeTab, setActiveTab] = useState<'sa-to-zim' | 'zim-to-sa' | 'terminals'>('sa-to-zim');

  return (
    <section id="schedules-section" className="py-20 bg-bg border-b border-ink/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-ink/6 text-xs font-semibold text-muted shadow-sm mb-3">
              <span>Guaranteed Departure Timetables</span>
              <span>·</span>
              <span className="text-primary">All-Week Service</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
              Schedules, departure bays & border guidance.
            </h2>
            <p className="mt-2 text-muted text-sm max-w-2xl leading-relaxed">
              Check scheduled departure and reporting times across South Africa terminals and Zimbabwe transit centers.
            </p>
          </div>

          {/* iOS Segmented Control */}
          <div className="flex items-center bg-surface/70 p-1 rounded-full border border-ink/4 text-xs font-semibold shrink-0">
            <button
              onClick={() => setActiveTab('sa-to-zim')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                activeTab === 'sa-to-zim'
                  ? 'bg-card text-ink shadow-sm'
                  : 'text-muted hover:text-ink'
              }`}
            >
              SA ➔ Zimbabwe
            </button>
            <button
              onClick={() => setActiveTab('zim-to-sa')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                activeTab === 'zim-to-sa'
                  ? 'bg-card text-ink shadow-sm'
                  : 'text-muted hover:text-ink'
              }`}
            >
              Zimbabwe ➔ SA
            </button>
            <button
              onClick={() => setActiveTab('terminals')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                activeTab === 'terminals'
                  ? 'bg-card text-ink shadow-sm'
                  : 'text-muted hover:text-ink'
              }`}
            >
              Stations
            </button>
          </div>
        </div>

        {/* Tab 1: SA to Zimbabwe */}
        {activeTab === 'sa-to-zim' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-card rounded-3xl p-6 border border-ink/6 shadow-sm flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center justify-between text-xs pb-3 border-b border-ink/6">
                  <span className="font-mono font-bold text-primary">SERVICE LUX-01</span>
                  <span className="text-muted">Mon, Wed, Fri</span>
                </div>
                <h3 className="text-lg font-bold text-ink mt-3">Johannesburg ➔ Harare Express</h3>
                <p className="text-xs text-muted mt-1">
                  Via Pretoria, Polokwane, Beitbridge Border & Masvingo
                </p>

                <div className="mt-5 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-bg">
                    <span className="text-muted">Joburg (Powerhouse)</span>
                    <strong className="text-ink font-mono text-xs">14:00 Dep</strong>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-bg">
                    <span className="text-muted">Midrand (Big Bird)</span>
                    <strong className="text-ink font-mono text-xs">15:15 Dep</strong>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-bg">
                    <span className="text-muted">Pretoria (Bosman)</span>
                    <strong className="text-ink font-mono text-xs">16:30 Dep</strong>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-success/10">
                    <span className="text-ink font-semibold">Harare (Roadport)</span>
                    <strong className="text-success font-mono text-xs">07:30 Arr</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectRoute('JNB', 'HAR')}
                className="w-full py-2.5 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-full transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book This Route (R900)</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-card rounded-3xl p-6 border border-ink/6 shadow-sm flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center justify-between text-xs pb-3 border-b border-ink/6">
                  <span className="font-mono font-bold text-primary">SERVICE LUX-03</span>
                  <span className="text-muted">Mon, Wed, Fri, Sat</span>
                </div>
                <h3 className="text-lg font-bold text-ink mt-3">Johannesburg ➔ Bulawayo</h3>
                <p className="text-xs text-muted mt-1">
                  Via Pretoria, Beitbridge Border & Gwanda
                </p>

                <div className="mt-5 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-bg">
                    <span className="text-muted">Joburg (Powerhouse)</span>
                    <strong className="text-ink font-mono text-xs">13:30 Dep</strong>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-bg">
                    <span className="text-muted">Pretoria (Bosman)</span>
                    <strong className="text-ink font-mono text-xs">15:45 Dep</strong>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-bg">
                    <span className="text-muted">Gwanda (Town Depot)</span>
                    <strong className="text-ink font-mono text-xs">03:45 Arr</strong>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-success/10">
                    <span className="text-ink font-semibold">Bulawayo (5th Ave)</span>
                    <strong className="text-success font-mono text-xs">06:15 Arr</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectRoute('JNB', 'BYO')}
                className="w-full py-2.5 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-full transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book This Route (R850)</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 3: Apple Style Travel Guide */}
            <div className="bg-card rounded-3xl p-6 border border-ink/6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-ink pb-3 border-b border-ink/6">
                <ShieldCheck className="w-4 h-4 text-success" />
                <span>Travel Requirements Checklist</span>
              </div>

              <div className="space-y-3 text-xs text-ink">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Valid Passport:</strong> At least 6 months validity from travel date.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Luggage Allowance:</strong> 2x 25kg checked bags + 1 hand luggage included free.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Child Clearances:</strong> Minors require unabridged birth certificate & parental consent.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>Reporting Window:</strong> Arrive 1 hour before departure for luggage check-in.</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Zim to SA */}
        {activeTab === 'zim-to-sa' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-3xl p-6 border border-ink/6 shadow-sm flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center justify-between text-xs pb-3 border-b border-ink/6">
                  <span className="font-mono font-bold text-primary">SERVICE LUX-02</span>
                  <span className="text-muted">Sun, Tue, Thu, Sat</span>
                </div>
                <h3 className="text-lg font-bold text-ink mt-3">Harare ➔ Johannesburg Express</h3>
                <p className="text-xs text-muted mt-1">
                  Via Masvingo, Beitbridge Border, Pretoria & Midrand
                </p>

                <div className="mt-5 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-bg">
                    <span className="text-muted">Harare (Roadport)</span>
                    <strong className="text-ink font-mono text-xs">16:30 Dep</strong>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-bg">
                    <span className="text-muted">Masvingo (Exor)</span>
                    <strong className="text-ink font-mono text-xs">20:00 Dep</strong>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-bg">
                    <span className="text-muted">Pretoria (Bosman)</span>
                    <strong className="text-ink font-mono text-xs">07:00 Arr</strong>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-success/10">
                    <span className="text-ink font-semibold">Joburg (Powerhouse)</span>
                    <strong className="text-success font-mono text-xs">08:30 Arr</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectRoute('HAR', 'JNB')}
                className="w-full py-2.5 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-full transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book This Route (R800 / $45)</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-card rounded-3xl p-6 border border-ink/6 shadow-sm flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center justify-between text-xs pb-3 border-b border-ink/6">
                  <span className="font-mono font-bold text-primary">SERVICE LUX-04</span>
                  <span className="text-muted">Sun, Tue, Thu</span>
                </div>
                <h3 className="text-lg font-bold text-ink mt-3">Bulawayo ➔ Johannesburg</h3>
                <p className="text-xs text-muted mt-1">
                  Via Gwanda, Beitbridge Border & Pretoria
                </p>

                <div className="mt-5 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-bg">
                    <span className="text-muted">Bulawayo (5th Ave)</span>
                    <strong className="text-ink font-mono text-xs">15:00 Dep</strong>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-bg">
                    <span className="text-muted">Gwanda (Town Depot)</span>
                    <strong className="text-ink font-mono text-xs">17:15 Dep</strong>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-bg">
                    <span className="text-muted">Pretoria (Bosman)</span>
                    <strong className="text-ink font-mono text-xs">06:30 Arr</strong>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-success/10">
                    <span className="text-ink font-semibold">Joburg (Powerhouse)</span>
                    <strong className="text-success font-mono text-xs">08:00 Arr</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectRoute('BYO', 'JNB')}
                className="w-full py-2.5 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-full transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Book This Route (R800 / $45)</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-card rounded-3xl p-6 border border-ink/6 shadow-sm space-y-4">
              <div className="text-xs font-bold text-ink pb-3 border-b border-ink/6">
                Zimbabwe Domestic Shuttle
              </div>
              <p className="text-xs text-muted leading-relaxed">
                Traveling between Bulawayo and Harare? Busa Express operates clean executive day shuttles connecting Bulawayo 5th Avenue with Harare Roadport daily at 07:30.
              </p>
              <div className="p-3 bg-bg rounded-2xl text-xs space-y-1">
                <div className="font-bold text-ink">Bulawayo ➔ Harare Express</div>
                <div className="text-muted">Fare: $25 USD / R450 · ~6 Hours Transit</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Official Station Addresses */}
        {activeTab === 'terminals' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TERMINALS.map((t) => (
              <div key={t.id} className="p-4 bg-card border border-ink/6 rounded-2xl shadow-sm space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-ink">{t.city}</span>
                  <span className="text-2xs font-mono px-2 py-0.5 rounded-full bg-bg text-primary">
                    {t.country}
                  </span>
                </div>
                <div className="text-xs font-semibold text-ink">{t.terminalName}</div>
                <div className="text-xs text-muted flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-muted shrink-0 mt-0.5" />
                  <span>{t.address}</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
