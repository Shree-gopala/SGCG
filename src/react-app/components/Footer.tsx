import { Link } from "react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { products } from "@/data/products";
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
    <footer className="bg-[#FFFBF5] text-white relative z-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Company Info - Left */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-5">
              <img 
                src={LOGO_URL} 
                alt="SGSC Logo" 
                className="h-16 w-auto p-1"
              />
            {/*  <div> 
                <h3 className="font-serif text-xl font-bold text-white">SGSC</h3>
                <p className="text-xs text-gray-400">Shree Gopala Sanwaria Chemicals</p>
              </div>*/}
            </div>
            <p className="text-sm text-gray-900 leading-relaxed">
              Supplying and manufacturing high-quality zinc chemicals, metal powders, 
              and industrial raw materials, driving innovation and excellence in 
              the chemical industry since 1998.
            </p>
          </div>

          {/* Key Products - Center */}
          <div className="lg:col-span-5">
            <h4 className="font-bold text-orange-400 text-base mb-4">Key Products</h4>
            <p className="text-sm text-gray-900 leading-relaxed">
              {keyProducts.join(" | ")}
            </p>

            {/* Quick Links */}
            <div className="mt-8">
              <h4 className="font-bold text-orange-400 text-base mb-4">Quick Links</h4>
              <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
                {quickLinks.map((link, index) => (
                  <span key={link.path} className="flex items-center">
                    <Link 
                      to={link.path} 
                      className="text-sm text-gray-900 hover:text-orange-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                    {index < quickLinks.length - 1 && (
                      <span className="text-gray-600 mx-2">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Company Brochure - Right */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-orange-400 text-base mb-4">Company Brochure</h4>
            <a
              href="/SGSC_Product_Brochure.pdf"
              download="SGSC_Product_Brochure.pdf"
              className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-6 py-2.5 rounded transition-all duration-300 text-sm"
            >
              Download Now
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200/60 my-10" />

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {/* Phone */}
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-gradient-to-r from-bhagwa to-bhagwa-light flex-shrink-0">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <div>
              <h5 className="font-semibold text-orange-400 text-sm mb-1">Phone</h5>
              <p className="text-sm text-gray-900 whitespace-nowrap">+91 99996 65479</p>
              <p className="text-sm text-gray-900 whitespace-nowrap">+91 93105 43479</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-gradient-to-r from-bhagwa to-bhagwa-light flex-shrink-0">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <div>
              <h5 className="font-semibold text-orange-400 text-sm mb-1">Email</h5>
              <p className="text-sm text-gray-900 break-all">shreegopalasanwariachemicals@gmail.com</p>
            </div>
          </div>

          {/* Corporate Office Address */}
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-gradient-to-r from-bhagwa to-bhagwa-light flex-shrink-0">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div>
              <h5 className="font-semibold text-orange-400 text-sm mb-1">Corporate Office</h5>
              <p className="text-sm text-gray-900 leading-relaxed">
                4th Floor, G-4, Pushkar Enclave,<br />
                Paschim Vihar,<br />
                New Delhi – 110063
              </p>
            </div>
          </div>

          {/* Factory Unit 1 */}
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-gradient-to-r from-bhagwa to-bhagwa-light flex-shrink-0">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div>
              <h5 className="font-semibold text-orange-400 text-sm mb-1">Factory Unit – 1</h5>
              <p className="text-sm text-gray-900 leading-relaxed">
                Near Jindal Supreme India Limited,<br />
                Delhi Road, Hisar,<br />
                Haryana – 125001
              </p>
            </div>
          </div>

          {/* Factory Unit 2 */}
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-gradient-to-r from-bhagwa to-bhagwa-light flex-shrink-0">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div>
              <h5 className="font-semibold text-orange-400 text-sm mb-1">Factory Unit – 2</h5>
              <p className="text-sm text-gray-900 leading-relaxed">
                Village Kharar, Delhi Road,<br />
                Tehsil Hisar, District Hisar,<br />
                Haryana – 125001, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-xs text-gray-600">
              Copyright © {new Date().getFullYear()} Shree Gopala Sanwaria Chemicals. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500">
              Made By <span className="text-orange-600 font-semibold">AHD Web Services</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
