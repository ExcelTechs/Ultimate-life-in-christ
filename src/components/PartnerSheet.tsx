import { useState } from "react";
import { X, Send, Users, Clock, Globe } from "lucide-react";

interface PartnerSheetProps {
  open: boolean;
  onClose: () => void;
}

export default function PartnerSheet({ open, onClose }: PartnerSheetProps) {
  const [form, setForm] = useState({ name: "", email: "", church: "", need: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", church: "", need: "", message: "" });
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={onClose}
          style={{ backdropFilter: "blur(2px)" }}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full z-50 w-full max-w-md bg-background shadow-2xl transition-transform duration-300 ease-in-out flex flex-col`}
        style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="gradient-navy p-6 flex-shrink-0">
          <div className="flex items-start justify-between mb-3">
            <p className="font-body text-gold text-xs tracking-widest uppercase font-bold">
              LET'S BUILD TOGETHER
            </p>
            <button onClick={onClose} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <h2 className="font-display text-2xl font-bold text-primary-foreground mb-2">
            Partner With Us
          </h2>
          <p className="font-body text-primary-foreground/65 text-sm">
            Tell us about your ministry or need and we'll discuss how we can grow together in the Kingdom.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 font-body text-xs text-primary-foreground/80">
              <Users className="w-3 h-3" /> Kingdom Team
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 font-body text-xs text-primary-foreground/80">
              <Clock className="w-3 h-3" /> Respond Within 48 Hours
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 font-body text-xs text-primary-foreground/80">
              <Globe className="w-3 h-3" /> Ministry-First Approach
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {sent ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-4">
                <Send className="w-7 h-7 text-navy" />
              </div>
              <h4 className="font-display text-xl font-bold text-foreground mb-2">Request Sent!</h4>
              <p className="font-body text-muted-foreground text-sm">
                Thank you! Our team will reach out to you within 48 hours. God bless you!
              </p>
              <button onClick={() => { setSent(false); onClose(); }} className="mt-6 font-body text-sm text-gold hover:underline">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-body text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter name"
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  />
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
                    placeholder="Enter email"
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block">
                  Church / Organization Name
                </label>
                <input
                  type="text"
                  value={form.church}
                  onChange={(e) => setForm({ ...form, church: e.target.value })}
                  placeholder="Enter church or org name"
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label className="font-body text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block">
                  What do you need? *
                </label>
                <select
                  required
                  value={form.need}
                  onChange={(e) => setForm({ ...form, need: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                >
                  <option value="">Select service type</option>
                  <option>Skills Training Enrollment</option>
                  <option>Leadership Development</option>
                  <option>Entrepreneurship Program</option>
                  <option>Farming Co-operative</option>
                  <option>Church Planting Support</option>
                  <option>Management Training</option>
                  <option>General Partnership</option>
                </select>
              </div>

              <div>
                <label className="font-body text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1 block">
                  Tell us about your needs *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your ministry goals, challenges, and how we can help…"
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 gradient-gold text-navy font-display font-bold text-base rounded-full shadow-gold hover:brightness-110 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Submit Request
                <Send className="w-4 h-4" />
              </button>

              <p className="font-body text-xs text-muted-foreground text-center">
                We typically respond within 48 hours. God bless you!
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
