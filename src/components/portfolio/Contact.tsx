import { Section } from "./Section";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
      description="I'm actively looking for internship and entry-level software engineering roles. The fastest way to reach me is email."
    >
      <div className="grid md:grid-cols-3 gap-4">
        <ContactCard
          Icon={Mail}
          label="Email"
          value="saiharishtiruvidhula14@gmail.com"
          href="mailto:saiharishtiruvidhula14@gmail.com"
        />
        <ContactCard Icon={Phone} label="Phone" value="+91 89195 73846" href="tel:+918919573846" />
        <ContactCard Icon={MapPin} label="Location" value="Guntur, Andhra Pradesh" />
      </div>

      <div className="mt-8">
        <a
          href="mailto:saiharishtiruvidhula14@gmail.com"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
        >
          <Mail className="h-4 w-4" /> Send me an email
        </a>
      </div>
    </Section>
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
    <div className="rounded-xl hairline bg-surface p-5 hover:bg-surface-elevated transition-colors h-full">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-md bg-primary/15 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </div>
      </div>
      <div className="mt-3 text-sm text-foreground break-words">{value}</div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
