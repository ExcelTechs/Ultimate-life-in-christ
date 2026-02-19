import { useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageScrollStrip from "@/components/ImageScrollStrip";
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
    deliverables: ["Trade Certificates", "Apprenticeships", "Tool Kits", "Business Start Kits"],
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
    deliverables: ["Leadership Certificates", "Mentorship Pairing", "Cohort Networks", "Leadership Retreats"],
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
    deliverables: ["Business Plans", "Startup Grants", "Mentor Matching", "Market Access"],
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
    deliverables: ["Farm Inputs", "Co-op Membership", "Market Access", "Agri-Training Certificates"],
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
    deliverables: ["Church Planting Kits", "Pastoral Training", "Network Membership", "Mission Support"],
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
    deliverables: ["Management Certificates", "Operations Manuals", "System Templates", "Coaching Sessions"],
    image: progManagement,
    imageLeft: true,
    cta: "Enrol in Management Training",
  },
];

export default function Programs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

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
            className={`py-20 ${idx % 2 === 0 ? "bg-background" : "bg-secondary/40"}`}
          >
            <div className="container mx-auto px-6">
              <div
                className={`flex flex-col ${
                  prog.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12 lg:gap-20 items-center`}
              >
                {/* Image collage */}
                <div className="lg:w-1/2 relative flex-shrink-0">
                  <div className="relative">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full rounded-2xl object-cover shadow-lg"
                      style={{ height: "400px" }}
                      loading="lazy"
                    />
                    {/* accent circle */}
                    <div
                      className={`absolute -z-10 w-64 h-64 rounded-full bg-gold/10 ${
                        prog.imageLeft ? "-left-8 -bottom-8" : "-right-8 -bottom-8"
                      }`}
                    />
                    {/* number badge */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full gradient-gold flex items-center justify-center shadow-gold">
                      <span className="font-display font-black text-navy text-xl">{prog.id}</span>
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {prog.offers.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables */}
                  <p className="font-body font-bold text-foreground mb-3">Deliverables</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {prog.deliverables.map((d) => (
                      <span
                        key={d}
                        className="font-body text-xs px-4 py-1.5 rounded-full border border-gold/40 text-gold bg-gold/8 font-semibold"
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => navigate("/contact")}
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
    </div>
  );
}
