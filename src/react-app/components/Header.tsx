import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "/logo.png";
const LOGO_URL = "/logo.png";
const GOD_IMAGE_URL = "/god_image.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact Us", path: "/contact" },
];

declare global {
  interface Window {
    changeLanguageByGoogle: (lang: string) => void;
  }
}
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Language Switcher - Top Right */}
      <div className="fixed top-2 right-4 z-[60] flex gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md border border-gray-100">
        <button 
          onClick={() => window.changeLanguageByGoogle('en')} 
          className="text-[10px] md:text-xs font-bold text-gray-700 hover:text-[#FF9933] transition-colors"
        >
          ENGLISH
        </button>
        <span className="text-gray-300">|</span>
        <button 
          onClick={() => window.changeLanguageByGoogle('hi')} 
          className="text-[10px] md:text-xs font-bold text-gray-700 hover:text-[#FF9933] transition-colors"
        >
          हिन्दी
        </button>
      </div>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "pt-2 px-2 md:px-4 lg:px-8" : "pt-4 px-4 md:px-8 lg:px-16"
    }`}>
      {/* Floating pill-shaped header */}
      <div className="max-w-7xl mx-auto">
        <div className={`relative bg-white rounded-3xl shadow-xl px-5 md:px-10 py-2 transition-all duration-300 ${
          isScrolled ? "shadow-2xl" : ""
        }`}>
          {/* Main header content */}
          <div className="flex items-center justify-between">
            {/* Logo - Left with curved container */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative bg-navy full p-1 -ml-2">
                <img 
                  src={LOGO_URL} 
                  alt="SGSC Logo" 
                  className="h-8 w-24 md:h-14 md:w-48 w-auto hidden md:block object-contain "
                />
                <img 
      src="/mobile-logo.png" // Yahan apne mobile logo ka path ya variable dalein
      alt="Mobile Logo" 
      className="block md:hidden h-10 w-20 object-contain"
    />
              </div>
              
            </Link>

            {/* God Image - Center */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-0.5 rounded-full border border-gold/50" />
                <div className="relative w-10 h-10 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-gold bg-white">
                  <img 
                    src={GOD_IMAGE_URL} 
                    alt="Shree Radha Krishna" 
                    className="w-full h-full  object-cover object-center scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Navigation - Right */}
            <nav className="hidden md:flex items-center">
              <ul className="flex items-center gap-4 lg:gap-6">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`relative text-m font-semibold tracking-wide transition-all duration-300 ${
                        location.pathname === link.path
                          ? "text-[#FF9933]"
                          : "text-black-700 hover:text-[#FF9933]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-2 bg-white rounded-2xl shadow-lg overflow-hidden">
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 ${
                      location.pathname === link.path
                        ? "text-white bg-[#FF9933]"
                        : "text-gray-700 hover:text-[#FF9933] hover:bg-orange-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
    </>
  );

}
