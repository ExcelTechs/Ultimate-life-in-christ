import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/", section: null },
  { label: "About", href: "/", section: "#about" },
  { label: "Our Work", href: "/", section: "#work" },
  { label: "Programs", href: "/programs", section: null },
  { label: "Churches", href: "/", section: "#churches" },
  { label: "Contact", href: "/contact", section: null },
];

interface NavbarProps {
  onPartnerClick?: () => void;
}

export default function Navbar({ onPartnerClick }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string, section: string | null) => {
    setOpen(false);
    if (section) {
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

  const handlePartner = () => {
    setOpen(false);
    if (onPartnerClick) {
      onPartnerClick();
    } else {
      navigate("/contact");
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
        scrolled ? "bg-white shadow-md py-3" : "bg-white/95 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav("/", null)} className="flex items-center flex-shrink-0">
          <img src={logoImg} alt="The Ultimate Life In Christ Ministries" className="h-11 w-auto" />
        </button>

        {/* Desktop Nav — centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href, link.section)}
              className={`font-body text-sm transition-colors duration-200 tracking-wide ${
                isActive(link.href, link.section) && link.label !== "Home"
                  ? "text-gold font-semibold"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Partner CTA */}
        <button
          onClick={handlePartner}
          className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 bg-gold text-white font-body font-bold text-sm rounded-full hover:brightness-110 transition-all duration-200 shadow-gold flex-shrink-0"
        >
          Partner With Us
          <ArrowUpRight className="w-4 h-4" />
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href, link.section)}
                className="text-left font-body text-foreground/70 hover:text-foreground py-3 border-b border-border/50 transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={handlePartner}
              className="mt-3 inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-gold text-white font-bold text-sm rounded-full"
            >
              Partner With Us <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

