import { Phone, MessageCircle, Mail, MapPin, Clock, Award } from "lucide-react";
import { Button, WhatsAppIcon } from "@/components/ui";
import { MapEmbed } from "./MapEmbed";
import { BUSINESS } from "@/lib/constants";

interface ContactSectionProps {
  headingLevel?: 1 | 2;
}

export function ContactSection({ headingLevel = 2 }: ContactSectionProps) {
  const Heading = `h${headingLevel}` as "h1" | "h2";
  const years = new Date().getFullYear() - BUSINESS.foundedYear;

  return (
    <section
      className="relative overflow-hidden py-12 md:py-16"
      style={{
        background:
          "linear-gradient(180deg, #071225 0%, #0A1833 40%, #10244A 100%)",
      }}
    >
      {/* Radial glow behind heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
        style={{ height: "320px" }}
      >
        <div
          style={{
            width: "600px",
            height: "320px",
            background:
              "radial-gradient(circle at center, rgba(37,99,235,0.15), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center">
          {/* Trust badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5">
            <Award size={13} className="text-brand-gold" aria-hidden="true" />
            <span
              className="font-body font-medium uppercase text-brand-gold"
              style={{ fontSize: "10px", letterSpacing: "0.16em" }}
            >
              Trusted Since {BUSINESS.foundedYear} &nbsp;&bull;&nbsp; {years} Years of Service
            </span>
          </div>

          <div>
            <span className="font-body text-sm font-medium uppercase tracking-wider text-brand-red">
              Get In Touch
            </span>
            <Heading className="mt-2 font-heading text-4xl font-semibold tracking-wide text-white md:text-5xl">
              Contact Us
            </Heading>
            <p className="mx-auto mt-3 max-w-xl font-body text-base text-text-secondary">
              Call or WhatsApp us any time — we&apos;re available 24 hours, 7 days a week.
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Contact details */}
          <div className="flex flex-col gap-6">
            {/* Primary CTA buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                href={`tel:+91${BUSINESS.phonePrimary}`}
                className="flex-1"
              >
                <Phone size={20} aria-hidden="true" />
                Call Now
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>

            {/* Contact detail list */}
            <ul className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <li className="flex items-center gap-3">
                <Award size={18} className="shrink-0 text-brand-gold" aria-hidden="true" />
                <span className="font-body text-base font-medium text-brand-gold">
                  Established {BUSINESS.foundedYear} &mdash; {years} Years of Trusted Service
                </span>
              </li>
              {BUSINESS.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:+91${phone}`}
                    className="flex items-center gap-3 font-body text-base text-white/80 transition-colors hover:text-white"
                  >
                    <Phone size={18} className="shrink-0 text-brand-red" aria-hidden="true" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BUSINESS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-base text-white/80 transition-colors hover:text-white"
                >
                  <MessageCircle size={18} className="shrink-0 text-whatsapp" aria-hidden="true" />
                  WhatsApp — {BUSINESS.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 font-body text-base text-white/80 transition-colors hover:text-white"
                >
                  <Mail size={18} className="shrink-0 text-brand-red" aria-hidden="true" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-red" aria-hidden="true" />
                <span className="font-body text-base text-white/80">{BUSINESS.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="shrink-0 text-brand-red" aria-hidden="true" />
                <span className="font-body text-base text-white/80">{BUSINESS.hours}</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <MapEmbed src={BUSINESS.mapEmbedUrl} height="h-full min-h-[320px]" />
        </div>
      </div>
    </section>
  );
}
