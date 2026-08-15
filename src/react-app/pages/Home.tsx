import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Factory, Microscope, Leaf, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import HeroSlider from "@/react-app/components/HeroSlider";
import CTASection from "@/react-app/components/CTASection";
import { ScrollReveal } from "@/react-app/components/ScrollReveal";
import { BackgroundPattern } from "@/react-app/components/BackgroundPattern";
import Kicker from "@/react-app/components/Kicker";
import Marquee from "@/react-app/components/Marquee";
import { capabilities, industriesServed } from "@/data/company";
import { products } from "@/data/products";

const iconMap: Record<string, React.ReactNode> = {
  factory: <Factory className="w-5 h-5" />,
  microscope: <Microscope className="w-5 h-5" />,
  leaf: <Leaf className="w-5 h-5" />,
  truck: <Truck className="w-5 h-5" />,
};

const productCategories = [
  { id: "all", label: "All Products" },
  { id: "chemicals", label: "Chemicals" },
  { id: "metal-powders", label: "Metal Powders" },
  { id: "metal-ingots", label: "Metal Ingots" },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredProducts = activeTab === "all" 
    ? products.slice(0, 8) 
    : products.filter(p => p.category === activeTab).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      
      {/* Hero Section - Sticky */}
      <div className="sticky top-0 h-screen">
        <HeroSlider />
      </div>

      {/* Main Content - Overlaps Hero on Scroll */}
      <main className="relative z-20 bg-white">
        {/* About Preview Section - Overlapping */}
        <section className="bg-white pt-16 md:pt-24 pb-16 md:pb-20 rounded-t-3xl -mt-12 shadow-2xl relative overflow-hidden">
          <BackgroundPattern />
          
          {/* Floating decorative shapes */}
          <div className="absolute top-20 right-[10%] w-20 h-20 bg-gradient-to-br from-gray-200/40 to-gray-300/30 rounded-full blur-xl animate-float" />
          <div className="absolute top-40 left-[5%] w-16 h-16 bg-gradient-to-br from-gray-300/30 to-gray-200/20 rounded-2xl rotate-12 blur-lg animate-float-delayed" />
          <div className="absolute bottom-32 right-[15%] w-24 h-24 bg-gradient-to-br from-gray-200/20 to-transparent rounded-full blur-2xl animate-float-slow" />
          <div className="absolute bottom-20 left-[12%] w-12 h-12 border-2 border-gray-300/30 rounded-full animate-float" />
          <div className="absolute top-1/2 right-[8%] w-8 h-8 bg-gray-300/30 rounded-lg rotate-45 animate-float-slow" />
          
          <ScrollReveal className="relative max-w-5xl mx-auto px-4 md:px-8">
            {/* Centered About Text */}
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-10 leading-tight tracking-tight">
                 <span className="italic text-transparent bg-clip-text bg-sgrad">25 Years</span> of Quality,<br className="hidden md:block" /> Trust & Innovation
              </h2>
              <p className="text-tx text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
               From a small metal recycling unit in 1998, <span className="text-saf2 font-semibold">Shree Gopala Sanwaria Chemicals</span> has grown into a full-scale manufacturer supplying critical chemicals and metals to India's core industries.
            <br className="hidden md:block" /><br className="hidden md:block" />Founded by Mr. Sandeep Bansal, our company was established with a pioneering vision: to convert metal scrap into valuable, high-purity industrial products — promoting recycling and sustainable manufacturing at a time when few in the sector were doing so.
              </p>
            </div>

            {/* About Button */}
            <div className="text-center">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-sgrad text-ink font-extrabold rounded-full transition-all duration-300 text-sm uppercase tracking-wider shadow-glow hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Vision Section */}
            <div className="max-w-4xl mx-auto mt-16 p-8 md:p-10 md:px-16 bg-em rounded-3xl shadow-2xl relative overflow-hidden">
              <span aria-hidden="true" className="absolute -top-6 left-6 font-serif italic text-white/[.14] text-[220px] leading-none select-none">“</span>
              <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_85%_110%,rgba(245,158,27,.15),transparent_60%)]" />
              <div className="relative text-center">
                <Kicker center light>Our Core Vision</Kicker>
                <p className="font-serif text-xl md:text-2xl text-white italic font-semibold leading-relaxed max-w-3xl mx-auto">
                  “Building a Stronger India through Manufacturing Excellence, Innovation, Trust, and Sustainable Growth.”
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Trust Badges / Certifications Marquee */}
        <Marquee
          items={[
            "ISO 9001:2015 Certified",
            "25+ Years of Excellence",
            "100+ Industry Partners",
            "Eco-Friendly Manufacturing",
            "In-House Quality Lab",
            "Pan-India Delivery",
            "Custom Formulations",
            "Technical Support",
          ]}
        />

        {/* Featured Products Section with Slider */}
        <section className="bg-paper2 py-20 md:py-28 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,22,28,.05),transparent_50%)]" />
          <div className="absolute top-20 left-[5%] w-32 h-32 bg-saf/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 right-[8%] w-40 h-40 bg-saf2/10 rounded-full blur-3xl animate-float" />

          <ScrollReveal className="relative max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              <Kicker center>Our Products</Kicker>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mt-4 mb-5 tracking-tight">
                Premium Industrial<br className="hidden md:block" />
                <span className="italic text-transparent bg-clip-text bg-sgrad">Chemicals & Metals</span>
              </h2>
              <p className="text-tx max-w-2xl mx-auto text-lg mb-10">
                From high-purity zinc chemicals to precision metal powders and cast ingots,
                our product portfolio covers the full spectrum of industrial needs.
              </p>

              {/* Product Tabs - Enhanced */}
              <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar">
                <div className="inline-flex gap-2 md:gap-3 p-1.5 md:p-2 bg-white rounded-full shadow-soft border border-line min-w-max">
                  {productCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                        activeTab === cat.id
                          ? "bg-sgrad text-ink shadow-glow"
                          : "text-tx hover:text-saf2 hover:bg-saf2/5"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Slider */}
            <div className="relative product-slider-container">
              {/* Custom Navigation Buttons - Hidden on mobile */}
              <button className="product-prev hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-xl items-center justify-center text-saf2 hover:bg-saf2 hover:text-white transition-all duration-300 border border-line">
                <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
              <button className="product-next hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-xl items-center justify-center text-saf2 hover:bg-saf2 hover:text-white transition-all duration-300 border border-line">
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>

              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                speed={600}
                grabCursor={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  prevEl: ".product-prev",
                  nextEl: ".product-next",
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="py-4 px-2"
              >
                {filteredProducts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <Link
                      to={`/products/${product.id}`}
                      className="group block bg-white rounded-3xl border border-line overflow-hidden card-lift h-full shadow-soft"
                    >
                      {/* Product Image Header */}
                      <div className="relative h-56 md:h-64 overflow-hidden">
                        {product.imageUrl ? (
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-paper to-paper2" />
                        )}
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        {/* Formula badge */}
                        <div className="absolute bottom-4 left-4 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-sgrad flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <div className="text-center">
                            <span className="block text-ink font-bold text-sm md:text-base">{product.formula}</span>
                            <span className="block text-ink/70 text-[8px] uppercase tracking-wider">{product.form}</span>
                          </div>
                        </div>
                        {/* Category badge */}
                        <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-saf2">
                          {product.category === 'chemicals' ? 'Chemical' : product.category === 'metal-powders' ? 'Metal Powder' : 'Metal Ingot'}
                        </div>
                      </div>

                      {/* Product Content */}
                      <div className="p-6 md:p-8">
                        <h3 className="font-serif text-xl md:text-2xl text-ink font-semibold mb-3 group-hover:text-saf2 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-base text-tx leading-relaxed line-clamp-2 mb-5">
                          {product.shortDescription}
                        </p>
                        <span className="inline-flex items-center gap-2 text-base font-semibold text-saf2 group-hover:gap-4 transition-all">
                          View Details
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="text-center mt-10">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-sgrad text-ink font-extrabold rounded-full transition-all duration-300 shadow-glow hover:-translate-y-0.5"
              >
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* Why Industries Trust Us Section */}
        <section className="relative lg:sticky lg:top-0 z-10 min-h-screen lg:h-screen flex items-center py-16 lg:py-0 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url('/bg_img.jpg')` 
            }}
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-black/60" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <span className="text-saf text-sm font-bold tracking-[0.2em] uppercase">
                  Why Industries Trust Us
                </span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F7F1E1] leading-tight tracking-tight">
                  Committed to<br />
                  <span className="italic text-transparent bg-clip-text bg-sgrad">Excellence & Sustainability</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-lg">
                  SGSC is committed to delivering high-quality industrial chemicals while
                  reducing environmental impacts and promoting sustainability. By integrating
                  responsible practices into our operations, we shape a future that meets
                  today's needs while ensuring a brighter tomorrow.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-sgrad text-ink font-extrabold rounded-full transition-all duration-300 shadow-glow hover:-translate-y-0.5 hover:scale-[1.02] text-sm uppercase tracking-wider mt-4"
                >
                  Explore Our Values
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right - Capability Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {capabilities.map((cap, index) => (
                  <div
                    key={cap.title}
                    className={`bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl hover:bg-white/20 hover:border-saf/40 transition-all duration-300 group ${
                      index === 0 ? 'animate-fade-in-up' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 bg-sgrad text-ink rounded-xl w-fit mb-3 shadow-glow group-hover:scale-110 transition-transform">
                      {iconMap[cap.icon]}
                    </div>
                    <h3 className="font-serif text-transparent bg-clip-text bg-sgrad font-semibold text-base mb-1.5">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served Section */}
        <section className="relative z-20 bg-white py-20 overflow-hidden border-t border-line">
          <BackgroundPattern />
          <ScrollReveal className="relative max-w-5xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <Kicker center>Industries We Serve</Kicker>
              <h2 className="font-serif text-3xl md:text-4xl text-ink mt-2 tracking-tight">
                Powering India's Core Industries
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {industriesServed.map((industry) => (
                <div
                  key={industry}
                  className="px-5 py-2.5 bg-white border border-line rounded-full text-tx text-sm md:text-base font-medium hover:bg-saf2 hover:text-white hover:border-saf2 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                >
                  {industry}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* CTA Section */}
     {/*   <section className="bg-gray-50 py-16 md:py-20 z-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,163,175,0.06),transparent_60%)]" />
          
          <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
              Raise Your Query
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get in touch to discuss your requirements. Our team is ready to provide 
              technical specifications, competitive pricing, and reliable supply.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-bhagwa to-bhagwa-light text-white font-bold rounded-lg hover:from-bhagwa-light hover:to-gold transition-all duration-300 shadow-lg shadow-bhagwa/25"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-bhagwa/30 text-bhagwa-dark font-bold rounded-lg hover:bg-bhagwa hover:text-white hover:border-bhagwa transition-all duration-300"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </section>
*/}
        {/* CTA Section */}
        <CTASection />

        <Footer />
      </main>
    </div>
  );
}
