import { Link } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/banner_3.jpg",
    title: "Purity Meets Progress",
    // highlight: "Zinc Chemicals",
    // subtitle: "Metal Powders & Ingots",
    description: "Shree Gopala Sanwariya Chemicals—Providing high-grade chemical solutions built on a foundation of trust and quality excellence.",
  },
  {
    id: 2,
    image: "/banner_1.jpg",
    title: "Precision-Engineered Solutions",
    // highlight: "Sustainability",
    // subtitle: "& Circular Economy",
    description: "Empowering industries with chemicals that meet the highest standards of safety, stability, and performance.",
  },
  {
    id: 3,
    image: "/banner_2.jpg",
    title: "Innovating for a Greener Tomorrow",
    // highlight: "Industries Trust",
    // subtitle: "Since 1998",
    description: "Committed to eco-friendly chemical processes and sustainable practices that protect our environment while serving your needs.",
  },
  {
    id: 4,
    image: "/banner_4.jpg",
    title: "Your Partner in Industrial Growth",
    // highlight: "Greener Future",
    // subtitle: "Through Innovation",
    description: "From reliable supply chains to expert technical support, we are with you at every step of your journey.",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative h-screen w-full overflow-hidden hero-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        pagination={{
          el: ".hero-pagination",
          clickable: true,
          bulletClass: "hero-bullet",
          bulletActiveClass: "hero-bullet-active",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={1000}
        grabCursor={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image with Ken Burns effect */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/60" />
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
                  <div className="max-w-2xl">
                    {/* Decorative element */}
                    {/*<div className="flex items-center gap-3 mb-6 animate-fade-in-up">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-bhagwa to-gold" />
                      <span className="text-gold text-sm font-semibold tracking-widest uppercase">SGSC</span>
                    </div>*/}
                    
                    <h1 className=" text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-in-up" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                      {slide.title}
                      <br />
                     {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-bhagwa via-gold to-bhagwa-light">
                        {slide.highlight}
                      </span>
                      <br />
                      <span className="text-gold-light">{slide.subtitle}</span>*/}
                    </h1>

                    <p className="text-white/85 text-lg md:text-xl mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
                   {/*   <Link
                        to="/products"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-bhagwa to-bhagwa-light text-white font-bold rounded-full hover:from-bhagwa-light hover:to-gold transition-all duration-300 text-sm uppercase tracking-wider shadow-lg shadow-bhagwa/30 hover:shadow-bhagwa/50 hover:scale-105"
                      >
                        Explore Products
                      </Link>*/}
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-gold/50 text-white font-bold rounded-full hover:bg-gold/20 hover:border-gold transition-all duration-300 text-sm uppercase tracking-wider"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button
        className="hero-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-bhagwa/30 hover:bg-bhagwa/60 text-white transition-all duration-300 backdrop-blur-sm border border-gold/30 hover:border-gold/60 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        className="hero-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-bhagwa/30 hover:bg-bhagwa/60 text-white transition-all duration-300 backdrop-blur-sm border border-gold/30 hover:border-gold/60 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Custom Pagination */}
      <div className="hero-pagination absolute bottom-8 left-6 md:left-12 lg:left-16 z-20 flex items-center gap-3" />
      
      {/* Scroll indicator */}
      {/*<div className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase rotate-90 origin-center translate-y-8">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </div>*/}
    </section>
  );
}
