import farmingImg from "@/assets/farming-project.jpg";
import schoolImg from "@/assets/school-education.jpg";
import { Church, Wheat, GraduationCap, Users, BookOpen, Handshake } from "lucide-react";

const works = [
  {
    icon: Church,
    title: "Establish Churches",
    description:
      "Planting and nurturing local churches across communities, providing spiritual homes and discipleship pathways for believers to grow in their faith.",
    image: null,
    color: "bg-navy",
  },
  {
    icon: Wheat,
    title: "Farming Projects",
    description:
      "Community-generating agricultural projects that build food security, create income for families, and model sustainable stewardship of God's creation.",
    image: farmingImg,
    color: "bg-gold",
  },
  {
    icon: GraduationCap,
    title: "Schools & Education",
    description:
      "Establishing quality schools that nurture the whole child — spiritually, academically, and socially — producing well-rounded leaders for tomorrow.",
    image: schoolImg,
    color: "bg-navy",
  },
  {
    icon: Users,
    title: "Teaching Communities",
    description:
      "Building intentional teaching communities where the Word of God is taught in depth, transforming mindsets and equipping believers for Kingdom impact.",
    image: null,
    color: "bg-gold",
  },
  {
    icon: BookOpen,
    title: "Skills & Leadership Training",
    description:
      "Institutions of learning focused on practical skills training, leadership, entrepreneurship, and management — raising capable and godly leaders.",
    image: null,
    color: "bg-navy",
  },
  {
    icon: Handshake,
    title: "Tributary Churches & Centres",
    description:
      "Coordinating a growing network of affiliated churches and outreach centres, uniting them under a shared vision and providing pastoral support.",
    image: null,
    color: "bg-gold",
  },
];

export default function OurWorkSection() {
  return (
    <section id="work" className="py-24" style={{ background: "hsl(var(--secondary))" }}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-gold tracking-widest uppercase text-sm font-bold mb-3">
            What We Do
          </p>
          <div className="section-divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Pillars of Our Ministry Work
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            We serve communities across spiritual, educational, and economic dimensions — reflecting the holistic Gospel of Christ.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => {
            const Icon = work.icon;
            return (
              <div key={work.title} className="card-ministry overflow-hidden group">
                {/* Image or colored top */}
                {work.image ? (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div
                    className={`h-20 flex items-center justify-center ${work.color === "bg-navy" ? "gradient-navy" : "gradient-gold"}`}
                  >
                    <Icon
                      className={`w-8 h-8 ${work.color === "bg-navy" ? "text-gold" : "text-navy"}`}
                    />
                  </div>
                )}

                <div className="p-7">
                  <div className="flex items-center gap-3 mb-3">
                    {work.image && (
                      <div className="w-10 h-10 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                    )}
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {work.title}
                    </h3>
                  </div>
                  <p className="font-body text-muted-foreground leading-relaxed text-sm">
                    {work.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
