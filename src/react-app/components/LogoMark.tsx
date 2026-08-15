// logo.png is a single flattened image: the navy "SGSC" oval occupies roughly the left 40%
// of the canvas, with the "Shree Gopala Sanwaria Chemicals" wordmark filling the rest. We
// only want the oval icon here — the company name is set as real text beside it wherever
// this is used, so it stays crisp and normal-weight instead of being derived from the image.
const OVAL_ASPECT = 437.6 / 178; // measured width:height of just the oval region

interface LogoMarkProps {
  src: string;
  className?: string;
}

export default function LogoMark({ src, className = "" }: LogoMarkProps) {
  return (
    <span
      className={`relative inline-block overflow-hidden flex-shrink-0 ${className}`}
      style={{ aspectRatio: String(OVAL_ASPECT) }}
    >
      <img src={src} alt="SGSC" className="absolute left-0 top-0 h-full w-auto max-w-none" />
    </span>
  );
}
