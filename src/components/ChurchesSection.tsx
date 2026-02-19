import { MapPin } from "lucide-react";

const churches = [
  {
    name: "ULCM Central Church",
    location: "Headquarters",
    description: "The mother church and administrative center from which all ministry arms are coordinated.",
    type: "Main Church",
  },
  {
    name: "Grace Assembly Centre",
    location: "Eastern Region",
    description: "A thriving tributary church serving surrounding communities with strong outreach and discipleship programs.",
    type: "Tributary Church",
  },
  {
    name: "Living Waters Fellowship",
    location: "Northern Province",
    description: "Established to reach unreached communities in the north, with active farming projects and a community school.",
    type: "Tributary Church",
  },
  {
    name: "Calvary Community Centre",
    location: "Western District",
    description: "A multi-purpose ministry centre offering church services, vocational training, and community programs.",
    type: "Ministry Centre",
  },
  {
    name: "Harvest Field Church",
    location: "Southern Region",
    description: "Rooted in agricultural heartlands, combining church services with thriving cooperative farming initiatives.",
    type: "Tributary Church",
  },
  {
    name: "Cornerstone Outreach Centre",
    location: "Urban Mission",
    description: "An urban ministry centre focused on youth development, entrepreneurship training, and church planting.",
    type: "Outreach Centre",
  },
];

const typeColors: Record<string, string> = {
  "Main Church": "bg-gold text-navy",
  "Tributary Church": "bg-navy text-primary-foreground",
  "Ministry Centre": "bg-gold/15 text-gold-dark border border-gold/40",
  "Outreach Centre": "bg-secondary text-foreground",
};

export default function ChurchesSection() {
  return (
    <section id="churches" className="py-24" style={{ background: "hsl(var(--primary))" }}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-gold tracking-widest uppercase text-sm font-bold mb-3">
            Our Network
          </p>
          <div className="section-divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground max-w-3xl mx-auto">
            Tributary Churches & Centres
          </h2>
          <p className="font-body text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-lg">
            A growing family of churches and ministry centres united under one vision — bringing the fullness of life in Christ to every community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {churches.map((church) => (
            <div
              key={church.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Type badge */}
              <span
                className={`inline-block font-body text-xs font-bold px-3 py-1 rounded-full mb-4 ${typeColors[church.type] || "bg-gold/20 text-gold"}`}
              >
                {church.type}
              </span>

              <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                {church.name}
              </h3>

              <div className="flex items-center gap-1.5 text-gold mb-3">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="font-body text-sm">{church.location}</span>
              </div>

              <p className="font-body text-primary-foreground/65 text-sm leading-relaxed">
                {church.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="font-body text-primary-foreground/70 mb-4">
            Is your church interested in joining our network?
          </p>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 gradient-gold text-navy font-display font-bold rounded-full shadow-gold hover:brightness-110 transition-all"
          >
            Connect Your Church
          </button>
        </div>
      </div>
    </section>
  );
}
