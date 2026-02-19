import communityWorship from "@/assets/community-worship.jpg";

const stats = [
  { value: "50+", label: "Churches Established" },
  { value: "12", label: "Community Projects" },
  { value: "3000+", label: "Lives Transformed" },
  { value: "20+", label: "Years of Ministry" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-gold tracking-widest uppercase text-sm font-bold mb-3">
            Who We Are
          </p>
          <div className="section-divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            A Ministry Built on Faith, Purpose & Community
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_hsl(220_60%_10%/0.2)]">
              <img
                src={communityWorship}
                alt="Community worship gathering"
                className="w-full h-[440px] object-cover"
              />
            </div>
            {/* Badge overlay */}
            <div className="absolute -bottom-6 -right-6 gradient-navy rounded-2xl px-6 py-5 shadow-lg">
              <p className="font-display text-gold text-3xl font-black">20+</p>
              <p className="font-body text-primary-foreground/80 text-sm">Years of Service</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Our Vision & Mission
            </h3>
            <p className="font-body text-muted-foreground text-lg mb-6 leading-relaxed">
              <strong className="text-foreground">The Ultimate Life In Christ Ministries</strong> is a Spirit-led organization committed to the holistic transformation of individuals and communities through the Gospel of Jesus Christ.
            </p>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              We establish local churches, coordinate tributary churches and centres, and generate life-changing community projects — from farming enterprises to schools and vocational training institutions — all aimed at empowering people to live out the fullness of life in Christ.
            </p>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              Our mandate covers skills training, leadership development, entrepreneurship, and management — equipping the next generation to lead with excellence and integrity.
            </p>

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="font-display text-gold italic text-sm">
                "I am the way, the truth, and the life" — John 14:6
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 card-ministry border-gold/10"
            >
              <p className="font-display text-4xl font-black text-gold mb-2">{stat.value}</p>
              <p className="font-body text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
