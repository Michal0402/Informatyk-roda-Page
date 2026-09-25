type ArtProps = {
  className?: string;
};

function frame(className: string | undefined) {
  return `text-accent-deep ${className ?? ""}`;
}

export function LaptopArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 280 180" className={frame(className)} fill="none" aria-hidden="true">
      <rect className="draw" pathLength={1} x="36" y="22" width="208" height="118" rx="10" stroke="currentColor" strokeWidth="2.5" />
      <path className="draw draw-late" pathLength={1} d="M28 148h224l-16 16H44L28 148Z" stroke="currentColor" strokeWidth="2.5" />
      <path className="draw" pathLength={1} d="M118 154h44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="78" y="48" width="54" height="36" rx="4" stroke="#0E9F8A" strokeWidth="2" />
      <circle cx="176" cy="78" r="16" stroke="#0E9F8A" strokeWidth="2" />
    </svg>
  );
}

export function PhoneArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 140 200" className={frame(className)} fill="none" aria-hidden="true">
      <rect className="draw" pathLength={1} x="28" y="12" width="84" height="164" rx="16" stroke="currentColor" strokeWidth="2.5" />
      <path className="draw draw-late" pathLength={1} d="M52 28h36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="42" y="48" width="56" height="72" rx="6" stroke="#0E9F8A" strokeWidth="2" />
      <circle className="draw" pathLength={1} cx="70" cy="152" r="6" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export function BoardArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 160 120" className={frame(className)} fill="none" aria-hidden="true">
      <rect className="draw" pathLength={1} x="12" y="16" width="136" height="88" rx="8" stroke="currentColor" strokeWidth="2.5" />
      <path className="draw draw-late" pathLength={1} d="M28 40h48M28 56h32M28 72h40" stroke="#0E9F8A" strokeWidth="2" strokeLinecap="round" />
      <rect x="96" y="36" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="112" cy="80" r="8" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function BatteryArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 160 100" className={frame(className)} fill="none" aria-hidden="true">
      <rect className="draw" pathLength={1} x="16" y="24" width="112" height="52" rx="8" stroke="currentColor" strokeWidth="2.5" />
      <path className="draw" pathLength={1} d="M128 40h10a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-10" stroke="currentColor" strokeWidth="2.5" />
      <path className="draw draw-late" pathLength={1} d="M32 50h56" stroke="#0E9F8A" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function ScreenArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 160 120" className={frame(className)} fill="none" aria-hidden="true">
      <rect className="draw" pathLength={1} x="16" y="14" width="128" height="78" rx="8" stroke="currentColor" strokeWidth="2.5" />
      <path className="draw draw-late" pathLength={1} d="M40 48l18 16 14-20 28 28" stroke="#0E9F8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path className="draw" pathLength={1} d="M64 104h32M80 92v12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function DiskArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 140 120" className={frame(className)} fill="none" aria-hidden="true">
      <rect className="draw" pathLength={1} x="18" y="28" width="104" height="64" rx="8" stroke="currentColor" strokeWidth="2.5" />
      <circle className="draw draw-late" pathLength={1} cx="70" cy="60" r="16" stroke="#0E9F8A" strokeWidth="2.5" />
      <circle cx="70" cy="60" r="4" fill="#0E9F8A" />
    </svg>
  );
}
