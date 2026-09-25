export type CityId = 'JNB' | 'MID' | 'PTA' | 'PLK' | 'MSN' | 'BBR' | 'GWA' | 'BYO' | 'MAS' | 'CHI' | 'MAR' | 'HAR';

export interface Terminal {
  id: CityId;
  city: string;
  terminalName: string;
  country: 'South Africa' | 'Zimbabwe';
  address: string;
}

export interface BusTrip {
  id: string;
  coachName: string;
  coachModel: string;
  origin: CityId;
  destination: CityId;
  departureTime: string;
  arrivalTime: string;
  transitDuration: string;
  priceZar: number;
  priceUsd: number;
  priceZig: number;
  availableSeats: number;
  totalSeats: number;
  amenities: string[];
  days: string[];
}

export interface Seat {
  id: string;
  number: number;
  row: number;
  column: 'A' | 'B' | 'C' | 'D';
  isVip: boolean;
  status: 'available' | 'selected' | 'booked';
  hasPower: boolean;
}

export interface TrackingStop {
  city: string;
  name: string;
  scheduledTime: string;
  status: 'passed' | 'current' | 'upcoming';
  passedAt?: string;
  eta?: string;
  coords: { x: number; y: number }; // 0 to 100 on our interactive route canvas
}

export interface ActiveCoachTracking {
  id: string;
  ticketPrefix: string;
  coachNumber: string;
  coachName: string;
  model: string;
  registration: string;
  routeName: string;
  originCity: string;
  destinationCity: string;
  departureDate: string;
  currentSpeedKmH: number;
  currentLatitude: number;
  currentLongitude: number;
  currentLocationName: string;
  nextStopName: string;
  nextStopEta: string;
  overallProgressPercent: number;
  borderStatus: string;
  cabinTempC: number;
  wifiStatus: string;
  driverName: string;
  copilotName: string;
  passengersOnboard: number;
  stops: TrackingStop[];
}

export interface BookingPassenger {
  fullName: string;
  passportOrId: string;
  nationality: string;
  phone: string;
  email: string;
  emergencyContact: string;
  dietaryOrBaggageNotes: string;
  selectedSeats: string[];
}

export interface ConfirmedBooking {
  bookingRef: string;
  trip: BusTrip;
  passenger: BookingPassenger;
  selectedSeats: string[];
  totalPriceZar: number;
  totalPriceUsd: number;
  bookingDate: string;
  travelDate: string;
  qrPayload: string;
}
