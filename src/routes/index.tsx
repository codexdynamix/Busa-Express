import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroBookingSection } from "@/components/HeroBookingSection";
import { BookingFlowModal } from "@/components/BookingFlowModal";
import { LiveTrackingSection } from "@/components/LiveTrackingSection";
import { FleetAndAmenities } from "@/components/FleetAndAmenities";
import { CharterInquirySection } from "@/components/CharterInquirySection";
import { RouteScheduleSection } from "@/components/RouteScheduleSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { PhotoProvider } from "@/context/PhotoContext";
import type { CityId } from "@/types/bus";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <PhotoProvider>
      <AppContent />
    </PhotoProvider>
  );
}

function AppContent() {
  const [currency, setCurrency] = useState<"ZAR" | "USD" | "ZIG">("ZAR");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingOrigin, setBookingOrigin] = useState<CityId>("JNB");
  const [bookingDestination, setBookingDestination] = useState<CityId>("HAR");
  const [bookingDate, setBookingDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0] ?? "";
  });
  const [bookingPassengers, setBookingPassengers] = useState(1);
  const [trackedTicketRef, setTrackedTicketRef] = useState("BUSA-7821-HAR");

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleSearchTrips = (
    origin: CityId,
    destination: CityId,
    date: string,
    passengers: number,
  ) => {
    setBookingOrigin(origin);
    setBookingDestination(destination);
    setBookingDate(date);
    setBookingPassengers(passengers);
    setIsBookingOpen(true);
  };

  const handleSelectRouteFromSchedule = (originId: CityId, destId: CityId) => {
    setBookingOrigin(originId);
    setBookingDestination(destId);
    setIsBookingOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTrackTrip = (ticketRef: string) => {
    setTrackedTicketRef(ticketRef);
    handleScrollToSection("tracking-section");
  };

  return (
    <div className="min-h-screen bg-bg text-ink flex flex-col font-sans">
      <Navbar
        onOpenBooking={handleOpenBooking}
        onScrollToSection={handleScrollToSection}
        currency={currency}
        onCurrencyChange={setCurrency}
      />

      <main className="flex-1">
        <HeroBookingSection
          onSearchTrips={handleSearchTrips}
          onScrollToTracking={() => handleScrollToSection("tracking-section")}
          currency={currency}
        />
        <LiveTrackingSection searchedTicketRef={trackedTicketRef} />
        <FleetAndAmenities onOpenBooking={handleOpenBooking} />
        <RouteScheduleSection onSelectRoute={handleSelectRouteFromSchedule} />
        <CharterInquirySection />
        <TestimonialsSection />
      </main>

      <Footer onScrollToSection={handleScrollToSection} />

      <BookingFlowModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialOrigin={bookingOrigin}
        initialDestination={bookingDestination}
        initialDate={bookingDate}
        initialPassengers={bookingPassengers}
        currency={currency}
        onTrackTrip={handleTrackTrip}
      />
    </div>
  );
}
