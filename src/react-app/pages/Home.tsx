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
import { stats, capabilities, industriesServed } from "@/data/company";
import { products } from "@/data/products";

const iconMap: Record<string, React.ReactNode> = {
  factory: <Factory className="w-5 h-5" />,
  microscope: <Microscope className="w-5 h-5" />,
  leaf: <Leaf className="w-5 h-5" />,
  truck: <Truck className="w-5 h-5" />,
};

const productCategories = [
  { id: "all", label: "All Products" },
  { id: "zinc-chemicals", label: "Zinc Chemicals" },
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
          {/* Decorative background pattern */}
          {/*<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-bhagwa via-gold to-bhagwa animate-gradient" />*/}
          
          {/* Floating decorative shapes */}
          <div className="absolute top-20 right-[10%] w-20 h-20 bg-gradient-to-br from-gray-200/40 to-gray-300/30 rounded-full blur-xl animate-float" />
          <div className="absolute top-40 left-[5%] w-16 h-16 bg-gradient-to-br from-gray-300/30 to-gray-200/20 rounded-2xl rotate-12 blur-lg animate-float-delayed" />
          <div className="absolute bottom-32 right-[15%] w-24 h-24 bg-gradient-to-br from-gray-200/20 to-transparent rounded-full blur-2xl animate-float-slow" />
          <div className="absolute bottom-20 left-[12%] w-12 h-12 border-2 border-gray-300/30 rounded-full animate-float" />
          <div className="absolute top-1/2 right-[8%] w-8 h-8 bg-gray-300/30 rounded-lg rotate-45 animate-float-slow" />
          
          <div className="relative max-w-5xl mx-auto px-4 md:px-8">
            {/* Section badge */}
            {/*<div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-200">
                <span className="w-2 h-2 bg-bhagwa rounded-full animate-pulse" />
                <span className="text-bhagwa-dark text-sm font-semibold tracking-wider uppercase">Since 1998</span>
              </span>
            </div>*/}
            
            {/* Centered About Text */}
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-10 leading-tight">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-bhagwa to-gold">25 Years</span> of Quality,<br className="hidden md:block" /> Trust & Innovation
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
               From a small metal recycling unit in 1998, <span className="text-bhagwa-dark font-semibold">Shree Gopala Sanwaria Chemicals</span> has grown into a full-scale manufacturer supplying critical chemicals and metals to India's core industries.
            <br className="hidden md:block" /><br className="hidden md:block" />Founded by Mr. Sandeep Bansal, our company was established with a pioneering vision: to convert metal scrap into valuable, high-purity industrial products — promoting recycling and sustainable manufacturing at a time when few in the sector were doing so.
              </p>
            </div>

            {/* Stats with enhanced styling */}
          {/*  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="relative group text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 card-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="font-serif text-4xl md:text-5xl stat-value font-bold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-sm uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>*/}

            {/* About Button */}
            <div className="text-center">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-bhagwa to-bhagwa-light text-white font-bold rounded-full hover:from-bhagwa-light hover:to-gold transition-all duration-300 text-sm uppercase tracking-wider shadow-lg shadow-bhagwa/30 hover:shadow-bhagwa/50 hover:scale-105"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Trust Badges / Certifications Marquee */}
      {/*  <section className="bg-gray-50 py-8 overflow-hidden border-y border-gray-100">
          <div className="flex items-center">
            <div className="flex animate-marquee whitespace-nowrap">
              {[
                "ISO 9001:2015 Certified",
                "25+ Years of Excellence",
                "100+ Industry Partners",
                "Eco-Friendly Manufacturing",
                "In-House Quality Lab",
                "Pan-India Delivery",
                "Custom Formulations",
                "Technical Support",
                "ISO 9001:2015 Certified",
                "25+ Years of Excellence",
                "100+ Industry Partners",
                "Eco-Friendly Manufacturing",
                "In-House Quality Lab",
                "Pan-India Delivery",
                "Custom Formulations",
                "Technical Support",
              ].map((badge, index) => (
                <span 
                  key={index}
                  className="mx-8 flex items-center gap-3 text-gray-600 font-medium"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-bhagwa to-gold rounded-full" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>*/}

        {/* Featured Products Section with Slider */}
        <section className="bg-[#FFFBF5] py-20 md:py-28 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(156,163,175,0.08),transparent_50%)]" />
          <div className="absolute top-20 left-[5%] w-32 h-32 bg-gray-200/30 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 right-[8%] w-40 h-40 bg-gray-300/20 rounded-full blur-3xl animate-float" />
          
          <div className="relative max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              {/*<span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-4">
                <span className="w-2 h-2 bg-bhagwa rounded-full" />
                <span className="text-bhagwa text-sm font-bold tracking-wider uppercase">
                  Our Products
                </span>
              </span>*/}
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-4 mb-5">
                Premium Industrial<br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bhagwa via-gold to-bhagwa-dark">Chemicals & Metals</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-10">
                From high-purity zinc chemicals to precision metal powders and cast ingots, 
                our product portfolio covers the full spectrum of industrial needs.
              </p>
              
              {/* Product Tabs - Enhanced */}
              <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar">
                <div className="inline-flex gap-2 md:gap-3 p-1.5 md:p-2 bg-white rounded-full shadow-lg border border-gray-100 min-w-max">
                  {productCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                        activeTab === cat.id
                          ? "bg-gradient-to-r from-bhagwa to-bhagwa-light text-white shadow-lg shadow-bhagwa/25"
                          : "text-gray-600 hover:text-bhagwa hover:bg-bhagwa/5"
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
              <button className="product-prev hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-xl items-center justify-center text-bhagwa hover:bg-bhagwa hover:text-white transition-all duration-300 border border-gray-100">
                <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
              <button className="product-next hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-xl items-center justify-center text-bhagwa hover:bg-bhagwa hover:text-white transition-all duration-300 border border-gray-100">
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
                {filteredProducts.map((product, index) => {
                  const gradients = [
                    "from-bhagwa via-bhagwa-light to-gold",
                    "from-gold via-bhagwa-light to-bhagwa",
                    "from-bhagwa-dark via-bhagwa to-bhagwa-light",
                    "from-gold-light via-gold to-bhagwa",
                  ];
                  const gradient = gradients[index % gradients.length];
                  
                  return (
                    <SwiperSlide key={product.id}>
                      <Link
                        to={`/products/${product.id}`}
                        className="group block bg-white rounded-3xl border border-gray-100 overflow-hidden card-lift h-full"
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
                            <div className="w-full h-full bg-gradient-to-br from-cream to-cream-dark" />
                          )}
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          {/* Formula badge */}
                          <div className={`absolute bottom-4 left-4 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center   group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                            <div className="text-center">
                              <span className="block text-white font-bold text-sm md:text-base">{product.formula}</span>
                              <span className="block text-white/80 text-[8px] uppercase tracking-wider">{product.form}</span>
                            </div>
                          </div>
                          {/* Category badge */}
                          <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-bhagwa-dark">
                            {product.category === 'zinc-chemicals' ? 'Zinc Chemical' : product.category === 'metal-powders' ? 'Metal Powder' : 'Metal Ingot'}
                          </div>
                        </div>

                        {/* Product Content */}
                        <div className="p-6 md:p-8">
                          <h3 className="font-serif text-xl md:text-2xl text-gray-800 font-semibold mb-3 group-hover:text-bhagwa transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-base text-gray-600 leading-relaxed line-clamp-2 mb-5">
                            {product.shortDescription}
                          </p>
                          <span className="inline-flex items-center gap-2 text-base font-semibold text-bhagwa group-hover:gap-4 transition-all">
                            View Details
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div className="text-center mt-10">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-bhagwa to-bhagwa-light text-white font-bold rounded-full hover:bg-bhagwa transition-colors shadow-lg"
              >
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      {/* Why Industries Trust Us Section */}
      <section className="sticky top-0 z-10 h-screen flex items-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url('/bg_img.jpg')` 
            }}
          />
          {/* Dark Gradient Overlay */}
           <div className="absolute inset-0 bg-black/60" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <span className="text-bhagwa-light text-sm font-bold tracking-[0.2em] uppercase">
                  Why Industries Trust Us
                </span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                  Committed to<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bhagwa to-gold">Excellence & Sustainability</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-lg">
                  SGSC is committed to delivering high-quality industrial chemicals while 
                  reducing environmental impacts and promoting sustainability. By integrating 
                  responsible practices into our operations, we shape a future that meets 
                  today's needs while ensuring a brighter tomorrow.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-bhagwa to-bhagwa-light text-white font-bold rounded-full hover:from-gold hover:to-bhagwa-light transition-all duration-300 shadow-xl hover:shadow-bhagwa/40 hover:scale-105 text-sm uppercase tracking-wider mt-4"
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
                    className={`bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl hover:bg-white/20 hover:border-gold/40 transition-all duration-300 group ${
                      index === 0 ? 'animate-fade-in-up' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-3 bg-gradient-to-r from-bhagwa to-bhagwa-light text-white rounded-xl w-fit mb-3 shadow-lg shadow-navy/30 group-hover:scale-110 transition-transform">
                      {iconMap[cap.icon]}
                    </div>
                    <h3 className="font-serif text-transparent bg-clip-text bg-gradient-to-r from-bhagwa to-gold font-semibold text-base mb-1.5">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-white/100 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served Section */}
        <section className="relative z-20 bg-white py-20 ">
          {/* Subtle decorative elements */}
          <div className="max-w-5xl mx-auto px-4 md:px-8" />
          
          <div className="relative max-w-5xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <span className="text-bhagwa text-sm font-bold tracking-wider uppercase">
                Industries We Serve
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mt-2">
                Powering India's Core Industries
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {industriesServed.map((industry) => (
                <div
                  key={industry}
                  className="px-5 py-2.5 bg-gray-100 border border-gray-200 rounded-full text-gray-700 text-sm md:text-base font-medium hover:bg-bhagwa hover:text-white hover:border-bhagwa transition-all duration-300 cursor-default"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
     {/*   <section className="bg-gray-50 py-16 md:py-20 z-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,163,175,0.06),transparent_60%)]" />
          
          <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mb-4">
              Ready to Partner with Us?
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
