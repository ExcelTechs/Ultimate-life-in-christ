import communityWorship from "@/assets/community-worship.jpg";
import pastorJames from "@/assets/pastor-james.jpg";
import pastorGrace from "@/assets/pastor-grace.jpg";
import pastorSamuel from "@/assets/pastor-samuel.jpg";
import pastorEsther from "@/assets/pastor-esther.jpg";
import pastorJohn from "@/assets/pastor-john.jpg";
import pastorMary from "@/assets/pastor-mary.jpg";
import teamBishop from "@/assets/team-bishop.jpg";
import teamSarah from "@/assets/team-sarah.jpg";
import teamDavid from "@/assets/team-david.jpg";
import teamRuth from "@/assets/team-ruth.jpg";

const stats = [
  { value: "50+", label: "Churches Established" },
  { value: "12", label: "Community Projects" },
  { value: "3000+", label: "Lives Transformed" },
  { value: "20+", label: "Years of Ministry" },
];

const team = [
  {
    name: "Yiga Ivan",
    role: "Founder & Senior Pastor",
    bio: "Visionary leader with over 20 years of ministry, pioneering church planting and community transformation across the region.",
    image: teamBishop,
  },
  {
    name: "Joab Sonko",
    role: "Director ",
    bio: "Passionate educator overseeing schools and vocational training programs that equip the next generation with purpose and skill.",
    image: teamSarah,
  },
  {
    name: "Mr. Hope Nelson",
    role: "Fundraising coordinator",
    bio: "Leading sustainable farming initiatives that provide food security and economic empowerment for local families.",
    image: teamDavid,
  },
  {
    name: "Godfrey Tinka",
    role: "Director",
    bio: "Championing the spiritual and social empowerment of women through discipleship, skills training, and community outreach.",
    image: teamRuth,
  },
];

const pastoralTeam = [
  { name: "Roger Kaye", role: "Administration, Worship Director at Life in Christ church", image: pastorJames },
  { name: "Mrs Hannah Itaagi", role: "Children's ministry Head", image: pastorGrace },
  { name: "Pastor Eliyah Kasumba", role: "Evangelism and Missions (External Outreach)", image: pastorSamuel },
  { name: "Pastor Wesley Itaagi ", role: "Youth Pastor and Administration Head", image: pastorEsther },
  { name: "Pastor Joseph Mukisa ", role: "Asst. And Resident Pastor at Life in Christ church", image: pastorJohn },
  { name: "Vivian Mujaasi Kaye", role: "Administration, Worship Director at Life in Christ church", image: pastorMary },
];

export default function AboutSection() {
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

        {/* Meet the Team — Four Cards */}
        <div className="mt-28">
          <div className="text-center mb-12">
            <p className="font-body text-gold tracking-widest uppercase text-sm font-bold mb-3">The People Behind the Vision</p>
            <div className="section-divider" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground max-w-2xl mx-auto">Meet the Team</h2>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              A passionate group of leaders driving transformation and hope across communities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {team.map((member) => (
              <div key={member.name} className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-border bg-card aspect-[3/4]">
                <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black/70 via-black/30 to-transparent pt-16">
                  <h4 className="font-display font-bold text-white text-base sm:text-lg">{member.name}</h4>
                  <p className="font-body text-white/80 text-xs sm:text-sm">{member.role}</p>
                </div>
              </div>
            ))}
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
