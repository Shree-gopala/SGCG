import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PAGE_BANNER_GRADIENT } from "@/react-app/lib/pageBanner";

const slides = [
  {
    id: 1,
    image: "/banner_3.jpg",
    title: "Purity Meets Progress",
    description: "Shree Gopala Sanwariya Chemicals—Providing high-grade chemical solutions built on a foundation of trust and quality excellence.",
  },
  {
    id: 2,
    image: "/banner_1.jpg",
    title: "Precision-Engineered Solutions",
    description: "Empowering industries with chemicals that meet the highest standards of safety, stability, and performance.",
  },
  {
    id: 3,
    image: "/banner_2.jpg",
    title: "Innovating for a Greener Tomorrow",
    description: "Committed to eco-friendly chemical processes and sustainable practices that protect our environment while serving your needs.",
  },
  {
    id: 4,
    image: "/banner_4.jpg",
    title: "Your Partner in Industrial Growth",
    description: "From reliable supply chains to expert technical support, we are with you at every step of your journey.",
  },
];

// exact per-slide background treatments from the approved mockup, cycled across the 4 slides
const bgTreatments = [
  PAGE_BANNER_GRADIENT,
  "radial-gradient(1000px 620px at 15% 15%,rgba(120,70,10,.55),transparent 60%),radial-gradient(760px 480px at 90% 85%,rgba(232,99,16,.3),transparent 55%),linear-gradient(200deg,#120E06,#241905 55%,#332208)",
  "radial-gradient(1000px 620px at 80% 90%,rgba(35,60,110,.6),transparent 60%),radial-gradient(760px 480px at 10% 10%,rgba(232,99,16,.22),transparent 50%),linear-gradient(160deg,#0B0D14,#131A2B 60%,#182238)",
];

const chips = [
  { text: "ZnO", top: "20%", right: "12%", delay: "0s" },
  { text: "ZnSO₄", top: "36%", right: "6%", delay: "-2s" },
  { text: "Zn₃(PO₄)₂", top: "58%", right: "15%", delay: "-4s" },
  { text: "≥99.995% Zn", top: "26%", right: "24%", delay: "-3s" },
  { text: "ZnCl₂·2NH₄Cl", top: "48%", right: "27%", delay: "-5.5s" },
];

const DELAY = 5000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const goTo = (i: number) => setActive((i + slides.length) % slides.length);

  const startAuto = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setActive((i) => (i + 1) % slides.length), DELAY);
  };

  useEffect(() => {
    startAuto();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const handleNav = (i: number) => {
    goTo(i);
    startAuto();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const glow = glowRef.current;
    if (!glow) return;
    const r = e.currentTarget.getBoundingClientRect();
    glow.style.left = `${e.clientX - r.left}px`;
    glow.style.top = `${e.clientY - r.top}px`;
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-ink hero-slider"
      onMouseMove={handleMouseMove}
    >
      {/* Mouse-follow glow */}
      <div
        ref={glowRef}
        className="absolute w-[520px] h-[520px] rounded-full pointer-events-none z-[1] hidden md:block -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle, rgba(245,158,27,.16), transparent 65%)" }}
      />

      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100 z-[2]" : "opacity-0 z-0"
          }`}
        >
          <div className="relative h-full w-full flex items-center py-[170px]">
            {/* Slide background: exact mockup gradient treatment */}
            <div className="absolute inset-0" style={{ background: bgTreatments[i % bgTreatments.length] }} />
            {/* Grid overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
                backgroundSize: "56px 56px",
                maskImage: "radial-gradient(820px 520px at 55% 42%,#000 25%,transparent 72%)",
                WebkitMaskImage: "radial-gradient(820px 520px at 55% 42%,#000 25%,transparent 72%)",
              }}
            />
            {/* Floating formula chips — first slide only, matching mockup */}
            {i === 0 && (
              <div className="absolute inset-0 z-[2] pointer-events-none hidden lg:block" aria-hidden="true">
                {chips.map((c) => (
                  <span
                    key={c.text}
                    className="animate-bob absolute bg-white/[.07] border border-white/[.16] text-[#EBD9A8] font-extrabold text-[13px] px-[18px] py-[9px] rounded-full backdrop-blur-[8px] font-serif italic tracking-[.5px]"
                    style={{ top: c.top, right: c.right, animationDelay: c.delay }}
                  >
                    {c.text}
                  </span>
                ))}
              </div>
            )}
            {/* Content */}
            <div className="relative z-[3] h-full flex items-center w-full">
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
                <div className="max-w-[900px]">
                  <span className="inline-flex items-center gap-3 text-[#FFC24B] text-xs font-extrabold tracking-[3.5px] uppercase mb-6">
                    <span className="w-11 h-[1.5px] bg-sgrad" />
                    Manufacturing Excellence · Since 1998
                  </span>

                  <h1
                    className={`font-serif text-[clamp(42px,6.6vw,84px)] text-[#F7F1E1] font-semibold leading-[1.02] tracking-[-1.5px] max-w-[900px] ${
                      i === active ? "animate-fade-in-up" : ""
                    }`}
                  >
                    {slide.title}
                  </h1>

                  <p
                    className={`text-[rgba(240,232,212,.75)] text-[clamp(15px,1.8vw,19px)] max-w-[600px] mt-[26px] mb-[40px] ${
                      i === active ? "animate-fade-in-up animation-delay-200" : ""
                    }`}
                  >
                    {slide.description}
                  </p>

                  <div className={`flex flex-wrap gap-4 ${i === active ? "animate-fade-in-up animation-delay-400" : ""}`}>
                    <Link
                      to="/products"
                      className="inline-flex items-center justify-center gap-[9px] px-8 py-[15px] bg-sgrad text-[#231303] font-extrabold rounded-full transition-all duration-300 text-sm tracking-[.5px] shadow-[0_12px_30px_rgba(232,99,16,.4)] hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_18px_44px_rgba(232,99,16,.55)]"
                    >
                      Explore Products
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-[9px] px-8 py-[15px] bg-white/5 border-[1.6px] border-white/50 text-[#F5EEDC] font-extrabold rounded-full backdrop-blur-[6px] transition-all duration-300 text-sm tracking-[.5px] hover:bg-[#F5EEDC] hover:text-ink"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Custom Navigation Arrows */}
      <button
        onClick={() => handleNav(active - 1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-white/8 hover:bg-saf2 text-[#F5EEDC] transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-transparent hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={() => handleNav(active + 1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-white/8 hover:bg-saf2 text-[#F5EEDC] transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-transparent hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Custom Pagination */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => handleNav(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={i === active ? "hero-bullet-active hero-bullet" : "hero-bullet"}
          />
        ))}
      </div>
    </section>
  );
}
