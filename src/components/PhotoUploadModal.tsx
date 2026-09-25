import React, { useRef, useState } from 'react';
import { X, Upload, CheckCircle2, Trash2, Camera, ShieldCheck, AlertCircle, Files, Sparkles } from 'lucide-react';
import { useBusPhotos, BusPhotos } from '@/context/PhotoContext';
import { DEFAULT_COACH_IMAGES } from '@/assets/images';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetKey: keyof BusPhotos | null;
}

interface SlotConfig {
  key: keyof BusPhotos;
  title: string;
  subtitle: string;
  description: string;
  aspect: string;
  matchKeywords: string[];
}

const SLOTS: SlotConfig[] = [
  {
    key: 'heroCoach',
    title: '1. Exterior Front 3/4 (Chrome Bullbar)',
    subtitle: 'Primary coach exterior view',
    description: 'Original photo of the white Scania Irizar coach with chrome bullbar and green swooshes.',
    aspect: '16:9',
    matchKeywords: ['033601', '033551', 'hero', 'exterior', 'front', 'bullbar', 'joburg'],
  },
  {
    key: 'sideProfile',
    title: '2. Full Side Profile (3-Axle Coach)',
    subtitle: 'Outside Irizar facility / block pavers',
    description: 'Full side profile photo of the 3-axle coach parked outside the facility.',
    aspect: '16:9',
    matchKeywords: ['150927', 'side', 'profile', 'facility', 'paver', 'irizar'],
  },
  {
    key: 'cabinInterior',
    title: '3. Cabin Interior (Executive Recliners)',
    subtitle: 'Center aisle & two-tone leather seats',
    description: 'Original photo looking down the cabin aisle showing executive passenger seating.',
    aspect: '16:9',
    matchKeywords: ['144716', 'cabin', 'interior', 'seats', 'aisle'],
  },
  {
    key: 'luggageHold',
    title: '4. Cavernous Luggage Compartment',
    subtitle: 'Open underfloor luggage cargo bay',
    description: 'Original photo showing open luggage hold doors and spacious cargo bay.',
    aspect: '4:3',
    matchKeywords: ['151418', 'luggage', 'hold', 'cargo', 'compartment', 'bay'],
  },
  {
    key: 'frontBoarding',
    title: '5. Passenger Entrance & Scania Grille',
    subtitle: 'Entry boarding steps & front badge',
    description: 'Original photo showing open passenger entrance door, steps, and Scania front.',
    aspect: '4:3',
    matchKeywords: ['151301', 'front', 'boarding', 'door', 'entrance', 'steps', 'grille', 'scania'],
  },
];

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  targetKey,
}) => {
  const { photos, setPhoto, setMultiplePhotos, resetPhotos } = useBusPhotos();
  const fileInputRefs = useRef<{ [k in keyof BusPhotos]?: HTMLInputElement | null }>({});
  const batchFileInputRef = useRef<HTMLInputElement | null>(null);
  const [dragOver, setDragOver] = useState(false);

  if (!isOpen) return null;

  const processBatchFiles = (filesList: FileList | File[]) => {
    const files = Array.from(filesList).filter((f) => f.type.startsWith('image/'));
    if (files.length === 0) return;

    const remainingSlots: (keyof BusPhotos)[] = ['heroCoach', 'sideProfile', 'cabinInterior', 'luggageHold', 'frontBoarding'];
    const assigned: Partial<BusPhotos> = {};

    // 1. Try to match by keyword/timestamp in filename
    const unassignedFiles: File[] = [];
    files.forEach((file) => {
      const lowerName = file.name.toLowerCase();
      const matchedSlot = SLOTS.find(
        (slot) => remainingSlots.includes(slot.key) && slot.matchKeywords.some((kw) => lowerName.includes(kw))
      );

      if (matchedSlot) {
        const slotKey = matchedSlot.key;
        remainingSlots.splice(remainingSlots.indexOf(slotKey), 1);
        const reader = new FileReader();
        reader.onload = (e) => {
          const res = e.target?.result as string;
          if (res) setPhoto(slotKey, res);
        };
        reader.readAsDataURL(file);
      } else {
        unassignedFiles.push(file);
      }
    });

    // 2. Assign any remaining files sequentially to unassigned slots
    unassignedFiles.forEach((file) => {
      if (remainingSlots.length > 0) {
        const slotKey = remainingSlots.shift()!;
        const reader = new FileReader();
        reader.onload = (e) => {
          const res = e.target?.result as string;
          if (res) setPhoto(slotKey, res);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleSingleFileChange = (key: keyof BusPhotos, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setPhoto(key, dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processBatchFiles(e.dataTransfer.files);
    }
  };

  const attachedCount = Object.values(photos).filter(Boolean).length;

  return (
    <div className="fixed inset-0 z-50 bg-ink/75 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative max-w-4xl w-full bg-card rounded-3xl overflow-hidden shadow-2xl border border-ink/8 flex flex-col max-h-[92vh]">
        
        {/* Apple Style Modal Header */}
        <div className="px-6 py-4 border-b border-ink/6 flex items-center justify-between bg-bg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-ink">
                  Original Bus Photos
                </h3>
                <span className={`px-2 py-0.5 rounded-full text-xxs font-mono font-semibold ${
                  attachedCount === 5 ? 'bg-success/15 text-success' : 'bg-primary/10 text-primary'
                }`}>
                  {attachedCount} of 5 Active
                </span>
              </div>
              <p className="text-xs text-muted mt-0.5">
                Zero AI manipulation. Photos are rendered 100% as you took them.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-muted hover:text-ink hover:bg-ink/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Batch Drop / Import Area */}
        <div className="px-6 py-3 bg-bg border-b border-ink/6">
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => batchFileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all flex flex-col sm:flex-row items-center justify-center gap-3 ${
              dragOver
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-ink/12 bg-card hover:border-primary hover:bg-primary/[0.02]'
            }`}
          >
            <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Files className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-ink flex items-center gap-1.5">
                <span>Select or Drag & Drop All 5 Attached Screenshots</span>
                <span className="text-2xs font-semibold px-1.5 py-0.5 rounded bg-success/10 text-success">
                  Instant 1-Click
                </span>
              </div>
              <div className="text-xxs text-muted">
                Drop all 5 files at once — the app automatically places them without altering a single pixel.
              </div>
            </div>
          </div>
          <input
            type="file"
            multiple
            accept="image/*"
            ref={batchFileInputRef}
            onChange={(e) => {
              if (e.target.files) processBatchFiles(e.target.files);
            }}
            className="hidden"
          />
        </div>

        {/* Scrollable Slots Grid */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SLOTS.map((slot) => {
              const currentImage = photos[slot.key];
              const isTarget = targetKey === slot.key;

              return (
                <div
                  key={slot.key}
                  className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                    isTarget
                      ? 'border-primary ring-2 ring-primary/20 bg-primary/[0.02]'
                      : 'border-ink/8 bg-bg'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-xs font-bold text-ink flex items-center gap-1.5">
                          <span>{slot.title}</span>
                          {currentImage && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                          )}
                        </h4>
                        <p className="text-2xs text-muted leading-tight mt-0.5">
                          {slot.subtitle}
                        </p>
                      </div>

                      {currentImage && (
                        <button
                          type="button"
                          onClick={() => setPhoto(slot.key, null)}
                          className="p-1 rounded-lg text-danger hover:bg-danger/10 transition-colors cursor-pointer"
                          title="Remove photo"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    {/* Photo Preview or Slot Drop Area */}
                    {currentImage ? (
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-ink/8 group bg-ink/5">
                        <img
                          src={currentImage}
                          alt={slot.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-success text-on-primary text-2xs font-semibold flex items-center gap-1 shadow-sm">
                          <CheckCircle2 className="w-2.5 h-2.5" /> Attached
                        </div>
                        <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button
                            type="button"
                            onClick={() => fileInputRefs.current[slot.key]?.click()}
                            className="px-3 py-1.5 bg-card text-ink rounded-full text-xs font-semibold shadow-lg hover:bg-bg transition-all cursor-pointer"
                          >
                            Replace File
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-ink/8 group bg-ink/5">
                        <img
                          src={DEFAULT_COACH_IMAGES[slot.key]}
                          alt={slot.title}
                          className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity"
                        />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-ink/60 backdrop-blur-md text-on-primary text-2xs font-semibold flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-primary" /> Active Fleet Photo
                        </div>
                        <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <button
                            type="button"
                            onClick={() => fileInputRefs.current[slot.key]?.click()}
                            className="px-3 py-1.5 bg-card text-ink rounded-full text-xs font-semibold shadow-lg hover:bg-bg transition-all cursor-pointer flex items-center gap-1"
                          >
                            <Upload className="w-3 h-3 text-primary" />
                            <span>Replace with Screenshot</span>
                          </button>
                        </div>
                      </div>
                    )}

                    <input
                      type="file"
                      accept="image/*"
                      ref={(el) => {
                        fileInputRefs.current[slot.key] = el;
                      }}
                      onChange={(e) => handleSingleFileChange(slot.key, e)}
                      className="hidden"
                    />
                  </div>

                  <p className="text-2xs text-muted mt-2 leading-relaxed">
                    {slot.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-ink/6 bg-bg flex items-center justify-between">
          <button
            type="button"
            onClick={resetPhotos}
            className="text-xs text-muted hover:text-danger transition-colors cursor-pointer"
          >
            Clear All Photos
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold rounded-full shadow-sm transition-all cursor-pointer"
          >
            Done & View Live Site
          </button>
        </div>

      </div>
    </div>
  );
};
