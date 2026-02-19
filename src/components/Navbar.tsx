import { useState, useEffect } from "react";
import { Menu, X, Cross } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/", section: null },
  { label: "About", href: "/", section: "#about" },
  { label: "Our Work", href: "/", section: "#work" },
  { label: "Programs", href: "/programs", section: null },
  { label: "Churches", href: "/", section: "#churches" },
  { label: "Contact", href: "/contact", section: null },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string, section: string | null) => {
    setOpen(false);
    if (section) {
      // If already on home, just scroll; otherwise navigate then scroll
      if (location.pathname === "/") {
        document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(href);
        setTimeout(() => {
          document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActive = (href: string, section: string | null) => {
    if (section) return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || location.pathname !== "/" ? "nav-glass shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("/", null)}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-gold flex-shrink-0">
            <Cross className="w-5 h-5 text-navy" />
          </div>
          <div className="text-left">
            <p className="font-display text-gold font-bold text-sm leading-tight">
              THE ULTIMATE LIFE
            </p>
            <p className="font-display text-primary-foreground text-xs leading-tight">
              IN CHRIST MINISTRIES
            </p>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href, link.section)}
              className={`font-body text-sm transition-colors duration-200 tracking-wide ${
                isActive(link.href, link.section) && link.label !== "Home"
                  ? "text-gold font-semibold"
                  : "text-primary-foreground/85 hover:text-gold"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("/contact", null)}
            className="px-5 py-2 bg-gold text-navy font-body font-bold text-sm rounded-full hover:bg-gold-light transition-colors duration-200 shadow-gold"
          >
            Partner With Us
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-gold/20">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href, link.section)}
                className="text-left font-body text-primary-foreground/85 hover:text-gold py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("/contact", null)}
              className="mt-2 px-5 py-2 bg-gold text-navy font-bold text-sm rounded-full"
            >
              Partner With Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
