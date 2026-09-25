import React, { useState } from 'react';
import { X, Check, Bus, User, MapPin, Calendar, Clock, Shield, Wifi, Coffee, QrCode, ArrowRight, Printer, Share2, Phone, AlertCircle, ChevronLeft } from 'lucide-react';
import { BusTrip, CityId, Seat, BookingPassenger, ConfirmedBooking } from '@/types/bus';
import { TERMINALS, BUS_TRIPS, BUSA_CONTACTS } from '@/data/busData';
import { BrandLogo } from './BrandLogo';
import { useBusPhotos } from '@/context/PhotoContext';
import { DEFAULT_COACH_IMAGES } from '@/assets/images';

interface BookingFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOrigin: CityId;
  initialDestination: CityId;
  initialDate: string;
  initialPassengers: number;
  currency: 'ZAR' | 'USD' | 'ZIG';
  onTrackTrip: (ticketRef: string) => void;
}

// Generate realistic 48-seat luxury floor plan
const generateSeatMap = (): Seat[] => {
  const seats: Seat[] = [];
  const occupiedPreset = [3, 4, 7, 12, 15, 16, 21, 22, 27, 33, 34, 41];

  for (let row = 1; row <= 12; row++) {
    const cols: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
    cols.forEach((col, idx) => {
      const seatNum = (row - 1) * 4 + idx + 1;
      seats.push({
        id: `seat-${seatNum}`,
        number: seatNum,
        row,
        column: col,
        isVip: row <= 2,
        status: occupiedPreset.includes(seatNum) ? 'booked' : 'available',
        hasPower: true,
      });
    });
  }
  return seats;
};

export const BookingFlowModal: React.FC<BookingFlowModalProps> = ({
  isOpen,
  onClose,
  initialOrigin,
  initialDestination,
  initialDate,
  initialPassengers,
  currency,
  onTrackTrip,
}) => {
  const [step, setStep] = useState<'select-coach' | 'select-seats' | 'passenger-info' | 'confirmation'>('select-coach');
  const [selectedTrip, setSelectedTrip] = useState<BusTrip>(BUS_TRIPS[0]!);
  const [seats, setSeats] = useState<Seat[]>(generateSeatMap);
  const [selectedSeatNumbers, setSelectedSeatNumbers] = useState<number[]>([1]);
  
  const [passenger, setPassenger] = useState<BookingPassenger>({
    fullName: '',
    passportOrId: '',
    nationality: 'Zimbabwean',
    phone: '',
    email: '',
    emergencyContact: '',
    dietaryOrBaggageNotes: '',
    selectedSeats: ['1'],
  });

  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const { photos } = useBusPhotos();

  if (!isOpen) return null;

  const originTerminal = TERMINALS.find((t) => t.id === selectedTrip.origin);
  const destTerminal = TERMINALS.find((t) => t.id === selectedTrip.destination);

  const formatPrice = (zar: number, usd: number, zig: number) => {
    if (currency === 'USD') return `$${usd}`;
    if (currency === 'ZIG') return `ZiG ${zig.toLocaleString()}`;
    return `R${zar}`;
  };

  const getTripPrice = (trip: BusTrip) => {
    if (currency === 'USD') return trip.priceUsd;
    if (currency === 'ZIG') return trip.priceZig;
    return trip.priceZar;
  };

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === 'booked') return;

    if (selectedSeatNumbers.includes(seat.number)) {
      if (selectedSeatNumbers.length === 1) return;
      setSelectedSeatNumbers(selectedSeatNumbers.filter((n) => n !== seat.number));
    } else {
      if (selectedSeatNumbers.length >= 6) {
        setNotice('Groups over 6 seats: use the Charter & Inquiries form.');
        return;
      }
      setSelectedSeatNumbers([...selectedSeatNumbers, seat.number]);
    }
  };

  const handlePassengerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passenger.fullName || !passenger.passportOrId || !passenger.phone) {
      setNotice('Please fill in your full name, passport/ID, and WhatsApp number.');
      return;
    }
    setNotice(null);

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const bookingRef = `BUSA-${randomSuffix}-${selectedTrip.destination}`;

    const newBooking: ConfirmedBooking = {
      bookingRef,
      trip: selectedTrip,
      passenger: {
        ...passenger,
        selectedSeats: selectedSeatNumbers.map((s) => `Seat ${s}`),
      },
      selectedSeats: selectedSeatNumbers.map((s) => `Seat ${s}`),
      totalPriceZar: selectedTrip.priceZar * selectedSeatNumbers.length,
      totalPriceUsd: selectedTrip.priceUsd * selectedSeatNumbers.length,
      bookingDate: new Date().toLocaleDateString('en-GB'),
      travelDate: initialDate || new Date().toISOString().split('T')[0],
      qrPayload: `BUSA-EXPRESS|${bookingRef}|${selectedTrip.origin}-${selectedTrip.destination}|SEATS:${selectedSeatNumbers.join(',')}`,
    };

    setConfirmedBooking(newBooking);
    setStep('confirmation');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink/40 backdrop-blur-sm overflow-y-auto">
      <div className="bg-card rounded-3xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden my-auto border border-ink/8">
        
        {/* iOS Style Sheet Header with Grabber Bar */}
        <div className="px-6 pt-4 pb-4 border-b border-ink/6 bg-card sticky top-0 z-10 flex flex-col items-center">
          {/* iOS Grabber */}
          <div className="w-10 h-1 rounded-full bg-surface mb-3" />

          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              {step !== 'select-coach' && step !== 'confirmation' && (
                <button
                  onClick={() => setStep(step === 'passenger-info' ? 'select-seats' : 'select-coach')}
                  className="p-1.5 rounded-full hover:bg-bg text-ink transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              <div>
                <div className="text-xxs font-semibold text-primary uppercase tracking-wider">
                  Step {step === 'select-coach' ? '1 of 3' : step === 'select-seats' ? '2 of 3' : step === 'passenger-info' ? '3 of 3' : 'Confirmed'}
                </div>
                <h2 className="text-base sm:text-lg font-bold text-ink">
                  {step === 'select-coach' && 'Select Luxury Coach & Departure'}
                  {step === 'select-seats' && 'Select Your Seats Onboard'}
                  {step === 'passenger-info' && 'Passenger & Customs Verification'}
                  {step === 'confirmation' && 'Apple Wallet Boarding Pass'}
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-muted hover:text-ink hover:bg-bg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        {notice ? (
          <div className="mx-6 mt-3 rounded-xl border border-danger/20 bg-danger/8 px-3 py-2 text-xs font-medium text-danger">
            {notice}
          </div>
        ) : null}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: SELECT COACH */}
          {step === 'select-coach' && (
            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-bg text-xs text-ink flex items-center justify-between">
                <span>
                  Showing departures for: <strong>{originTerminal?.city}</strong> ➔ <strong>{destTerminal?.city}</strong> ({initialDate})
                </span>
                <span className="font-semibold text-primary">
                  {BUS_TRIPS.length} Coaches Scheduled
                </span>
              </div>

              <div className="space-y-3">
                {BUS_TRIPS.map((trip) => {
                  const isSelected = selectedTrip.id === trip.id;
                  const fromT = TERMINALS.find((t) => t.id === trip.origin);
                  const toT = TERMINALS.find((t) => t.id === trip.destination);

                  return (
                    <div
                      key={trip.id}
                      onClick={() => setSelectedTrip(trip)}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-bg border-primary ring-2 ring-primary/20 shadow-sm'
                          : 'bg-card border-ink/8 hover:border-ink/18'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-start gap-3.5">
                          <div className="w-16 h-14 rounded-xl overflow-hidden border border-ink/8 shrink-0 hidden sm:flex items-center justify-center bg-ink/5">
                            <img
                              src={photos.heroCoach || DEFAULT_COACH_IMAGES.heroCoach}
                              alt={trip.coachName}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-base font-bold text-ink">
                                {trip.coachName}
                              </span>
                              <span className="text-2xs px-2 py-0.5 rounded-full bg-surface text-ink font-mono">
                                {trip.coachModel}
                              </span>
                            </div>

                            <div className="mt-2.5 flex items-center gap-4 text-sm">
                              <div>
                                <div className="text-lg font-extrabold text-ink font-mono">
                                  {trip.departureTime}
                                </div>
                                <div className="text-xs text-muted">
                                  {fromT?.city} ({fromT?.terminalName.split(' ')[0]})
                                </div>
                              </div>

                              <div className="flex flex-col items-center px-2">
                                <span className="text-xxs text-muted font-mono">{trip.transitDuration}</span>
                                <div className="w-16 h-0.5 bg-surface relative my-1">
                                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                                </div>
                                <span className="text-2xs text-success font-medium">Fast Border</span>
                              </div>

                              <div>
                                <div className="text-lg font-extrabold text-ink font-mono">
                                  {trip.arrivalTime}
                                </div>
                                <div className="text-xs text-muted">
                                  {toT?.city} ({toT?.terminalName.split(' ')[0]})
                                </div>
                              </div>
                            </div>

                            <div className="mt-2.5 flex items-center gap-3 text-xs text-muted">
                              <span className="text-success font-medium">
                                {trip.availableSeats} VIP Seats Left
                              </span>
                              <span>·</span>
                              <span>Starlink Wi-Fi</span>
                              <span>·</span>
                              <span>Leather Recliner</span>
                            </div>
                          </div>
                        </div>

                        {/* Price & Action */}
                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-3 sm:pt-0 border-ink/6">
                          <div className="text-right">
                            <div className="text-2xl font-extrabold text-ink font-mono">
                              {formatPrice(trip.priceZar, trip.priceUsd, trip.priceZig)}
                            </div>
                            <div className="text-xxs text-muted">All Taxes Included</div>
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedTrip(trip);
                              setStep('select-seats');
                            }}
                            className="mt-2 px-5 py-2 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-full transition-all shadow-sm cursor-pointer"
                          >
                            Select Seats
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: SELECT SEATS */}
          {step === 'select-seats' && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 p-3.5 bg-bg rounded-2xl text-xs">
                <div>
                  <span className="text-muted">Selected:</span>{' '}
                  <strong className="text-ink">{selectedTrip.coachName}</strong> (
                  {originTerminal?.city} ➔ {destTerminal?.city})
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-md bg-card border border-ink/15" />
                    <span className="text-muted">Available</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-md bg-primary" />
                    <span className="text-ink font-semibold">Selected</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-md bg-surface" />
                    <span className="text-muted">Occupied</span>
                  </div>
                </div>
              </div>

              {/* Apple Keynote Style Floor Plan */}
              <div className="bg-bg p-6 rounded-3xl border border-ink/6 max-w-md mx-auto">
                <div className="border-b border-ink/8 pb-3 mb-4 flex items-center justify-between text-xs text-muted">
                  <div className="font-semibold text-ink">Driver Cabin</div>
                  <div className="text-2xs font-semibold uppercase tracking-wider text-primary">
                    ▲ Front of Coach ▲
                  </div>
                  <div className="text-2xs text-success font-medium">Entrance</div>
                </div>

                <div className="space-y-2">
                  {Array.from({ length: 12 }).map((_, rowIdx) => {
                    const rowNum = rowIdx + 1;
                    const rowSeats = seats.filter((s) => s.row === rowNum);
                    const leftSeats = rowSeats.slice(0, 2);
                    const rightSeats = rowSeats.slice(2, 4);

                    return (
                      <div key={rowNum} className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          {leftSeats.map((seat) => {
                            const isSelected = selectedSeatNumbers.includes(seat.number);
                            const isBooked = seat.status === 'booked';

                            return (
                              <button
                                key={seat.id}
                                type="button"
                                disabled={isBooked}
                                onClick={() => handleSeatClick(seat)}
                                className={`w-9 h-9 rounded-xl flex flex-col items-center justify-center text-xs font-mono font-semibold transition-all cursor-pointer ${
                                  isBooked
                                    ? 'bg-surface text-muted cursor-not-allowed'
                                    : isSelected
                                    ? 'bg-primary text-on-primary shadow-sm font-bold scale-105'
                                    : 'bg-card hover:bg-surface text-ink border border-ink/8'
                                }`}
                              >
                                <span>{seat.number}</span>
                              </button>
                            );
                          })}
                        </div>

                        <div className="text-2xs font-mono text-muted">
                          {rowNum}
                        </div>

                        <div className="flex items-center gap-2">
                          {rightSeats.map((seat) => {
                            const isSelected = selectedSeatNumbers.includes(seat.number);
                            const isBooked = seat.status === 'booked';

                            return (
                              <button
                                key={seat.id}
                                type="button"
                                disabled={isBooked}
                                onClick={() => handleSeatClick(seat)}
                                className={`w-9 h-9 rounded-xl flex flex-col items-center justify-center text-xs font-mono font-semibold transition-all cursor-pointer ${
                                  isBooked
                                    ? 'bg-surface text-muted cursor-not-allowed'
                                    : isSelected
                                    ? 'bg-primary text-on-primary shadow-sm font-bold scale-105'
                                    : 'bg-card hover:bg-surface text-ink border border-ink/8'
                                }`}
                              >
                                <span>{seat.number}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-ink/8 pt-3 mt-4 flex items-center justify-between text-xs text-muted">
                  <span>Emergency Exit</span>
                  <span className="font-medium text-ink">Sanitary Lavatory</span>
                </div>
              </div>

              {/* Price Calculation Card */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-bg border border-ink/6">
                <div>
                  <div className="text-xs text-muted">
                    Selected Seats ({selectedSeatNumbers.length}):{' '}
                    <strong className="text-ink font-mono">
                      {selectedSeatNumbers.map((s) => `Seat ${s}`).join(', ')}
                    </strong>
                  </div>
                  <div className="text-xxs text-muted">
                    Includes 2x 25kg checked suitcases + 1 hand luggage free
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-xxs text-muted">Total Fare:</div>
                    <div className="text-lg font-bold text-ink font-mono">
                      {currency === 'USD' && `$${selectedTrip.priceUsd * selectedSeatNumbers.length}`}
                      {currency === 'ZIG' && `ZiG ${(selectedTrip.priceZig * selectedSeatNumbers.length).toLocaleString()}`}
                      {currency === 'ZAR' && `R${selectedTrip.priceZar * selectedSeatNumbers.length}`}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep('passenger-info')}
                    className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-on-primary font-semibold text-xs rounded-full transition-all shadow-sm flex items-center gap-1 cursor-pointer"
                  >
                    <span>Continue to Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: PASSENGER INFO */}
          {step === 'passenger-info' && (
            <form onSubmit={handlePassengerSubmit} className="space-y-4">
              <div className="p-3 rounded-2xl bg-primary/10 text-xs text-ink flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Border Customs Verification:</strong> Passenger name and passport/ID number must match official cross-border travel documents for Beitbridge Fast-Track processing.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-bg rounded-2xl p-3 border border-ink/4">
                  <label className="block text-xxs font-semibold text-muted uppercase tracking-wider mb-1">
                    Legal Name (as on Passport) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tendai Moyo"
                    value={passenger.fullName}
                    onChange={(e) => setPassenger({ ...passenger, fullName: e.target.value })}
                    className="w-full bg-transparent text-sm text-ink focus:outline-none"
                  />
                </div>

                <div className="bg-bg rounded-2xl p-3 border border-ink/4">
                  <label className="block text-xxs font-semibold text-muted uppercase tracking-wider mb-1">
                    Passport / National ID Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. FN123456"
                    value={passenger.passportOrId}
                    onChange={(e) => setPassenger({ ...passenger, passportOrId: e.target.value })}
                    className="w-full bg-transparent text-sm font-mono text-ink focus:outline-none"
                  />
                </div>

                <div className="bg-bg rounded-2xl p-3 border border-ink/4">
                  <label className="block text-xxs font-semibold text-muted uppercase tracking-wider mb-1">
                    WhatsApp / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+27 or +263 number"
                    value={passenger.phone}
                    onChange={(e) => setPassenger({ ...passenger, phone: e.target.value })}
                    className="w-full bg-transparent text-sm text-ink focus:outline-none"
                  />
                </div>

                <div className="bg-bg rounded-2xl p-3 border border-ink/4">
                  <label className="block text-xxs font-semibold text-muted uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tendai@example.com"
                    value={passenger.email}
                    onChange={(e) => setPassenger({ ...passenger, email: e.target.value })}
                    className="w-full bg-transparent text-sm text-ink focus:outline-none"
                  />
                </div>

                <div className="bg-bg rounded-2xl p-3 border border-ink/4">
                  <label className="block text-xxs font-semibold text-muted uppercase tracking-wider mb-1">
                    Nationality
                  </label>
                  <select
                    value={passenger.nationality}
                    onChange={(e) => setPassenger({ ...passenger, nationality: e.target.value })}
                    className="w-full bg-transparent text-sm text-ink focus:outline-none cursor-pointer"
                  >
                    <option value="Zimbabwean">Zimbabwean</option>
                    <option value="South African">South African</option>
                    <option value="Other">Other SADC / International</option>
                  </select>
                </div>

                <div className="bg-bg rounded-2xl p-3 border border-ink/4">
                  <label className="block text-xxs font-semibold text-muted uppercase tracking-wider mb-1">
                    Emergency Contact
                  </label>
                  <input
                    type="tel"
                    placeholder="Family member phone"
                    value={passenger.emergencyContact}
                    onChange={(e) => setPassenger({ ...passenger, emergencyContact: e.target.value })}
                    className="w-full bg-transparent text-sm text-ink focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep('select-seats')}
                  className="text-xs text-muted hover:text-ink"
                >
                  ← Back to Seats
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 bg-primary hover:bg-primary-hover text-on-primary font-semibold text-xs rounded-full transition-all shadow-sm cursor-pointer"
                >
                  Issue Digital Boarding Pass
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: CONFIRMATION & APPLE WALLET STYLE BOARDING PASS */}
          {step === 'confirmation' && confirmedBooking && (
            <div className="space-y-6">
              
              {/* Apple Wallet Boarding Pass Card */}
              <div className="bg-ink text-on-primary rounded-3xl overflow-hidden shadow-2xl relative max-w-lg mx-auto border border-ink/10">
                
                {/* Top Notch & Brand Header */}
                <div className="px-6 py-4 bg-ink/50 border-b border-on-primary/10 flex items-center justify-between">
                  <BrandLogo size="sm" variant="light" />
                  <span className="text-2xs font-mono font-semibold bg-primary/20 border border-primary/40 text-primary px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    VIP Pass
                  </span>
                </div>

                {/* Route Information */}
                <div className="p-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-extrabold font-mono tracking-tight">
                        {selectedTrip.origin}
                      </div>
                      <div className="text-xs text-muted">
                        {originTerminal?.city}
                      </div>
                      <div className="text-xxs text-success font-mono mt-0.5">
                        Depart: {selectedTrip.departureTime}
                      </div>
                    </div>

                    <div className="flex flex-col items-center px-4">
                      <Bus className="w-5 h-5 text-muted" />
                      <div className="w-16 h-0.5 bg-card/20 my-1" />
                      <span className="text-2xs font-mono text-muted">Direct</span>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-extrabold font-mono tracking-tight">
                        {selectedTrip.destination}
                      </div>
                      <div className="text-xs text-muted">
                        {destTerminal?.city}
                      </div>
                      <div className="text-xxs text-success font-mono mt-0.5">
                        Arrive: {selectedTrip.arrivalTime}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-on-primary/10 text-xs">
                    <div>
                      <span className="text-muted block text-2xs">Passenger</span>
                      <strong className="text-on-primary truncate block">{confirmedBooking.passenger.fullName}</strong>
                    </div>
                    <div>
                      <span className="text-muted block text-2xs">Seats</span>
                      <strong className="text-primary font-mono">{confirmedBooking.selectedSeats.join(', ')}</strong>
                    </div>
                    <div>
                      <span className="text-muted block text-2xs">Date</span>
                      <strong className="text-on-primary font-mono">{confirmedBooking.travelDate}</strong>
                    </div>
                  </div>
                </div>

                {/* Apple Perforation Line */}
                <div className="relative border-t border-dashed border-on-primary/20 my-1">
                  <div className="ticket-perforation-left" />
                  <div className="ticket-perforation-right" />
                </div>

                {/* Bottom Barcode Section */}
                <div className="p-6 bg-ink/30 flex flex-col items-center justify-center text-center space-y-2">
                  <div className="p-2.5 bg-card rounded-2xl">
                    <QrCode className="w-20 h-20 text-ink" />
                  </div>
                  <div className="font-mono text-xs font-bold text-on-primary tracking-widest">
                    {confirmedBooking.bookingRef}
                  </div>
                  <div className="text-2xs text-muted">
                    Scan at Boarding Gate · Beitbridge Fast-Track
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${BUSA_CONTACTS.whatsappNumber}?text=Hello%20Busa%20Express,%20I%20have%20booked%20reference%20${confirmedBooking.bookingRef}%20for%20${confirmedBooking.passenger.fullName}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-success hover:bg-success text-on-primary text-xs font-semibold rounded-full flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Send Ticket to WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onTrackTrip(confirmedBooking.bookingRef);
                  }}
                  className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-full flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                >
                  <Bus className="w-3.5 h-3.5" />
                  <span>Track This Coach</span>
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2.5 bg-bg hover:bg-surface text-ink text-xs font-semibold rounded-full border border-ink/8 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
