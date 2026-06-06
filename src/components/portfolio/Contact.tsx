import { useEffect, useState } from "react";
import { Section } from "./Section";
import { Mail, Phone, MapPin, Send, Loader2, Check, X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const EMAILJS_SERVICE_ID = "service_f2jhae8";
const EMAILJS_TEMPLATE_ID = "template_l3i6ocf";
const EMAILJS_PUBLIC_KEY = "tfXilmnAX1WxcKltg";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: parsed.data.name,
          email: parsed.data.email,
          subject: parsed.data.subject,
          message: parsed.data.message,
          to_email: "saiharishtiruvidhula14@gmail.com",
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      toast.success("Message sent successfully. I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      description="I'm actively looking for internship and entry-level software engineering roles. Send a message below or reach me directly."
    >
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <ContactCard
          Icon={Mail}
          label="Email"
          value="saiharishtiruvidhula14@gmail.com"
          href="mailto:saiharishtiruvidhula14@gmail.com"
        />
        <ContactCard Icon={Phone} label="Phone" value="+91 89195 73846" href="tel:+918919573846" />
        <ContactCard Icon={MapPin} label="Location" value="Guntur, Andhra Pradesh" />
      </div>

      <div className="rounded-2xl hairline bg-surface/60 backdrop-blur-sm p-6 md:p-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Open to Internships, Freelance Projects, and Entry-Level Opportunities
        </div>

        <form onSubmit={onSubmit} className="grid gap-4" noValidate>
          <div className="grid md:grid-cols-2 gap-4">
            <Field
              label="Full Name"
              name="name"
              value={form.name}
              onChange={onChange}
              error={errors.name}
              placeholder="Jane Doe"
            />
            <Field
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              error={errors.email}
              placeholder="jane@company.com"
            />
          </div>
          <Field
            label="Subject"
            name="subject"
            value={form.subject}
            onChange={onChange}
            error={errors.subject}
            placeholder="Internship opportunity, collaboration, etc."
          />
          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={5}
              placeholder="Tell me a bit about the role or project..."
              className="w-full rounded-md border border-border/60 bg-background/60 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-destructive">{errors.message}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </button>
            <span className="text-xs text-muted-foreground">Typically responds within 24 hours</span>
          </div>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-border/60 bg-background/60 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactCard({
  Icon,
  label,
  value,
  href,
}: {
  Icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="rounded-xl hairline bg-surface p-5 hover:bg-surface-elevated hover:-translate-y-0.5 hover:border-primary/30 transition-all duration-200 h-full">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-md bg-primary/15 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
      </div>
      <div className="mt-3 text-sm text-foreground break-words">{value}</div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
