import { Link } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { companyInfo } from "@/data/company";
import { Check, Award, ShieldCheck, Leaf, Users, Lightbulb, Factory, ArrowRight, Target, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Banner Section */}
      <section className="relative pt-32 pb-12 md:pt-48 md:pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1600')" }}
        />
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-3">
            About Us
          </h1>
          <nav className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-orange-400">About Us</span>
          </nav>
        </div>
      </section>

      <main className="flex-1">
        {/* Company Intro Section */}
        <section class="py-12 md:py-16 bg-white"><div class="max-w-4xl mx-auto px-4 md:px-8 text-center flex flex-col items-center"><div><span class="text-orange-400 text-sm font-bold tracking-wider uppercase">About SGSC</span><h2 class="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-900 font-bold mt-2 mb-6 leading-tight">We Are Here To Deliver Quality Chemicals For Your Industry</h2><p class="text-gray-900 leading-relaxed mb-6">With over 25 years of expertise, Shree Gopala Sanwaria Chemicals delivers high-quality zinc-based chemicals, precision metal powders, and quality metal ingots to industries across India and beyond. Built on the vision of transforming metal scrap into valuable industrial solutions.</p><p class="text-gray-900 leading-relaxed mb-8">Founded by <span class="font-semibold">Mr. Sandeep Bansal</span> in 1998, our company has grown from a small processing unit to a trusted industry name. Our state-of-the-art manufacturing facility in Hisar is equipped with modern processing equipment and dedicated quality control laboratories.</p></div></div></section>

        {/* Mission & Vision Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Mission Card */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="font-serif text-2xl text-gray-900 font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To manufacture and supply high-quality zinc chemicals, metal powders, and ingots that 
                  meet the exacting standards of modern industry. We are committed to sustainable 
                  production practices that minimize environmental impact while delivering value for our customers.
                </p>
              </div>
              
              {/* Vision Card */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="font-serif text-2xl text-gray-900 font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become India's most trusted manufacturer of zinc-based industrial chemicals, 
                  recognized for our unwavering commitment to quality, innovation, and customer 
                  satisfaction. We aim to expand our reach globally while maintaining the personal 
                  service that sets us apart.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
       {/* <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <span className="text-orange-500 text-sm font-bold tracking-wider uppercase">
              Leadership
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold mt-2 mb-10">
              Meet Our Founder
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-1">Mr. Sandeep Bansal</h3>
                <p className="text-gray-500 mb-6">Founder & Managing Director</p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With over {companyInfo.yearsOfExperience} years of hands-on experience in zinc metal 
                  processing and chemical manufacturing, Mr. Bansal founded Shree Gopala Sanwaria 
                  Chemicals with a vision to transform metal scrap into valuable industrial solutions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  His deep technical expertise and commitment to quality have been the driving force 
                  behind the company's growth and reputation for excellence. Under his leadership, 
                  SGSC has become a trusted name in the industry.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600" 
                  alt="Mr. Sandeep Bansal" 
                  className="rounded-2xl shadow-xl w-full h-80 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>*/}

        {/* Core Values Section */}
        <section className="py-12 md:py-16 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <span className="text-orange-400 text-sm font-bold tracking-wider uppercase">
                Our Principles
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mt-2">
                Core Values
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  icon: <ShieldCheck className="w-6 h-6" />, 
                  title: "Quality First", 
                  desc: "Every product undergoes rigorous quality testing before dispatch, ensuring consistent purity and performance." 
                },
                { 
                  icon: <Award className="w-6 h-6" />, 
                  title: "Trust & Reliability", 
                  desc: "We build long-term partnerships through transparent dealings, on-time delivery, and honest communication." 
                },
                { 
                  icon: <Leaf className="w-6 h-6" />, 
                  title: "Sustainability", 
                  desc: "Our recycling-based production route transforms waste zinc scrap into quality products, reducing environmental impact." 
                },
                { 
                  icon: <Lightbulb className="w-6 h-6" />, 
                  title: "Continuous Improvement", 
                  desc: "We constantly invest in technology, processes, and training to deliver better products and services." 
                },
                { 
                  icon: <Users className="w-6 h-6" />, 
                  title: "Customer Focus", 
                  desc: "Understanding and meeting customer requirements is at the heart of everything we do." 
                },
                { 
                  icon: <Factory className="w-6 h-6" />, 
                  title: "Industry Experience", 
                  desc: "25+ years of expertise means we understand the unique needs of rubber, ceramic, pharmaceutical, and other industries." 
                },
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-lg w-fit mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "25+", label: "Years Experience" },
                { value: "10+", label: "Product Lines" },
                { value: "500+", label: "Happy Clients" },
                { value: "10+", label: "Industries Served" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <p className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{stat.value}</p>
                  <p className="text-gray-600 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 py-10">
          <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl text-white font-bold">
                Need Industrial Chemical Solutions?
              </h2>
              <p className="text-gray-400 text-sm">
                Get in touch with our experts today.
              </p>
            </div>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
