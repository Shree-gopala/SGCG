import { Link } from "react-router";
import { products } from "@/data/products";
import LogoMark from "./LogoMark";
import logo from "/logo.png";
const LOGO_URL = "/logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  // Get product names for the key products section — limit to 8 to prevent layout overflow
  const keyProducts = products.slice(0, 8).map(p => p.name);

  return (
    <footer className="bg-ink text-white relative z-20 overflow-hidden">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-2 left-0 right-0 text-center font-serif italic font-semibold leading-none text-[clamp(70px,14vw,190px)] text-white/[.05] whitespace-nowrap overflow-hidden"
      >
        Shree Gopala
      </span>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Company Info - Left */}
          <div className="lg:col-span-4 min-w-0">
            <div className="flex items-center gap-3 mb-5">
              <LogoMark src={LOGO_URL} className="h-12" />
              <p className="font-serif font-semibold text-[#F5EEDC] text-base leading-[1.2] tracking-[.2px]">
                Shree Gopala<br />Sanwaria Chemicals
              </p>
            </div>
            <p className="text-xs text-[#CFC8B4] leading-relaxed">
              Supplying and manufacturing high-quality zinc chemicals, metal powders,
              and industrial raw materials, driving innovation and excellence in
              the chemical industry since 1998.
            </p>
          </div>

          {/* Key Products */}
          <div className="lg:col-span-4">
            <h4 className="font-serif italic font-semibold text-[#FFC24B] text-lg mb-3">Key Products</h4>
            <p className="text-xs text-[#CFC8B4] leading-relaxed">
              {keyProducts.join(" | ")}
            </p>
            <p className="mt-2.5">
              <Link to="/products" className="text-[#FFC24B] font-extrabold text-xs hover:underline">
                View all 20 products →
              </Link>
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif italic font-semibold text-[#FFC24B] text-lg mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-xs text-[#CFC8B4] hover:text-saf transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Brochure - Right */}
          <div className="lg:col-span-2">
            <h4 className="font-serif italic font-semibold text-[#FFC24B] text-lg mb-3">Company Brochure</h4>
            <p className="text-xs text-[#CFC8B4] leading-relaxed mb-3.5">
              Download our complete product catalogue (PDF).
            </p>
            <a
              href="/SGSC_Product_Brochure.pdf"
              download="SGSC_Product_Brochure.pdf"
              className="inline-flex items-center gap-2 bg-sgrad text-[#231303] font-extrabold px-5 py-2 rounded-full transition-all duration-300 text-xs hover:-translate-y-0.5 shadow-glow"
            >
              Download Now
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
          {/* Phone */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-[rgba(255,196,75,.08)] border border-white/10 flex-shrink-0 flex items-center justify-center text-base">
              📞
            </div>
            <div>
              <h5 className="font-serif italic font-semibold text-[#FFC24B] text-sm mb-1">Phone</h5>
              <p className="text-xs text-[#CFC8B4] whitespace-nowrap">+91 99996 65479</p>
              <p className="text-xs text-[#CFC8B4] whitespace-nowrap">+91 93105 43479</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3 lg:col-span-2">
            <div className="w-9 h-9 rounded-full bg-[rgba(255,196,75,.08)] border border-white/10 flex-shrink-0 flex items-center justify-center text-base">
              ✉️
            </div>
            <div className="min-w-0">
              <h5 className="font-serif italic font-semibold text-[#FFC24B] text-sm mb-1">Email</h5>
              <p className="text-xs text-[#CFC8B4] leading-normal space-y-0.5">
                <a href="mailto:ghanshyam.kumar.sgsc@gmail.com" className="block whitespace-nowrap hover:text-saf transition-colors">ghanshyam.kumar.sgsc@gmail.com</a>
                <a href="mailto:info@shreegopalagroup.com" className="block whitespace-nowrap hover:text-saf transition-colors">info@shreegopalagroup.com</a>
                <a href="mailto:shreegopalasanwariachemicals@gmail.com" className="block whitespace-nowrap hover:text-saf transition-colors">shreegopalasanwariachemicals@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Corporate Office Address */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-[rgba(255,196,75,.08)] border border-white/10 flex-shrink-0 flex items-center justify-center text-base">
              🏢
            </div>
            <div>
              <h5 className="font-serif italic font-semibold text-[#FFC24B] text-sm mb-1">Corporate Office</h5>
              <p className="text-xs text-[#CFC8B4] leading-relaxed">
                4th Floor, G-4, Pushkar Enclave,<br />
                Paschim Vihar,<br />
                New Delhi – 110063
              </p>
            </div>
          </div>

          {/* Factory Unit 1 */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-[rgba(255,196,75,.08)] border border-white/10 flex-shrink-0 flex items-center justify-center text-base">
              🏭
            </div>
            <div>
              <h5 className="font-serif italic font-semibold text-[#FFC24B] text-sm mb-1">Factory Unit – 1</h5>
              <p className="text-xs text-[#CFC8B4] leading-relaxed">
                Near Jindal Supreme India Limited,<br />
                Delhi Road, Hisar,<br />
                Haryana – 125001
              </p>
            </div>
          </div>

          {/* Factory Unit 2 */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-[rgba(255,196,75,.08)] border border-white/10 flex-shrink-0 flex items-center justify-center text-base">
              🏭
            </div>
            <div>
              <h5 className="font-serif italic font-semibold text-[#FFC24B] text-sm mb-1">Factory Unit – 2</h5>
              <p className="text-xs text-[#CFC8B4] leading-relaxed">
                Murabba No. 136, Khasra Nos. 1/1,<br />
                2/1, 2/2 & 1/2, Tehsil Hisar,<br />
                District Hisar, Haryana – 125044, India
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 relative">
          <p className="text-xs text-[#8f9686]">
            Copyright © {new Date().getFullYear()} Shree Gopala Sanwaria Chemicals. All Rights Reserved.
          </p>
          <p className="text-xs text-[#8f9686] flex items-center gap-2">
            <span>www.shreegopalagroup.com</span>
            <span className="text-white/20">|</span>
            <span>Made By <span className="text-saf font-semibold">AHD Web Services</span></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
