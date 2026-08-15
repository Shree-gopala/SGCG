interface MarqueeProps {
  items: string[];
  className?: string;
}

export default function Marquee({ items, className = "" }: MarqueeProps) {
  const loop = [...items, ...items];
  return (
    <div className={`bg-ink overflow-hidden py-4 border-y border-white/10 ${className}`} aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {loop.map((item, i) => (
          <span
            key={i}
            className="text-[#B9B29B] font-extrabold text-sm tracking-[2.5px] uppercase px-8 relative after:content-['✦'] after:absolute after:-right-2 after:text-saf"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
