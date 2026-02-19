const programs = [
  {
    number: "01",
    title: "Skills Training Institute",
    description:
      "Hands-on vocational and technical skills training empowering youth and adults with practical abilities for sustainable livelihoods.",
    tags: ["Vocational Skills", "Artisanship", "Trade Certification"],
  },
  {
    number: "02",
    title: "Leadership Development Program",
    description:
      "Equipping the next generation of Kingdom leaders with servant leadership principles, character development, and governance skills.",
    tags: ["Leadership", "Character Formation", "Governance"],
  },
  {
    number: "03",
    title: "Entrepreneurship Academy",
    description:
      "Teaching God's people to build businesses with Kingdom values — creating wealth that blesses families and communities.",
    tags: ["Business Development", "Mentorship", "Startup Support"],
  },
  {
    number: "04",
    title: "Community Farming Initiative",
    description:
      "Collective agricultural projects providing food security, teaching stewardship, and generating shared community income.",
    tags: ["Agribusiness", "Food Security", "Co-operatives"],
  },
  {
    number: "05",
    title: "Church Planting & Growth",
    description:
      "Systematic planting and developing of local churches with solid doctrinal foundations and vibrant discipleship ecosystems.",
    tags: ["Church Planting", "Discipleship", "Evangelism"],
  },
  {
    number: "06",
    title: "Management & Administration Training",
    description:
      "Training leaders in organizational management, administration, and governance to run effective ministries and enterprises.",
    tags: ["Management", "Administration", "Organizational Growth"],
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-gold tracking-widest uppercase text-sm font-bold mb-3">
            Our Programs
          </p>
          <div className="section-divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Institutions & Programs We Run
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Each program is crafted to develop whole people — spiritually grounded, practically skilled, and community-focused.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.number}
              className="flex gap-6 p-7 card-ministry group"
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <span className="font-display text-5xl font-black text-gold/20 group-hover:text-gold/40 transition-colors duration-300">
                  {prog.number}
                </span>
              </div>
              {/* Content */}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {prog.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  {prog.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {prog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs px-3 py-1 rounded-full border border-gold/30 text-gold bg-gold/5 font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
