interface KickerProps {
  children: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export default function Kicker({ children, center, light, className = "" }: KickerProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-extrabold tracking-[3px] uppercase mb-4 ${
        center ? "justify-center" : ""
      } ${light ? "text-[#FFC24B]" : "text-saf2"} ${className}`}
    >
      <span className="w-9 h-[1.5px] bg-sgrad" />
      {children}
    </span>
  );
}
