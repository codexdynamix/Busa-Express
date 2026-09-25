import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export interface BusPhotos {
  heroCoach: string | null;
  sideProfile: string | null;
  cabinInterior: string | null;
  luggageHold: string | null;
  frontBoarding: string | null;
}

interface PhotoContextType {
  photos: BusPhotos;
  setPhoto: (key: keyof BusPhotos, dataUrl: string | null) => void;
  setMultiplePhotos: (photosMap: Partial<BusPhotos>) => void;
  resetPhotos: () => void;
  isUploadModalOpen: boolean;
  setIsUploadModalOpen: (open: boolean) => void;
  activeUploadTarget: keyof BusPhotos | null;
  openUploadModal: (target?: keyof BusPhotos) => void;
  hasPhotos: boolean;
}

const defaultPhotos: BusPhotos = {
  heroCoach: null,
  sideProfile: null,
  cabinInterior: null,
  luggageHold: null,
  frontBoarding: null,
};

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export function PhotoProvider({ children }: { children: ReactNode }) {
  const [photos] = useState<BusPhotos>(defaultPhotos);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [activeUploadTarget, setActiveUploadTarget] = useState<keyof BusPhotos | null>(null);

  const value = useMemo<PhotoContextType>(() => {
    const setPhoto = (_key: keyof BusPhotos, _dataUrl: string | null) => {
      /* Fleet photos are baked into /public/busa — uploads no longer override them. */
    };
    const setMultiplePhotos = (_photosMap: Partial<BusPhotos>) => {};
    const resetPhotos = () => {};
    const openUploadModal = (target?: keyof BusPhotos) => {
      setActiveUploadTarget(target ?? null);
      setIsUploadModalOpen(false);
    };
    return {
      photos,
      setPhoto,
      setMultiplePhotos,
      resetPhotos,
      isUploadModalOpen,
      setIsUploadModalOpen,
      activeUploadTarget,
      openUploadModal,
      hasPhotos: false,
    };
  }, [photos, isUploadModalOpen, activeUploadTarget]);

  return <PhotoContext.Provider value={value}>{children}</PhotoContext.Provider>;
}

export function useBusPhotos() {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error("useBusPhotos must be used within a PhotoProvider");
  }
  return context;
}
