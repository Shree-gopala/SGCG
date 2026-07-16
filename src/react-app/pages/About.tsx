import { Link } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { ScrollReveal } from "@/react-app/components/ScrollReveal";
import { BackgroundPattern } from "@/react-app/components/BackgroundPattern";
import { 
  Check, 
  Award, 
  ShieldCheck, 
  Leaf, 
  Users, 
  Lightbulb, 
  Factory, 
  ArrowRight, 
  Target, 
  Eye, 
  FileText,
  BadgeAlert,
  BrainCircuit,
  Compass,
  Briefcase
} from "lucide-react";

export default function AboutPage() {
  const coreValues = [
    {
      title: "Integrity",
      desc: "We conduct every aspect of our business with honesty, transparency, and ethical responsibility."
    },
    {
      title: "Quality",
      desc: "We never compromise on quality and continuously strive for excellence in every product we manufacture."
    },
    {
      title: "Innovation",
      desc: "We embrace technology, research, and continuous improvement to remain ahead of changing industry requirements."
    },
    {
      title: "Customer Commitment",
      desc: "Our customers are at the centre of everything we do, and their success drives our own."
    },
    {
      title: "Sustainability",
      desc: "We believe responsible manufacturing is essential for long-term industrial growth and environmental protection."
    },
    {
      title: "Excellence",
      desc: "We continuously raise our standards to deliver products and services that exceed customer expectations."
    }
  ];

  const qualityPhilosophy = [
    "Careful procurement of quality-approved raw materials",
    "Controlled manufacturing under standard operating procedures",
    "Batch-wise laboratory testing and verification",
    "Strict monitoring of chemical composition and physical properties",
    "Product traceability throughout the manufacturing process",
    "Certificates of Analysis (COA), Technical Data Sheets (TDS), and Material Safety Data Sheets (MSDS) wherever applicable",
    "Safe packaging that preserves product integrity during transportation"
  ];

  const strengths = [
    "25+ Years of Manufacturing Excellence",
    "Wide Portfolio of Non-Ferrous Metals & Industrial Chemicals",
    "State-of-the-Art Manufacturing Practices",
    "Stringent Quality Control Systems",
    "Technical Expertise & Industry Knowledge",
    "PAN India Supply Network",
    "Reliable Delivery Commitments",
    "Competitive Pricing",
    "Customer-Centric Approach",
    "Sustainable Manufacturing Practices",
    "Complete Technical Documentation (COA, TDS & MSDS)",
    "Customized Product Solutions"
  ];

  const industriesServed = [
    "Hot-Dip Galvanizing",
    "Steel & Infrastructure",
    "Foundries & Metallurgy",
    "Automotive & Auto Components",
    "Engineering Industries",
    "Agriculture & Fertilisers",
    "Water & Wastewater Treatment",
    "Paints & Protective Coatings",
    "Rubber & Plastics",
    "Pharmaceuticals",
    "Textile Processing",
    "Chemical Manufacturing",
    "Electrical & Electronics",
    "Renewable Energy",
    "Construction Materials"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Banner Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-r from-orange-50 via-white to-orange-100/40 border-b border-orange-100/50 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold mb-3 animate-fade-in-up">
            About Us
          </h1>
          <nav className="flex items-center justify-center gap-2 text-gray-500 text-sm animate-fade-in-up animation-delay-200">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-orange-600 font-medium">About Us</span>
          </nav>
        </div>
      </section>

      <main className="flex-1">
        {/* Company Intro Section */}
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
          <BackgroundPattern />
          <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <span className="text-orange-500 text-sm font-bold tracking-wider uppercase">
                    About SGSC
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold mt-2 mb-4 leading-tight">
                    Manufacturing Excellence Since 1998
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Shree Gopala Sanwaria Chemicals (SGSC) is one of India’s emerging manufacturers and suppliers of premium non-ferrous metals, zinc-based products, galvanizing chemicals, and industrial chemical solutions. Established in 1998, the company has consistently focused on delivering superior quality products that meet the evolving requirements of modern industries.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Over the last twenty-five years, we have built our business on the principles of quality, integrity, technical excellence, and customer satisfaction. What began as a modest manufacturing initiative has steadily evolved into a trusted industrial enterprise serving customers across India through dependable products, responsive service, and long-term business relationships.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Headquartered in Hisar, Haryana, our manufacturing operations are equipped with modern production facilities and robust quality systems that enable us to produce a diverse portfolio of non-ferrous metals and industrial chemicals for domestic and industrial applications. Our comprehensive product range includes zinc ingots, zinc powder, zinc chloride, zinc sulphate, zinc oxide, aluminium ingots, brass ingots, copper ingots, galvanizing chemicals, agricultural micronutrients, and several specialty industrial chemicals.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Every product manufactured by SGSC is designed to deliver consistent performance, superior purity, and dependable quality. Whether serving galvanizing plants, foundries, infrastructure projects, automotive manufacturers, agricultural businesses, chemical processors, or engineering industries, we remain committed to supplying products that meet demanding technical specifications and industry standards.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Innovation is an integral part of our business philosophy. We continuously evaluate new technologies, improve manufacturing processes, strengthen quality systems, and expand our product portfolio to meet changing market requirements. Our technical expertise, combined with practical industry experience, enables us to provide customised solutions for customers with specialised requirements.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At SGSC, we firmly believe that sustainable growth can only be achieved through responsible manufacturing. We actively promote efficient resource utilisation, safe manufacturing practices, environmental responsibility, and continuous improvement throughout our operations. Our objective is not merely to manufacture products, but to build long-term partnerships based on trust, transparency, and consistent value creation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As we continue our journey, our focus remains unchanged—to deliver world-class products, exceed customer expectations, embrace innovation, and contribute meaningfully to India’s industrial and infrastructural development.
                </p>
              </div>

              {/* Sidebar with Quick Stats */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                <div className="bg-gradient-to-br from-orange-50/60 to-orange-100/30 border border-orange-100/50 rounded-3xl p-8 text-gray-900 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
                  <h3 className="font-serif text-xl font-bold mb-2">Shree Gopala Sanwaria Chemicals</h3>
                  <p className="text-orange-600 text-sm font-semibold mb-6">Serving Industries Since 1998</p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-500 pl-4 py-1">
                      <p className="text-2xl font-bold text-gray-900">25+</p>
                      <p className="text-gray-600 text-xs uppercase tracking-wider">Years of Excellence</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4 py-1">
                      <p className="text-2xl font-bold text-gray-900">15+</p>
                      <p className="text-gray-600 text-xs uppercase tracking-wider">Key Industries Served</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4 py-1">
                      <p className="text-2xl font-bold text-gray-900">100%</p>
                      <p className="text-gray-600 text-xs uppercase tracking-wider">Quality Assured</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50/50 rounded-3xl p-8 border border-orange-100/50">
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-wider block mb-2">Our Vision</span>
                  <p className="font-serif text-lg text-gray-800 italic font-semibold leading-relaxed">
                    “Building a Stronger India through Manufacturing Excellence, Innovation, Trust, and Sustainable Growth.”
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Our Vision Long Text Section */}
        <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-100">
          <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="w-full">
              <span className="text-orange-500 text-sm font-bold tracking-wider uppercase block mb-3">
                Future-Ready
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold mb-6">
                Our Vision
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At Shree Gopala Sanwaria Chemicals, our vision extends beyond manufacturing products—we aspire to contribute to the growth and self-reliance of India.
                </p>
                <p>
                  We envision building a globally respected Indian industrial group that drives the nation’s progress through innovation, uncompromising quality, and ethical business practices. By strengthening India’s manufacturing capabilities, reducing dependence on imports, and creating world-class products, we aim to play our part in the vision of an Atmanirbhar Bharat.
                </p>
                <p>
                  While our roots are firmly established in non-ferrous metals and industrial chemicals, our ambition is to continuously diversify into new industries, advanced materials, sustainable technologies, and future-ready manufacturing sectors. Through strategic expansion, technological excellence, and continuous innovation, we seek to create new opportunities, generate employment, and contribute meaningfully to India’s economic development.
                </p>
                <p>
                  Our commitment is to earn the trust of customers through quality, integrity, and reliability while building a legacy that future generations can be proud of. We believe that every product we manufacture should not only strengthen industries but also strengthen the nation.
                </p>
                <p>
                  With a long-term vision, we strive to become one of India’s most trusted and diversified industrial enterprises—recognized globally for excellence, innovation, sustainability, and an unwavering commitment to nation-building.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Quality Assurance Section */}
        <section className="py-12 md:py-16 bg-white">
          <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-orange-500 text-sm font-bold tracking-wider uppercase">
                  Standards
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold mt-2 mb-6">
                  Quality Assurance
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Quality is the cornerstone of every product manufactured at Shree Gopala Sanwaria Chemicals.
                  </p>
                  <p>
                    Our commitment to quality begins with the careful selection of premium raw materials and continues through every stage of manufacturing, inspection, packaging, and dispatch. Every production batch undergoes stringent quality evaluation to ensure compliance with customer specifications and applicable national and international standards.
                  </p>
                  <p>
                    We have established comprehensive quality management practices that focus on consistency, traceability, process control, and continuous improvement. Modern testing procedures and experienced technical personnel ensure that our products consistently deliver the purity, chemical composition, and performance expected by our customers.
                  </p>
                  <p>
                    Beyond product quality, we continuously invest in process optimisation, employee training, manufacturing technology, and customer feedback systems to further enhance operational excellence.
                  </p>
                  <p className="font-semibold text-gray-900">
                    Our objective is simple—to supply products that customers can trust every time they receive a shipment, regardless of order size or destination.
                  </p>
                </div>
              </div>

              {/* Quality Philosophy List */}
              <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-orange-500" />
                  Our Quality Philosophy
                </h3>
                <ul className="space-y-4">
                  {qualityPhilosophy.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <Check className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Philosophy & R&D Section */}
        <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-100">
          <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Manufacturing Philosophy */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-500">
                    <Factory className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-gray-900 font-bold mb-4">
                    Manufacturing Philosophy
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    At SGSC, manufacturing is driven by precision, discipline, and continuous improvement. Every production process is designed to maximise efficiency while maintaining uncompromising quality standards. We combine industry knowledge with practical manufacturing expertise to deliver products that consistently perform in demanding industrial applications.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  Reliability • Innovation • Safety • Sustainability • Customer Satisfaction
                </div>
              </div>

              {/* R&D */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-500">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-gray-900 font-bold mb-4">
                    Research & Development
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Continuous innovation is essential for sustainable growth. Our research and development efforts focus on improving manufacturing efficiency, developing customised product formulations, enhancing product quality, reducing environmental impact, and expanding our product portfolio to meet emerging industry requirements.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm mt-3">
                    Through ongoing technical development and process optimisation, we strive to remain competitive while delivering greater value to our customers.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  Process Optimisation • Customized Formulations • Green Chemistry
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Why Choose SGSC section */}
        <section className="py-12 md:py-16 bg-white">
          <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <span className="text-orange-500 text-sm font-bold tracking-wider uppercase">
                Our Strengths
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold mt-2">
                Why Choose SGSC?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {strengths.map((strength, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    {index + 1}
                  </div>
                  <span className="text-sm font-semibold text-gray-800 leading-tight">{strength}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Core Values Section */}
        <section className="py-12 md:py-16 bg-orange-50/20 border-y border-orange-100/40">
          <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <span className="text-orange-600 text-sm font-bold tracking-wider uppercase">
                Our Principles
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold mt-2">
                Our Core Values
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => {
                const icons = [
                  <Compass className="w-6 h-6" />,
                  <ShieldCheck className="w-6 h-6" />,
                  <Lightbulb className="w-6 h-6" />,
                  <Users className="w-6 h-6" />,
                  <Leaf className="w-6 h-6" />,
                  <Award className="w-6 h-6" />
                ];
                
                return (
                  <div key={index} className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col justify-between">
                    <div>
                      <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl w-fit mb-4">
                        {icons[index % icons.length]}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </section>

        {/* Industries Served Section */}
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
          <BackgroundPattern />
          <ScrollReveal className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <span className="text-orange-500 text-sm font-bold tracking-wider uppercase">
                Markets We Serve
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-800 mt-2">
                Industries We Serve
              </h2>
              <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
                Our products are trusted by customers operating across diverse industrial sectors:
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {industriesServed.map((industry) => (
                <div
                  key={industry}
                  className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-medium hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                >
                  {industry}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-50/50 via-orange-50 to-orange-100/20 border-t border-orange-100/40 py-10">
          <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl text-gray-900 font-bold">
                Need Industrial Chemical Solutions?
              </h2>
              <p className="text-gray-600 text-sm">
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
