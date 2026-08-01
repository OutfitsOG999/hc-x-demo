import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { TREATMENTS } from "@/data/site";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const inputCls =
  "w-full rounded-xl border border-beige-dark/60 bg-ivory px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-soft/50 focus:outline-none focus:ring-2 focus:ring-champagne/50 focus:border-champagne transition";

export default function BookingModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", treatment: "", date: "", message: "" });
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/bookings`, {
        name: form.name,
        phone: form.phone,
        email: form.email,
        treatment: form.treatment,
        preferred_date: form.date || null,
        message: form.message || null,
      });
      toast.success("Consultation request received — we'll be in touch shortly.");
      setForm({ name: "", phone: "", email: "", treatment: "", date: "", message: "" });
      onClose();
    } catch {
      toast.error("Something went wrong — please try again or call us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        data-testid="booking-modal"
        className="bg-ivory border-beige-dark/40 rounded-3xl max-w-lg p-8 md:p-10"
      >
        <DialogHeader>
          <p className="text-[10px] tracking-[0.35em] uppercase text-champagne-dark font-medium mb-2">
            HC Beauty &amp; Aesthetics
          </p>
          <DialogTitle className="font-serif text-3xl tracking-tight text-charcoal">
            Book your consultation
          </DialogTitle>
          <DialogDescription className="text-charcoal-soft font-light">
            Tell us a little about you and we'll confirm your appointment personally.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              data-testid="booking-name-input"
              required
              value={form.name}
              onChange={set("name")}
              placeholder="Full name"
              className={inputCls}
            />
            <input
              data-testid="booking-phone-input"
              required
              value={form.phone}
              onChange={set("phone")}
              placeholder="Phone number"
              className={inputCls}
            />
          </div>
          <input
            data-testid="booking-email-input"
            required
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="Email address"
            className={inputCls}
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <select
              data-testid="booking-treatment-select"
              required
              value={form.treatment}
              onChange={set("treatment")}
              className={`${inputCls} ${form.treatment ? "" : "text-charcoal-soft/50"}`}
            >
              <option value="" disabled>
                Treatment of interest
              </option>
              {TREATMENTS.map((t) => (
                <option key={t.id} value={t.name}>
                  {t.name}
                </option>
              ))}
              <option value="Not sure yet">Not sure yet</option>
            </select>
            <input
              data-testid="booking-date-input"
              type="date"
              value={form.date}
              onChange={set("date")}
              className={inputCls}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <textarea
            data-testid="booking-message-input"
            value={form.message}
            onChange={set("message")}
            placeholder="Anything you'd like us to know? (optional)"
            rows={3}
            className={`${inputCls} resize-none`}
          />
          <button
            data-testid="booking-submit-btn"
            type="submit"
            disabled={sending}
            className="w-full rounded-full bg-charcoal text-ivory py-4 text-sm tracking-wide hover:bg-champagne-dark transition-colors duration-300 disabled:opacity-60"
          >
            {sending ? "Sending…" : "Request Consultation"}
          </button>
          <p className="text-[11px] text-charcoal-soft/70 text-center font-light">
            Demonstration booking form — no appointment is confirmed until we contact you.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
