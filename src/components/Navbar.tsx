import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png";
import PartnerSheet from "@/components/PartnerSheet";

import heroChurch from "@/assets/hero-church.jpg";
import farmingProject from "@/assets/farming-project.jpg";
import progSkills from "@/assets/prog-skills.jpg";
import progLeadership from "@/assets/prog-leadership.jpg";

const navLinks = [
  { label: "Programs", href: "/programs", section: null },
  { label: "About Ministry", href: "/about", section: null },
  { label: "Our Work", href: "/our-work", section: null },
  { label: "Blog", href: "/blog", section: null },
  { label: "Contact", href: "/contact", section: null },
];

const blogDropdownItems = [
  { label: "All Posts", desc: "Browse all ministry stories", href: "/blog" },
  { label: "Church Ministry", desc: "Church planting & growth updates", href: "/blog" },
  { label: "Farming Projects", desc: "Agricultural impact stories", href: "/blog" },
  { label: "Education", desc: "Skills training & school news", href: "/blog" },
  { label: "Leadership", desc: "Leadership development insights", href: "/blog" },
  { label: "Testimony", desc: "Stories of transformation", href: "/blog" },
];

const blogHighlights = [
  { title: "Church Planting Is Transforming Communities", image: heroChurch, href: "/blog/1" },
  { title: "Faith & Farming: Feeding Families", image: farmingProject, href: "/blog/2" },
];

const programDropdownItems = [
  { label: "Skills Training", desc: "Vocational & technical skills", href: "/programs" },
  { label: "Leadership Development", desc: "Raising Kingdom leaders", href: "/programs" },
  { label: "Entrepreneurship", desc: "Business & micro-enterprise", href: "/programs" },
  { label: "Farming Co-operative", desc: "Sustainable agriculture", href: "/programs" },
  { label: "Church Planting", desc: "Establishing new churches", href: "/programs" },
  { label: "Management Training", desc: "Organizational excellence", href: "/programs" },
];

const programHighlights = [
  { title: "Skills Training: Empowering Hands for the Kingdom", image: progSkills, href: "/programs" },
  { title: "Leadership Development: Raising Kingdom Leaders", image: progLeadership, href: "/programs" },
];

interface NavbarProps {
  onPartnerClick?: () => void;
}

function MegaDropdown({
  items,
  highlights,
  onNavigate,
  variant,
  categoryTitle,
  highlightTitle,
  viewAllHref,
  viewAllLabel,
}: {
  items: { label: string; desc: string; href: string }[];
  highlights: { title: string; image: string; href: string }[];
  onNavigate: (href: string) => void;
  variant: "light" | "dark";
  categoryTitle: string;
  highlightTitle: string;
  viewAllHref: string;
  viewAllLabel: string;
}) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
      style={{ width: "640px" }}
    >
      <div
        className="rounded-2xl overflow-hidden shadow-2xl border"
        style={{
          background: variant === "dark"
            ? "hsl(var(--primary) / 0.95)"
            : "hsl(0 0% 100% / 0.98)",
          backdropFilter: "blur(20px)",
          borderColor: variant === "dark"
            ? "hsl(var(--gold) / 0.2)"
            : "hsl(var(--border))",
        }}
      >
        <div className="grid grid-cols-[1fr_1fr] gap-0">
          <div className="p-5">
            <p className="font-body text-xs tracking-widest uppercase font-bold mb-3 text-gold">
              {categoryTitle}
            </p>
            <div className="space-y-0.5">
              {items.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onNavigate(item.href)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors group ${
                    variant === "dark" ? "hover:bg-white/10" : "hover:bg-muted"
                  }`}
                >
                  <p className={`font-display font-semibold text-sm ${variant === "dark" ? "text-white/90" : "text-foreground"}`}>
                    {item.label}
                  </p>
                  <p className={`font-body text-xs ${variant === "dark" ? "text-white/50" : "text-muted-foreground"}`}>
                    {item.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div
            className="p-5"
            style={{
              background: variant === "dark"
                ? "hsl(var(--primary) / 0.5)"
                : "hsl(var(--muted))",
            }}
          >
            <p className="font-body text-xs tracking-widest uppercase font-bold mb-3 text-gold">
              {highlightTitle}
            </p>
            <div className="space-y-3">
              {highlights.map((post) => (
                <button
                  key={post.title}
                  onClick={() => onNavigate(post.href)}
                  className="w-full rounded-xl overflow-hidden relative group cursor-pointer block"
                >
                  <div className="h-24 relative">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3">
                      <p className="font-display font-bold text-white text-xs leading-snug">{post.title}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={() => onNavigate(viewAllHref)}
              className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 rounded-lg font-body text-xs font-bold text-gold hover:underline transition-colors"
            >
              {viewAllLabel} <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar({ onPartnerClick }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [blogHover, setBlogHover] = useState(false);
  const [programsHover, setProgramsHover] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const blogTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const programsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string, section: string | null) => {
    setOpen(false);
    setBlogHover(false);
    setProgramsHover(false);
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
      setPartnerOpen(true);
    }
  };

  const isActive = (href: string, section: string | null) => {
    if (section) return location.pathname === "/";
    return location.pathname === href;
  };

  const onBlogEnter = () => {
    if (blogTimeoutRef.current) clearTimeout(blogTimeoutRef.current);
    setBlogHover(true);
  };
  const onBlogLeave = () => {
    blogTimeoutRef.current = setTimeout(() => setBlogHover(false), 200);
  };

  const onProgramsEnter = () => {
    if (programsTimeoutRef.current) clearTimeout(programsTimeoutRef.current);
    setProgramsHover(true);
  };
  const onProgramsLeave = () => {
    programsTimeoutRef.current = setTimeout(() => setProgramsHover(false), 200);
  };

  const renderNavButton = (link: typeof navLinks[0], variant: "light" | "dark") => {
    const baseClass = variant === "dark"
      ? "font-body text-sm px-4 py-1.5 rounded-full transition-all duration-200 tracking-wide text-white/85 hover:text-white hover:bg-white/15"
      : `font-body text-sm transition-colors duration-200 tracking-wide ${
          isActive(link.href, link.section)
            ? "text-gold font-semibold"
            : "text-foreground/70 hover:text-foreground"
        }`;

    if (link.label === "Blog") {
      return (
        <div key={link.label} className="relative" onMouseEnter={onBlogEnter} onMouseLeave={onBlogLeave}>
          <button onClick={() => handleNav(link.href, link.section)} className={baseClass}>
            {link.label}
          </button>
          {blogHover && (
            <MegaDropdown
              items={blogDropdownItems}
              highlights={blogHighlights}
              onNavigate={(href) => handleNav(href, null)}
              variant={variant}
              categoryTitle="Categories"
              highlightTitle="Featured"
              viewAllHref="/blog"
              viewAllLabel="View All Posts"
            />
          )}
        </div>
      );
    }

    if (link.label === "Programs") {
      return (
        <div key={link.label} className="relative" onMouseEnter={onProgramsEnter} onMouseLeave={onProgramsLeave}>
          <button onClick={() => handleNav(link.href, link.section)} className={baseClass}>
            {link.label}
          </button>
          {programsHover && (
            <MegaDropdown
              items={programDropdownItems}
              highlights={programHighlights}
              onNavigate={(href) => handleNav(href, null)}
              variant={variant}
              categoryTitle="Our Programs"
              highlightTitle="Featured"
              viewAllHref="/programs"
              viewAllLabel="View All Programs"
            />
          )}
        </div>
      );
    }

    return (
      <button key={link.label} onClick={() => handleNav(link.href, link.section)} className={baseClass}>
        {link.label}
      </button>
    );
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {!scrolled ? (
          <div className="px-4 md:px-8 pt-4">
            <div
              className="container mx-auto flex items-center justify-between px-4 py-3 rounded-full"
              style={{
                background: "hsl(var(--primary) / 0.18)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid hsl(var(--gold) / 0.25)",
                boxShadow: "0 4px 32px hsl(var(--primary) / 0.18)",
              }}
            >
              <button onClick={() => handleNav("/", null)} className="flex items-center flex-shrink-0">
                <img src={logoImg} alt="The Ultimate Life In Christ Ministries" className="h-10 w-auto brightness-0 invert" />
              </button>

              <nav className="hidden lg:flex items-center gap-1 px-6 py-2 rounded-full"
                style={{ background: "hsl(0 0% 100% / 0.12)" }}>
                {navLinks.map((link) => renderNavButton(link, "dark"))}
              </nav>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePartner}
                  className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 bg-gold text-white font-body font-bold text-sm rounded-full hover:brightness-110 transition-all duration-200 shadow-gold flex-shrink-0"
                >
                  Partner With Us
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  className="lg:hidden text-white p-2 rounded-full hover:bg-white/15 transition-colors"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {open && (
              <div
                className="lg:hidden mt-2 mx-auto max-w-7xl rounded-2xl overflow-hidden"
                style={{
                  background: "hsl(var(--primary) / 0.92)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid hsl(var(--gold) / 0.2)",
                }}
              >
                <div className="px-6 py-4 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => handleNav(link.href, link.section)}
                      className="text-left font-body text-white/80 hover:text-white py-3 border-b border-white/10 transition-colors text-sm"
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
          </div>
        ) : (
          <div className="bg-white shadow-md transition-all duration-300">
            <div className="container mx-auto px-6 py-3 flex items-center justify-between">
              <button onClick={() => handleNav("/", null)} className="flex items-center flex-shrink-0">
                <img src={logoImg} alt="The Ultimate Life In Christ Ministries" className="h-10 w-auto" />
              </button>

              <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                {navLinks.map((link) => renderNavButton(link, "light"))}
              </nav>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePartner}
                  className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 bg-gold text-white font-body font-bold text-sm rounded-full hover:brightness-110 transition-all duration-200 shadow-gold flex-shrink-0"
                >
                  Partner With Us
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  className="lg:hidden text-foreground p-2 rounded-full hover:bg-muted transition-colors"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {open && (
              <div className="lg:hidden bg-white border-t border-border shadow-lg">
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
          </div>
        )}
      </header>

      <PartnerSheet open={partnerOpen} onClose={() => setPartnerOpen(false)} />
    </>
  );
}
