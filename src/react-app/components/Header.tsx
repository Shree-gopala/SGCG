import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import LogoMark from "./LogoMark";
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "pt-2 px-2 md:px-4 lg:px-8" : "pt-4 px-4 md:px-8 lg:px-16"
    }`}>
      {/* Floating glass pill header */}
      <div className="max-w-7xl mx-auto">
        <div className={`relative rounded-3xl px-5 md:px-10 py-3 border border-white/10 backdrop-blur-xl transition-all duration-300 shadow-soft ${
          isScrolled ? "bg-ink/95 shadow-2xl" : "bg-ink/80"
        }`}>
          {/* Main header content */}
          <div className="flex items-center justify-between">
            {/* Logo - Left with curved container */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <LogoMark src={LOGO_URL} className="h-9 md:h-11 hidden md:block" />
              <img
                src="/mobile-logo.png"
                alt="SGSC"
                className="block md:hidden h-8 w-auto object-contain"
              />
              <span className="hidden md:block font-serif font-semibold text-[#F5EEDC] text-[13px] leading-[1.2] tracking-[.2px]">
                Shree Gopala<br />Sanwaria Chemicals
              </span>
            </Link>

            {/* God Image - Center */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-0.5 rounded-full border border-saf/50" />
                <div className="relative w-10 h-10 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-saf bg-white shadow-[0_0_0_3px_rgba(18,20,16,.9),0_0_26px_rgba(227,169,60,.5)]">
                  <img
                    src={GOD_IMAGE_URL}
                    alt="Shree Radha Krishna"
                    className="w-full h-full object-cover object-center scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Navigation & Switcher - Right */}
            <div className="hidden nav:flex items-center gap-5 lg:gap-7">
              <nav>
                <ul className="flex items-center gap-4 lg:gap-6">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={`relative text-xs font-extrabold uppercase tracking-widest transition-all duration-300 pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-sgrad after:transition-all after:duration-300 ${
                          location.pathname === link.path
                            ? "text-saf after:w-full"
                            : "text-[#CFC8B4] hover:text-saf after:w-0 hover:after:w-full"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="h-4 w-px bg-white/15" />
              <div className="flex gap-2 text-xs font-extrabold text-[#9AA] bg-white/5 border border-white/20 rounded-full px-3 py-1.5">
                <button
                  onClick={() => window.changeLanguageByGoogle('en')}
                  className="hover:text-saf transition-colors"
                >
                  EN
                </button>
                <span className="text-white/20">|</span>
                <button
                  onClick={() => window.changeLanguageByGoogle('hi')}
                  className="hover:text-saf transition-colors"
                >
                  हिं
                </button>
              </div>
            </div>

            {/* Mobile Actions - Right */}
            <div className="flex nav:hidden items-center gap-3">
              <div className="flex gap-1.5 text-[10px] font-extrabold text-[#9AA] bg-white/5 border border-white/20 rounded-full px-2.5 py-1">
                <button
                  onClick={() => window.changeLanguageByGoogle('en')}
                  className="hover:text-saf transition-colors"
                >
                  EN
                </button>
                <span className="text-white/20">|</span>
                <button
                  onClick={() => window.changeLanguageByGoogle('hi')}
                  className="hover:text-saf transition-colors"
                >
                  हिं
                </button>
              </div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#F5EEDC] p-1.5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="nav:hidden mt-2 bg-ink/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-soft overflow-hidden">
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-6 py-3 text-sm font-extrabold uppercase tracking-wide transition-all duration-200 ${
                      location.pathname === link.path
                        ? "text-ink bg-sgrad"
                        : "text-[#CFC8B4] hover:text-saf hover:bg-white/5"
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
