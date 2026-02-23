import { useState } from "react";
import communityWorship from "@/assets/community-worship.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import pastorJames from "@/assets/pastor-james.jpg";
import pastorGrace from "@/assets/pastor-grace.jpg";
import pastorSamuel from "@/assets/pastor-samuel.jpg";
import pastorEsther from "@/assets/pastor-esther.jpg";
import pastorJohn from "@/assets/pastor-john.jpg";
import pastorMary from "@/assets/pastor-mary.jpg";

const stats = [
  { value: "50+", label: "Churches Established" },
  { value: "12", label: "Community Projects" },
  { value: "3000+", label: "Lives Transformed" },
  { value: "20+", label: "Years of Ministry" },
];

const team = [
  {
    name: "Bishop Emmanuel",
    role: "Founder & Senior Pastor",
    bio: "Visionary leader with over 20 years of ministry, pioneering church planting and community transformation across the region.",
    initials: "BE",
  },
  {
    name: "Pastor Sarah Moyo",
    role: "Director of Education",
    bio: "Passionate educator overseeing schools and vocational training programs that equip the next generation with purpose and skill.",
    initials: "SM",
  },
  {
    name: "Elder David Chirwa",
    role: "Head of Agricultural Projects",
    bio: "Leading sustainable farming initiatives that provide food security and economic empowerment for local families.",
    initials: "DC",
  },
  {
    name: "Minister Ruth Banda",
    role: "Women's Ministry Leader",
    bio: "Championing the spiritual and social empowerment of women through discipleship, skills training, and community outreach.",
    initials: "RB",
  },
];

const pastoralTeam = [
  { name: "Pastor James Phiri", role: "Senior Pastor", image: pastorJames },
  { name: "Pastor Grace Tembo", role: "Worship Director", image: pastorGrace },
  { name: "Pastor Samuel Mwale", role: "Youth Ministry", image: pastorSamuel },
  { name: "Pastor Esther Zulu", role: "Women's Pastor", image: pastorEsther },
  { name: "Pastor John Nkomo", role: "Outreach Coordinator", image: pastorJohn },
  { name: "Pastor Mary Lungu", role: "Children's Ministry", image: pastorMary },
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + team.length) % team.length);
  const next = () => setActiveIndex((i) => (i + 1) % team.length);

  const getCardIndex = (offset: number) => (activeIndex + offset + team.length) % team.length;

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-gold tracking-widest uppercase text-sm font-bold mb-3">Who We Are</p>
          <div className="section-divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            A Ministry Built on Faith, Purpose & Community
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_hsl(220_60%_10%/0.2)]">
              <img src={communityWorship} alt="Community worship gathering" className="w-full h-[440px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 gradient-navy rounded-2xl px-6 py-5 shadow-lg">
              <p className="font-display text-gold text-3xl font-black">20+</p>
              <p className="font-body text-primary-foreground/80 text-sm">Years of Service</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision & Mission</h3>
            <p className="font-body text-muted-foreground text-lg mb-6 leading-relaxed">
              <strong className="text-foreground">The Ultimate Life In Christ Ministries</strong> is a Spirit-led organization committed to the holistic transformation of individuals and communities through the Gospel of Jesus Christ.
            </p>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              We establish local churches, coordinate tributary churches and centres, and generate life-changing community projects — from farming enterprises to schools and vocational training institutions.
            </p>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              Our mandate covers skills training, leadership development, entrepreneurship, and management — equipping the next generation to lead with excellence and integrity.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="font-display text-gold italic text-sm">"I am the way, the truth, and the life" — John 14:6</span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-8 card-ministry border-gold/10">
              <p className="font-display text-4xl font-black text-gold mb-2">{stat.value}</p>
              <p className="font-body text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Our Team — Carousel */}
        <div className="mt-28">
          <div className="text-center mb-14">
            <p className="font-body text-gold tracking-widest uppercase text-sm font-bold mb-3">The People Behind the Vision</p>
            <div className="section-divider" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground max-w-2xl mx-auto">Meet Our Team</h2>
          </div>

          {/* 3D Carousel */}
          <div className="relative py-8">
            <div className="flex items-center justify-center gap-4 md:gap-0 h-[420px] md:h-[460px] relative">
              <div
                className="absolute left-[5%] md:left-[12%] w-56 md:w-64 transition-all duration-500 ease-in-out cursor-pointer z-10 opacity-60 scale-[0.85]"
                style={{ transform: "perspective(1000px) rotateY(15deg) scale(0.85)" }}
                onClick={prev}
              >
                <TeamCard member={team[getCardIndex(-1)]} compact />
              </div>
              <div className="relative z-20 w-72 md:w-80 transition-all duration-500 ease-in-out">
                <TeamCard member={team[activeIndex]} />
              </div>
              <div
                className="absolute right-[5%] md:right-[12%] w-56 md:w-64 transition-all duration-500 ease-in-out cursor-pointer z-10 opacity-60 scale-[0.85]"
                style={{ transform: "perspective(1000px) rotateY(-15deg) scale(0.85)" }}
                onClick={next}
              >
                <TeamCard member={team[getCardIndex(1)]} compact />
              </div>
            </div>

            <button
              onClick={prev}
              className="absolute left-0 md:left-[4%] top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 md:right-[4%] top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center gap-2 mt-8">
              {team.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "bg-gold w-8" : "bg-border hover:bg-gold/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Pastoral Team — Staggered Grid */}
        <div className="mt-28">
          <div className="text-center mb-14">
            <p className="font-body text-gold tracking-widest uppercase text-sm font-bold mb-3">Serving With Purpose</p>
            <div className="section-divider" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
              Life In Christ Pastoral Team
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
              Our pastoral team is the heartbeat of the ministry — men and women called and anointed to shepherd, 
              disciple, and walk alongside every believer on their journey of faith. Together, they lead with 
              compassion, integrity, and an unwavering commitment to the Gospel.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
            {pastoralTeam.map((member) => (
              <div
                key={member.name}
                className="group transition-all duration-500 hover:-translate-y-2"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border relative aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-12">
                    <h4 className="font-display font-bold text-white text-sm leading-tight">{member.name}</h4>
                    <p className="font-body text-white/75 text-xs">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, compact }: { member: typeof team[0]; compact?: boolean }) {
  return (
    <div className={`rounded-2xl overflow-hidden shadow-lg border border-border bg-card ${compact ? "" : "shadow-xl"}`}>
      <div
        className={`flex items-center justify-center ${compact ? "h-44" : "h-56"}`}
        style={{ background: "linear-gradient(135deg, hsl(285 65% 22%), hsl(330 100% 42%))" }}
      >
        <div className={`rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 ${compact ? "w-20 h-20" : "w-28 h-28"}`}>
          <span className={`font-display font-black text-white ${compact ? "text-2xl" : "text-4xl"}`}>
            {member.initials}
          </span>
        </div>
      </div>
      <div className={`text-center ${compact ? "p-4" : "p-6"}`}>
        <h4 className={`font-display font-bold text-foreground ${compact ? "text-base" : "text-xl"} mb-1`}>
          {member.name}
        </h4>
        <p className="font-body text-gold text-xs tracking-widest uppercase font-bold mb-3">{member.role}</p>
        {!compact && (
          <>
            <div className="h-px w-10 mx-auto bg-border mb-3" />
            <p className="font-body text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
          </>
        )}
      </div>
    </div>
  );
}
