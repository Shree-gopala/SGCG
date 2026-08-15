import type { ReactNode } from "react";
import { Link } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { ScrollReveal } from "@/react-app/components/ScrollReveal";
import { BackgroundPattern } from "@/react-app/components/BackgroundPattern";
import Kicker from "@/react-app/components/Kicker";
import useTilt from "@/react-app/hooks/useTilt";
import { PAGE_BANNER_GRADIENT } from "@/react-app/lib/pageBanner";
import { companyInfo } from "@/data/company";
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

function ValueCard({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  const tilt = useTilt(5);
  return (
    <div
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
      className="bg-white p-6 rounded-3xl shadow-soft hover:shadow-lg transition-all duration-300 border border-line flex flex-col justify-between"
    >
      <div>
        <div className="p-3 bg-saf/10 text-saf2 rounded-2xl w-fit mb-4">
          {icon}
        </div>
        <h3 className="font-serif text-xl font-semibold text-ink mb-2">{title}</h3>
        <p className="text-tx text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

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
    <div className="min-h-screen flex flex-col bg-paper2">
      <Header />

      {/* Banner Section */}
      <section
        className="relative pt-32 pb-12 md:pt-40 md:pb-16 border-b border-white/10 overflow-hidden"
        style={{ background: PAGE_BANNER_GRADIENT }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F7F1E1] font-semibold mb-3 animate-fade-in-up tracking-tight">
            About <span className="italic text-transparent bg-clip-text bg-sgrad">Us</span>
          </h1>
          <nav className="flex items-center justify-center gap-2 text-white/60 text-sm animate-fade-in-up animation-delay-200">
            <Link to="/" className="hover:text-saf transition-colors">Home</Link>
            <span>›</span>
            <span className="text-saf font-medium">About Us</span>
          </nav>
        </div>
      </section>

      <main className="flex-1">
        {/* Company Intro Section */}
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
          <BackgroundPattern />
          <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8">
            {/* Story image + founder card */}
            <div className="grid lg:grid-cols-12 gap-8 items-center mb-14">
              <div className="lg:col-span-5 relative">
                <div className="relative before:content-[''] before:absolute before:-inset-x-4 before:-inset-y-4 before:border before:border-saf/50 before:rounded-3xl before:opacity-50 before:-z-10">
                  <img
                    src="/bg_img.jpg"
                    alt="SGSC manufacturing facility"
                    className="w-full h-[340px] md:h-[420px] object-cover rounded-3xl shadow-2xl"
                  />
                </div>
                <div className="hidden sm:block absolute -bottom-6 -right-4 bg-ink text-white rounded-3xl px-8 py-6 text-center shadow-2xl border border-white/10">
                  <span className="block font-serif italic font-semibold text-4xl leading-none text-saf">25+</span>
                  <span className="text-[10px] font-extrabold tracking-widest uppercase text-white/50">Years Strong</span>
                </div>
              </div>
              <div className="lg:col-span-7">
                <Kicker>About SGSC</Kicker>
                <h2 className="font-serif text-3xl md:text-4xl text-ink font-semibold mb-4 leading-tight tracking-tight">
                  From scrap to <span className="italic text-transparent bg-clip-text bg-sgrad">strategic supply</span>
                </h2>
                <p className="text-tx leading-relaxed">
                  Shree Gopala Sanwaria Chemicals (SGSC) is one of India's emerging manufacturers and suppliers of premium non-ferrous metals, zinc-based products, galvanizing chemicals, and industrial chemical solutions. Established in 1998, the company has consistently focused on delivering superior quality products that meet the evolving requirements of modern industries.
                </p>
                <div className="flex items-center gap-4 mt-7 bg-white border border-line rounded-2xl px-6 py-4 shadow-soft max-w-md">
                  <div className="w-14 h-14 rounded-full bg-sgrad text-ink flex items-center justify-center font-serif font-bold text-xl flex-shrink-0">
                    {companyInfo.founder.split(" ").map((n) => n[0]).slice(-2).join("")}
                  </div>
                  <div>
                    <b className="font-serif text-ink text-sm block">{companyInfo.founder}</b>
                    <span className="text-mut text-xs">Founder, {companyInfo.shortName}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-6">
                <p className="text-tx leading-relaxed">
                  Over the last twenty-five years, we have built our business on the principles of quality, integrity, technical excellence, and customer satisfaction. What began as a modest manufacturing initiative has steadily evolved into a trusted industrial enterprise serving customers across India through dependable products, responsive service, and long-term business relationships.
                </p>
                <p className="text-tx leading-relaxed">
                  Headquartered in Hisar, Haryana, our manufacturing operations are equipped with modern production facilities and robust quality systems that enable us to produce a diverse portfolio of non-ferrous metals and industrial chemicals for domestic and industrial applications. Our comprehensive product range includes zinc ingots, zinc powder, zinc chloride, zinc sulphate, zinc oxide, aluminium ingots, brass ingots, copper ingots, galvanizing chemicals, agricultural micronutrients, and several specialty industrial chemicals.
                </p>
                <p className="text-tx leading-relaxed">
                  Every product manufactured by SGSC is designed to deliver consistent performance, superior purity, and dependable quality. Whether serving galvanizing plants, foundries, infrastructure projects, automotive manufacturers, agricultural businesses, chemical processors, or engineering industries, we remain committed to supplying products that meet demanding technical specifications and industry standards.
                </p>
                <p className="text-tx leading-relaxed">
                  Innovation is an integral part of our business philosophy. We continuously evaluate new technologies, improve manufacturing processes, strengthen quality systems, and expand our product portfolio to meet changing market requirements. Our technical expertise, combined with practical industry experience, enables us to provide customised solutions for customers with specialised requirements.
                </p>
                <p className="text-tx leading-relaxed">
                  At SGSC, we firmly believe that sustainable growth can only be achieved through responsible manufacturing. We actively promote efficient resource utilisation, safe manufacturing practices, environmental responsibility, and continuous improvement throughout our operations. Our objective is not merely to manufacture products, but to build long-term partnerships based on trust, transparency, and consistent value creation.
                </p>
                <p className="text-tx leading-relaxed">
                  As we continue our journey, our focus remains unchanged—to deliver world-class products, exceed customer expectations, embrace innovation, and contribute meaningfully to India's industrial and infrastructural development.
                </p>
              </div>

              {/* Sidebar with Quick Stats */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                <div className="bg-paper2 border border-line rounded-3xl p-8 text-ink relative overflow-hidden shadow-soft">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-saf/10 rounded-full blur-2xl" />
                  <h3 className="font-serif text-xl font-semibold mb-2">Shree Gopala Sanwaria Chemicals</h3>
                  <p className="text-saf2 text-sm font-semibold mb-6">Serving Industries Since 1998</p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-saf2 pl-4 py-1">
                      <p className="text-2xl font-bold text-ink">25+</p>
                      <p className="text-mut text-xs uppercase tracking-wider">Years of Excellence</p>
                    </div>
                    <div className="border-l-4 border-saf2 pl-4 py-1">
                      <p className="text-2xl font-bold text-ink">15+</p>
                      <p className="text-mut text-xs uppercase tracking-wider">Key Industries Served</p>
                    </div>
                    <div className="border-l-4 border-saf2 pl-4 py-1">
                      <p className="text-2xl font-bold text-ink">100%</p>
                      <p className="text-mut text-xs uppercase tracking-wider">Quality Assured</p>
                    </div>
                  </div>
                </div>

                <div className="bg-em rounded-3xl p-8 relative overflow-hidden">
                  <Kicker light>Our Vision</Kicker>
                  <p className="font-serif text-lg text-white italic font-semibold leading-relaxed relative">
                    "Building a Stronger India through Manufacturing Excellence, Innovation, Trust, and Sustainable Growth."
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Our Vision Long Text Section */}
        <section className="py-12 md:py-16 bg-paper2 border-y border-line">
          <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="w-full">
              <Kicker>Future-Ready</Kicker>
              <h2 className="font-serif text-3xl md:text-4xl text-ink font-semibold mb-6 tracking-tight">
                Our Vision
              </h2>
              <div className="space-y-4 text-tx leading-relaxed">
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
                <Kicker>Standards</Kicker>
                <h2 className="font-serif text-3xl md:text-4xl text-ink font-semibold mt-2 mb-6 tracking-tight">
                  Quality Assurance
                </h2>
                <div className="space-y-4 text-tx leading-relaxed">
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
                  <p className="font-semibold text-ink">
                    Our objective is simple—to supply products that customers can trust every time they receive a shipment, regardless of order size or destination.
                  </p>
                </div>
              </div>

              {/* Quality Philosophy List */}
              <div className="bg-paper2 rounded-3xl p-6 md:p-8 border border-line">
                <h3 className="font-serif text-xl font-semibold text-ink mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-saf2" />
                  Our Quality Philosophy
                </h3>
                <ul className="space-y-4">
                  {qualityPhilosophy.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <Check className="w-5 h-5 text-saf2 mt-1 flex-shrink-0" />
                      <span className="text-sm text-tx leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Philosophy & R&D Section */}
        <section className="py-12 md:py-16 bg-paper2 border-t border-line">
          <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Manufacturing Philosophy */}
              <div className="bg-white rounded-3xl p-8 border border-line shadow-soft flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-saf/10 rounded-xl flex items-center justify-center mb-6 text-saf2">
                    <Factory className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink font-semibold mb-4">
                    Manufacturing Philosophy
                  </h3>
                  <p className="text-tx leading-relaxed text-sm">
                    At SGSC, manufacturing is driven by precision, discipline, and continuous improvement. Every production process is designed to maximise efficiency while maintaining uncompromising quality standards. We combine industry knowledge with practical manufacturing expertise to deliver products that consistently perform in demanding industrial applications.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-line text-xs text-mut font-semibold uppercase tracking-wider">
                  Reliability • Innovation • Safety • Sustainability • Customer Satisfaction
                </div>
              </div>

              {/* R&D */}
              <div className="bg-white rounded-3xl p-8 border border-line shadow-soft flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-saf/10 rounded-xl flex items-center justify-center mb-6 text-saf2">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-ink font-semibold mb-4">
                    Research & Development
                  </h3>
                  <p className="text-tx leading-relaxed text-sm">
                    Continuous innovation is essential for sustainable growth. Our research and development efforts focus on improving manufacturing efficiency, developing customised product formulations, enhancing product quality, reducing environmental impact, and expanding our product portfolio to meet emerging industry requirements.
                  </p>
                  <p className="text-tx leading-relaxed text-sm mt-3">
                    Through ongoing technical development and process optimisation, we strive to remain competitive while delivering greater value to our customers.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-line text-xs text-mut font-semibold uppercase tracking-wider">
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
              <Kicker center>Our Strengths</Kicker>
              <h2 className="font-serif text-3xl md:text-4xl text-ink font-semibold mt-2 tracking-tight">
                Why Choose SGSC?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-paper2 rounded-2xl border border-line hover:border-saf/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-saf/10 text-saf2 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    {index + 1}
                  </div>
                  <span className="text-sm font-semibold text-ink leading-tight">{strength}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Core Values Section */}
        <section className="py-12 md:py-16 bg-paper2 border-y border-line">
          <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-10">
              <Kicker center>Our Principles</Kicker>
              <h2 className="font-serif text-3xl md:text-4xl text-ink font-semibold mt-2 tracking-tight">
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
                  <ValueCard key={index} icon={icons[index % icons.length]} title={value.title} desc={value.desc} />
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
              <Kicker center>Markets We Serve</Kicker>
              <h2 className="font-serif text-3xl md:text-4xl text-ink mt-2 tracking-tight">
                Industries We Serve
              </h2>
              <p className="text-mut text-sm mt-3 max-w-xl mx-auto">
                Our products are trusted by customers operating across diverse industrial sectors:
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {industriesServed.map((industry) => (
                <div
                  key={industry}
                  className="px-5 py-2.5 bg-white border border-line rounded-full text-tx text-sm font-medium hover:bg-saf2 hover:text-white hover:border-saf2 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                >
                  {industry}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* CTA Section */}
        <section className="bg-[#141a2e] py-10">
          <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl text-white font-semibold font-serif">
                Need Industrial Chemical Solutions?
              </h2>
              <p className="text-white/60 text-sm">
                Get in touch with our experts today.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-sgrad text-ink px-6 py-3 rounded-full font-extrabold transition-all duration-300 shadow-glow hover:-translate-y-0.5"
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
