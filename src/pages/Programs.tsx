import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, ArrowUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageScrollStrip from "@/components/ImageScrollStrip";
import PartnerSheet from "@/components/PartnerSheet";
import progSkills from "@/assets/prog-skills.jpg";
import progLeadership from "@/assets/prog-leadership.jpg";
import progEntrepreneurship from "@/assets/prog-entrepreneurship.jpg";
import progFarming from "@/assets/prog-farming.jpg";
import progChurch from "@/assets/prog-church.jpg";
import progManagement from "@/assets/prog-management.jpg";

const programs = [
  {
    id: "01",
    category: "VOCATIONAL TRAINING",
    title: "Skills Training Institute",
    subtitle: "Empowering Hands for the Kingdom",
    description:
      "Hands-on vocational and technical skills training empowering youth and adults with practical abilities for sustainable livelihoods. Our institute offers certified trade programs that equip graduates to serve their communities.",
    body: "From carpentry and tailoring to electrical work and plumbing, we train individuals who can generate income, run businesses, and lift their families out of poverty — all grounded in Kingdom values.",
    offers: [
      "Carpentry & Woodworking",
      "Electrical Installation",
      "Tailoring & Design",
      "Plumbing & Construction",
      "ICT & Digital Skills",
      "Beauty & Cosmetology",
    ],
    image: progSkills,
    imageLeft: false,
    cta: "Enrol in Skills Training",
  },
  {
    id: "02",
    category: "LEADERSHIP DEVELOPMENT",
    title: "Leadership Development Program",
    subtitle: "Raising Kingdom Leaders",
    description:
      "Equipping the next generation of Kingdom leaders with servant leadership principles, character development, and governance skills. We believe leadership is a calling, not just a position.",
    body: "Our Leadership Development Program combines biblical foundations with modern leadership frameworks. Participants learn to lead with integrity, manage teams, resolve conflicts, and build lasting legacies.",
    offers: [
      "Servant Leadership Principles",
      "Team Building & Conflict Resolution",
      "Public Speaking & Communication",
      "Strategic Planning",
      "Character & Ethics Formation",
      "Community Governance",
    ],
    image: progLeadership,
    imageLeft: true,
    cta: "Join the Leadership Program",
  },
  {
    id: "03",
    category: "ENTREPRENEURSHIP",
    title: "Entrepreneurship Academy",
    subtitle: "Building Kingdom Businesses",
    description:
      "Teaching God's people to build businesses with Kingdom values — creating wealth that blesses families and communities. We believe prosperity is a tool for Kingdom advancement.",
    body: "Our Entrepreneurship Academy walks participants through ideation, business planning, financing, and launch. Graduates leave with a functioning business plan and access to a support network of mentors and investors.",
    offers: [
      "Business Idea Validation",
      "Business Plan Development",
      "Financial Literacy & Bookkeeping",
      "Sales & Marketing",
      "Access to Micro-Finance",
      "Pitching & Investor Relations",
    ],
    image: progEntrepreneurship,
    imageLeft: false,
    cta: "Start Your Business Journey",
  },
  {
    id: "04",
    category: "AGRICULTURE & FOOD SECURITY",
    title: "Community Farming Initiative",
    subtitle: "Feeding Communities, Building Futures",
    description:
      "Collective agricultural projects providing food security, teaching stewardship, and generating shared community income through cooperative farming and agribusiness development.",
    body: "We establish community farms, train farmers in modern agricultural techniques, and connect them to markets. Our co-operative model ensures profits are shared equitably and reinvested back into the community.",
    offers: [
      "Crop Production Training",
      "Irrigation & Water Management",
      "Agribusiness & Value Addition",
      "Co-operative Formation",
      "Post-harvest Handling",
      "Market Linkages",
    ],
    image: progFarming,
    imageLeft: true,
    cta: "Join a Farming Co-operative",
  },
  {
    id: "05",
    category: "CHURCH GROWTH",
    title: "Church Planting & Growth",
    subtitle: "Multiplying the Kingdom Across Regions",
    description:
      "Systematic planting and developing of local churches with solid doctrinal foundations and vibrant discipleship ecosystems. Every community deserves a living, thriving local church.",
    body: "We identify, train, and deploy church planters to new areas, providing them with resources, mentorship, and a support network. Planted churches are connected to our network of tributary churches and centres for ongoing support.",
    offers: [
      "Church Planter Identification & Training",
      "Doctrinal Foundation Courses",
      "Discipleship Systems",
      "Tributary Church Coordination",
      "Pastoral Care & Mentorship",
      "Community Outreach Strategies",
    ],
    image: progChurch,
    imageLeft: false,
    cta: "Partner in Church Planting",
  },
  {
    id: "06",
    category: "MANAGEMENT & ADMINISTRATION",
    title: "Management & Administration Training",
    subtitle: "Excellence in Kingdom Operations",
    description:
      "Training leaders in organizational management, administration, and governance to run effective ministries, schools, farms, and enterprises with Kingdom excellence.",
    body: "From financial management and HR to project management and strategic planning, this program produces competent administrators who can operate any ministry or Kingdom business with professionalism and integrity.",
    offers: [
      "Organizational Management",
      "Human Resource Management",
      "Financial Management & Budgeting",
      "Project Management",
      "Records & Documentation",
      "Governance & Compliance",
    ],
    image: progManagement,
    imageLeft: true,
    cta: "Enrol in Management Training",
  },
];

/* ── Mobile image slider component ── */
function ProgramImageSlider({ prog }: { prog: typeof programs[0] }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const images = [prog.image, prog.image, prog.image]; // three panels, same image with diff crop
  const crops = ["object-top", "object-center", "object-bottom"];

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    touchStartX.current = null;
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg select-none" style={{ height: "280px" }}>
      {/* Number badge */}
      <div className="absolute top-4 left-4 z-10 w-12 h-12 rounded-full gradient-gold flex items-center justify-center shadow-gold border-2 border-background">
        <span className="font-display font-black text-navy text-base">{prog.id}</span>
      </div>

      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full h-full flex-shrink-0">
            <img src={img} alt={prog.title} className={`w-full h-full object-cover ${crops[i]}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center shadow hover:bg-background transition-colors"
      >
        <ChevronLeft className="w-4 h-4 text-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center shadow hover:bg-background transition-colors"
      >
        <ChevronRight className="w-4 h-4 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${i === current ? "bg-gold w-5" : "bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* PartnerSheet is now imported from @/components/PartnerSheet */

export default function Programs() {
  const navigate = useNavigate();
  const [partnerOpen, setPartnerOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  // Back to top visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onPartnerClick={() => setPartnerOpen(true)} />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-navy">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, hsl(42 88% 50% / 0.3) 0%, transparent 60%), radial-gradient(circle at 80% 20%, hsl(42 88% 50% / 0.2) 0%, transparent 50%)",
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <p className="font-body text-gold tracking-widest uppercase text-sm font-bold mb-4">
            OUR PROGRAMS
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-black text-primary-foreground leading-tight max-w-4xl">
            Institutions &amp; Programs{" "}
            <span className="gold-shimmer">We Run</span>
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
            Each program is crafted to develop whole people — spiritually grounded, practically skilled, and community-focused. From skills training to church planting, we build lives that transform nations.
          </p>
        </div>
      </section>

      {/* Programs — alternating layout */}
      <div className="py-8">
        {programs.map((prog, idx) => (
          <section
            key={prog.id}
            className={`py-16 md:py-20 ${idx % 2 === 0 ? "bg-background" : "bg-secondary/40"}`}
          >
            <div className="container mx-auto px-6">
              <div
                className={`flex flex-col ${
                  prog.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10 lg:gap-20 items-center`}
              >
                {/* Image — slider on mobile/tablet, collage on desktop */}
                <div className="w-full lg:w-1/2 flex-shrink-0">
                  {/* Mobile/Tablet slider */}
                  <div className="lg:hidden">
                    <ProgramImageSlider prog={prog} />
                  </div>

                  {/* Desktop collage */}
                  <div className="hidden lg:block relative select-none" style={{ minHeight: "460px", height: "460px" }}>
                    {/* Accent circles */}
                    <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-gold/15 -z-10" />
                    <div className="absolute -bottom-4 -right-4 w-14 h-14 rounded-full bg-gold/10 -z-10" />

                    {/* Large background image — top right */}
                    <div className="absolute top-0 right-0 w-[72%] h-[78%] rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>

                    {/* Bottom-left overlapping image */}
                    <div className="absolute bottom-0 left-0 w-[50%] h-[52%] rounded-2xl overflow-hidden shadow-xl border-4 border-background">
                      <img
                        src={prog.image}
                        alt={`${prog.title} — activity`}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>

                    {/* Bottom-right overlapping image */}
                    <div className="absolute bottom-0 right-[4%] w-[40%] h-[42%] rounded-2xl overflow-hidden shadow-xl border-4 border-background">
                      <img
                        src={prog.image}
                        alt={`${prog.title} — community`}
                        className="w-full h-full object-cover object-bottom"
                        loading="lazy"
                      />
                    </div>

                    {/* Number badge */}
                    <div className="absolute top-3 left-[26%] z-10 w-14 h-14 rounded-full gradient-gold flex items-center justify-center shadow-gold border-2 border-background">
                      <span className="font-display font-black text-navy text-lg">{prog.id}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <p className="font-body text-gold tracking-widest uppercase text-xs font-bold mb-2">
                    {prog.category}
                  </p>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2 leading-tight">
                    {prog.title}
                  </h2>
                  <p className="font-display text-xl text-gold/80 italic mb-4">{prog.subtitle}</p>
                  <p className="font-body text-muted-foreground leading-relaxed mb-3">
                    {prog.description}
                  </p>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {prog.body}
                  </p>

                  {/* What We Offer */}
                  <p className="font-body font-bold text-foreground mb-3">What We Offer</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                    {prog.offers.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setPartnerOpen(true)}
                    className="inline-flex items-center gap-2 px-7 py-3 gradient-gold text-navy font-body font-bold rounded-full shadow-gold hover:brightness-110 transition-all duration-200"
                  >
                    {prog.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <ImageScrollStrip />
      <Footer />

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-6 z-40 w-12 h-12 rounded-full gradient-gold shadow-gold flex items-center justify-center transition-all duration-300 hover:brightness-110 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 text-navy" />
      </button>

      {/* Partner Sheet */}
      <PartnerSheet open={partnerOpen} onClose={() => setPartnerOpen(false)} />
    </div>
  );
}
