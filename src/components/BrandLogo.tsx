import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'dark',
  showSubtitle,
}) => {
  const isLight = variant === 'light';
  const displaySubtitle = showSubtitle ?? (size === 'lg');

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8 sm:w-9 sm:h-9',
    lg: 'w-11 h-11 sm:w-12 sm:h-12',
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-base sm:text-base',
    lg: 'text-xl sm:text-2xl',
  };

  const subSizes = {
    sm: 'text-2xs',
    md: 'text-2xs',
    lg: 'text-xxs',
  };

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group select-none">
      {/* Authentic Coach Livery Swirl Logo — uniform background with header (no black box) */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0`}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
        >
          <defs>
            {/* Aerodynamic wing with signature notch & vortex tail */}
            <path
              id="bus-swirl-wing"
              d="
                M 48.5 51.5
                C 42 48, 34.5 40, 34 28.5
                C 33.5 17.5, 41.5 13.5, 52 15
                C 58 16, 65 19, 73.5 22.5
                C 68.5 28.5, 62.5 33, 58 35.5
                L 52 33
                C 49 39.5, 47 46, 48.5 51.5 Z
              "
            />
          </defs>

          {/* 4-Wing Pinwheel matching the coach livery */}
          {/* Top Wing: Royal Blue (0 deg) */}
          <use
            href="#bus-swirl-wing"
            fill="#0062cc"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Right Wing: Vibrant Green (90 deg) */}
          <use
            href="#bus-swirl-wing"
            transform="rotate(90, 50, 50)"
            fill="#28b835"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Bottom Wing: Royal Blue (180 deg) */}
          <use
            href="#bus-swirl-wing"
            transform="rotate(180, 50, 50)"
            fill="#0062cc"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Left Wing: Vibrant Green (270 deg) */}
          <use
            href="#bus-swirl-wing"
            transform="rotate(270, 50, 50)"
            fill="#28b835"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`${titleSizes[size]} font-bold tracking-tight ${
              isLight ? 'text-on-primary' : 'text-ink'
            }`}
          >
            Busa Express
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-success shrink-0" />
        </div>

        {displaySubtitle && (
          <span
            className={`${subSizes[size]} font-medium tracking-normal text-muted mt-1 ${
              isLight ? 'text-on-primary/60' : 'text-muted'
            }`}
          >
            Busachamone Luxury Coaches
          </span>
        )}
      </div>
    </div>
  );
};
