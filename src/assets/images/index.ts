import type { BusPhotos } from "@/context/PhotoContext";

export type BusCompanyPhotos = BusPhotos;

/** Cache-busted paths so previous (wrong) fleet shots cannot linger. */
const V = "v20260925real";

export const DEFAULT_COACH_IMAGES: Record<keyof BusPhotos, string> = {
  heroCoach: `/busa/hero.jpg?${V}`,
  sideProfile: `/busa/side.jpg?${V}`,
  cabinInterior: `/busa/cabin.jpg?${V}`,
  luggageHold: `/busa/luggage.jpg?${V}`,
  frontBoarding: `/busa/boarding.jpg?${V}`,
};

export const BUSA_IMAGES = DEFAULT_COACH_IMAGES;
