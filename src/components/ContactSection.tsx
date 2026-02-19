import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-gold tracking-widest uppercase text-sm font-bold mb-3">
            Get In Touch
          </p>
          <div className="section-divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Connect With Our Ministry
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
            Whether you want to partner, volunteer, join a church, or learn more about our programs — we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="gradient-navy rounded-2xl p-8 mb-6 text-primary-foreground">
              <h3 className="font-display text-2xl font-bold mb-6 text-gold">
                Reach Out To Us
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-primary-foreground/90 mb-1">Address</p>
                    <p className="font-body text-primary-foreground/65 text-sm">
                      ULCM Headquarters<br />
                      Ministry House, Main Road<br />
                      [City, Country]
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-primary-foreground/90 mb-1">Phone</p>
                    <p className="font-body text-primary-foreground/65 text-sm">+[Country Code] [Phone Number]</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-primary-foreground/90 mb-1">Email</p>
                    <p className="font-body text-primary-foreground/65 text-sm">info@ulcministries.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scripture */}
            <div className="rounded-2xl border border-gold/30 bg-gold/5 p-7 text-center">
              <p className="font-display text-xl italic text-foreground leading-relaxed mb-3">
                "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future."
              </p>
              <p className="font-body text-gold text-sm font-bold tracking-wide">
                — Jeremiah 29:11
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="card-ministry p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h3>

            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-navy" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-2">
                  Message Sent!
                </h4>
                <p className="font-body text-muted-foreground">
                  Thank you for reaching out. Our team will get back to you shortly. God bless you!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 font-body text-sm text-gold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+1 234 567 8900"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block">
                    Subject *
                  </label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  >
                    <option value="">Select a topic…</option>
                    <option>Partnership Inquiry</option>
                    <option>Church Affiliation</option>
                    <option>Program Enrollment</option>
                    <option>Donation / Support</option>
                    <option>Volunteer Opportunity</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can serve you or how you'd like to partner with us…"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 gradient-gold text-navy font-display font-bold text-base rounded-full shadow-gold hover:brightness-110 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
