import React, { useState, useEffect } from 'react';
import { Navigation, Search, Wifi, Thermometer, ShieldCheck, Clock, Gauge, Compass, MapPin, RefreshCw, ChevronRight, Signal, Bus } from 'lucide-react';
import { ACTIVE_TRACKING_COACHES } from '@/data/busData';
import { ActiveCoachTracking } from '@/types/bus';
import { useBusPhotos } from '@/context/PhotoContext';
import { DEFAULT_COACH_IMAGES } from '@/assets/images';

interface LiveTrackingSectionProps {
  searchedTicketRef?: string;
}

export const LiveTrackingSection: React.FC<LiveTrackingSectionProps> = ({
  searchedTicketRef,
}) => {
  const [selectedCoach, setSelectedCoach] = useState<ActiveCoachTracking>(
    ACTIVE_TRACKING_COACHES[0]
  );
  const [ticketInput, setTicketInput] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastPingTime, setLastPingTime] = useState('Just now (via Starlink Satellite)');

  const { photos } = useBusPhotos();

  useEffect(() => {
    if (searchedTicketRef) {
      setTicketInput(searchedTicketRef);
      const match = ACTIVE_TRACKING_COACHES.find(
        (c) =>
          c.ticketPrefix.toLowerCase().includes(searchedTicketRef.toLowerCase()) ||
          searchedTicketRef.toLowerCase().includes(c.originCity.toLowerCase()) ||
          searchedTicketRef.toLowerCase().includes(c.destinationCity.toLowerCase())
      );
      if (match) {
        setSelectedCoach(match);
      }
    }
  }, [searchedTicketRef]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketInput.trim()) return;

    const match = ACTIVE_TRACKING_COACHES.find(
      (c) =>
        c.ticketPrefix.toLowerCase().includes(ticketInput.trim().toLowerCase()) ||
        c.registration.toLowerCase().includes(ticketInput.trim().toLowerCase()) ||
        c.coachName.toLowerCase().includes(ticketInput.trim().toLowerCase()) ||
        c.destinationCity.toLowerCase().includes(ticketInput.trim().toLowerCase())
    );

    if (match) {
      setSelectedCoach(match);
    } else {
      setSelectedCoach({
        ...ACTIVE_TRACKING_COACHES[0],
        ticketPrefix: ticketInput.trim().toUpperCase(),
      });
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      const now = new Date();
      setLastPingTime(`${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })} (Starlink Locked)`);
    }, 500);
  };

  return (
    <section id="tracking-section" className="py-20 bg-card border-y border-ink/6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Apple "Find My" Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-ink/6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-xs font-semibold text-success">
              <span className="w-2 h-2 rounded-full bg-success animate-ping" />
              <span>Find My Coach · Live GPS Satellite Telemetry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
              Real-time cross-border tracking.
            </h2>
            <p className="text-sm text-muted max-w-2xl leading-relaxed">
              Live location telemetry along the Trans-Limpopo highway corridor. Monitor exact speed, Beitbridge customs clearing queue status, cabin climate, and ETA.
            </p>
          </div>

          {/* iOS Rounded Search Input */}
          <form onSubmit={handleSearch} className="flex items-center gap-2 shrink-0">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                placeholder="Ticket (e.g. BUSA-7821-HAR)"
                value={ticketInput}
                onChange={(e) => setTicketInput(e.target.value)}
                className="pl-10 pr-4 py-2 bg-bg border border-ink/6 rounded-full text-xs font-mono text-ink focus:outline-none focus:border-primary focus:bg-card w-60 sm:w-64 transition-all uppercase"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-full transition-all shadow-sm cursor-pointer"
            >
              Track
            </button>
          </form>
        </div>

        {/* Active Coaches Segmented Bar */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-muted mr-1">Active Coaches en Route:</span>
          {ACTIVE_TRACKING_COACHES.map((coach) => {
            const isSelected = selectedCoach.id === coach.id;
            return (
              <button
                key={coach.id}
                onClick={() => {
                  setSelectedCoach(coach);
                  setTicketInput(coach.ticketPrefix);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-ink text-on-primary shadow-sm font-semibold'
                    : 'bg-bg text-ink hover:bg-surface border border-ink/4'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-success' : 'bg-muted'}`} />
                <span>{coach.coachName}</span>
                <span className="text-2xs opacity-70 font-mono">({coach.originCity.slice(0, 3)} ➔ {coach.destinationCity.slice(0, 3)})</span>
              </button>
            );
          })}
        </div>

        {/* Apple iOS Layout: Widgets on Left + Clean Apple Map on Right */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: iOS Widgets Island (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Coach Status Card */}
            <div className="bg-bg rounded-3xl p-6 border border-ink/6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-ink/6">
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-ink/8 shadow-sm shrink-0 bg-primary-deep/10 flex items-center justify-center">
                    <img
                      src={photos.heroCoach || DEFAULT_COACH_IMAGES.heroCoach}
                      alt={selectedCoach.coachName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-success-bright ring-2 ring-white animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-primary">
                      {selectedCoach.registration} · {selectedCoach.ticketPrefix}
                    </div>
                    <div className="text-base font-bold text-ink mt-0.5">
                      {selectedCoach.coachName}
                    </div>
                    <div className="text-xs text-muted">
                      {selectedCoach.model}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="p-2 rounded-full bg-card hover:bg-ink/5 text-ink border border-ink/6 shadow-sm transition-all cursor-pointer"
                  title="Refresh Telemetry"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-primary' : ''}`} />
                </button>
              </div>

              {/* Current Location Pill */}
              <div className="bg-card rounded-2xl p-4 border border-ink/4 shadow-sm space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <MapPin className="w-3.5 h-3.5 text-danger" />
                  <span>Current GPS Position</span>
                </div>
                <div className="text-sm font-semibold text-ink">
                  {selectedCoach.currentLocationName}
                </div>
                <div className="text-xxs font-mono text-muted">
                  GPS: {selectedCoach.currentLatitude.toFixed(4)}° S, {selectedCoach.currentLongitude.toFixed(4)}° E
                </div>
              </div>

              {/* Progress Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted">Corridor Transit Progress:</span>
                  <span className="font-mono font-bold text-primary">
                    {selectedCoach.overallProgressPercent}%
                  </span>
                </div>
                <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{ width: `${selectedCoach.overallProgressPercent}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-muted pt-0.5">
                  <span>Next: <strong className="text-ink">{selectedCoach.nextStopName}</strong></span>
                  <span className="text-success font-mono font-bold">{selectedCoach.nextStopEta}</span>
                </div>
              </div>

              {/* iOS 3-Tile Widget Strip */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                <div className="bg-card rounded-2xl p-3.5 border border-ink/4 shadow-sm text-center">
                  <Gauge className="w-4 h-4 text-primary mx-auto mb-1" />
                  <span className="text-2xs text-muted uppercase block">Speed</span>
                  <span className="text-base font-extrabold text-ink font-mono">
                    {selectedCoach.currentSpeedKmH} <span className="text-2xs font-normal text-muted">km/h</span>
                  </span>
                </div>

                <div className="bg-card rounded-2xl p-3.5 border border-ink/4 shadow-sm text-center">
                  <Thermometer className="w-4 h-4 text-success mx-auto mb-1" />
                  <span className="text-2xs text-muted uppercase block">Cabin Temp</span>
                  <span className="text-base font-extrabold text-ink font-mono">
                    {selectedCoach.cabinTempC}°C
                  </span>
                </div>

                <div className="bg-card rounded-2xl p-3.5 border border-ink/4 shadow-sm text-center">
                  <Signal className="w-4 h-4 text-warn mx-auto mb-1" />
                  <span className="text-2xs text-muted uppercase block">Starlink</span>
                  <span className="text-xs font-bold text-success font-mono mt-0.5 block">
                    Active
                  </span>
                </div>
              </div>

              {/* Beitbridge Border Status Banner */}
              <div className="bg-success/10 rounded-2xl p-3.5 border border-success/20 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-success">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Beitbridge Fast-Track Status</span>
                </div>
                <div className="text-ink text-xxs leading-relaxed">
                  {selectedCoach.borderStatus}
                </div>
              </div>

              {/* Driver & Crew */}
              <div className="flex items-center justify-between text-xs text-muted pt-1">
                <span>Captain: <strong className="text-ink">{selectedCoach.driverName}</strong></span>
                <span>Co-pilot: {selectedCoach.copilotName}</span>
              </div>
            </div>

            <div className="text-xxs text-muted flex items-center justify-between px-2">
              <span>Telemetry: {lastPingTime}</span>
              <span className="text-success font-medium">GPS Signal: 100% Locked</span>
            </div>
          </div>

          {/* Right Column: Apple Maps Style Vector Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-bg rounded-3xl p-6 border border-ink/6 flex flex-col justify-between">
            
            <div className="pb-4 border-b border-ink/6 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-ink">
                  Corridor Route: {selectedCoach.routeName}
                </h3>
                <p className="text-xs text-muted">
                  Trans-Limpopo N1 & A4 Highway Backbone
                </p>
              </div>
              <span className="text-xs font-mono bg-card px-3 py-1 rounded-full border border-ink/6 text-ink shadow-sm">
                {selectedCoach.departureDate}
              </span>
            </div>

            {/* Apple Maps Vector Display */}
            <div className="my-5 relative bg-surface rounded-2xl p-4 border border-ink/6 min-h-[300px] flex items-center justify-center overflow-hidden">
              
              {/* Apple Grid Lines */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#1d1d1f_1px,transparent_1px)] [background-size:20px_20px]" />

              <svg
                viewBox="0 0 100 100"
                className="w-full h-72 sm:h-80 drop-shadow-sm pointer-events-none"
                preserveAspectRatio="none"
              >
                {/* Highway Backbone */}
                <path
                  d="M 32 88 L 35 78 L 44 58 L 50 44 L 54 38 L 62 24 L 74 12"
                  fill="none"
                  stroke="#C7C7CC"
                  strokeWidth="2.5"
                  strokeDasharray="2 2"
                />

                {/* Traveled Highway Highlight (Apple Blue) */}
                <path
                  d="M 32 88 L 35 78 L 44 58 L 50 44 L 54 38"
                  fill="none"
                  stroke="#0071E3"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Limpopo River Border Line */}
                <path
                  d="M 15 40 Q 50 39 95 36"
                  fill="none"
                  stroke="#1b5fbf"
                  strokeWidth="1.2"
                  strokeDasharray="3 2"
                  opacity="0.5"
                />
                <text x="68" y="34" fill="#1b5fbf" fontSize="2.6" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="bold">
                  LIMPOPO RIVER (BORDER)
                </text>

                {/* Waypoint Nodes */}
                {selectedCoach.stops.map((stop) => {
                  const isCurrent = stop.status === 'current';
                  const isPassed = stop.status === 'passed';

                  return (
                    <g key={stop.name}>
                      <circle
                        cx={stop.coords.x}
                        cy={stop.coords.y}
                        r={isCurrent ? 3.8 : 2.2}
                        fill={isCurrent ? '#2f7d4a' : isPassed ? '#1b5fbf' : '#6e6e6a'}
                        stroke="#fbfbfa"
                        strokeWidth="1"
                      />

                      <text
                        x={stop.coords.x + 3.8}
                        y={stop.coords.y + 1}
                        fill={isCurrent ? '#1c1c1a' : isPassed ? '#1c1c1a' : '#6e6e6a'}
                        fontSize="3.2"
                        fontWeight={isCurrent ? 'bold' : 'normal'}
                        fontFamily="Plus Jakarta Sans, sans-serif"
                      >
                        {stop.city}
                      </text>
                    </g>
                  );
                })}

                {/* Moving Coach Live GPS Beacon Pin (iOS Style Blue/Green Wave) */}
                <g transform={`translate(${selectedCoach.stops.find(s => s.status === 'current')?.coords.x || 50}, ${selectedCoach.stops.find(s => s.status === 'current')?.coords.y || 44})`}>
                  <circle r="7" fill="#2f7d4a" opacity="0.25" className="animate-ping" />
                  <circle r="4.5" fill="#2f7d4a" stroke="#fbfbfa" strokeWidth="1.5" />
                  <circle r="2" fill="#fbfbfa" />
                </g>
              </svg>

              {/* Apple Map Legend Overlay */}
              <div className="absolute bottom-3 left-3 bg-card/90 backdrop-blur-md border border-ink/6 rounded-xl px-3 py-2 text-2xs space-y-1 shadow-sm">
                <div className="flex items-center gap-2 text-ink">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Traveled Waypoints</span>
                </div>
                <div className="flex items-center gap-2 text-success font-semibold">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span>Live Coach Position</span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <span className="w-2 h-2 rounded-full bg-muted" />
                  <span>Upcoming Stations</span>
                </div>
              </div>
            </div>

            {/* Turn-by-Turn Waypoint List */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-semibold text-muted uppercase tracking-wider">
                Scheduled Stops & Arrival Forecast:
              </div>

              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {selectedCoach.stops.map((stop, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-2.5 rounded-xl text-xs transition-colors ${
                      stop.status === 'current'
                        ? 'bg-card shadow-sm border border-ink/6 text-ink font-semibold'
                        : stop.status === 'passed'
                        ? 'bg-ink/2 text-ink'
                        : 'text-muted'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2 h-2 rounded-full ${
                        stop.status === 'current'
                          ? 'bg-success'
                          : stop.status === 'passed'
                          ? 'bg-primary'
                          : 'bg-surface'
                      }`} />
                      <div>
                        <span>{stop.city}:</span>{' '}
                        <span className="text-muted font-normal">{stop.name}</span>
                      </div>
                    </div>

                    <div className="text-right font-mono">
                      {stop.status === 'passed' && (
                        <span className="text-muted">{stop.passedAt}</span>
                      )}
                      {stop.status === 'current' && (
                        <span className="text-success font-bold">{stop.eta || 'Now Boarding'}</span>
                      )}
                      {stop.status === 'upcoming' && (
                        <span className="text-muted">{stop.eta || `Sched: ${stop.scheduledTime}`}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
