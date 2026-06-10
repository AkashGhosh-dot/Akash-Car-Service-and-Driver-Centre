import { Phone, MessageCircle, Mail, MapPin, Clock, Award } from "lucide-react";
import { Button, WhatsAppIcon } from "@/components/ui";
import { MapEmbed } from "./MapEmbed";
import { BUSINESS } from "@/lib/constants";

export function ContactSection() {
  const years = new Date().getFullYear() - BUSINESS.foundedYear;

  return (
    <section className="bg-surface-dark py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center">
          <span className="font-body text-sm font-medium uppercase tracking-wider text-brand-red">
            Get In Touch
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-wide text-white">
            Contact Us
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-body text-base text-text-secondary">
            Call or WhatsApp us any time — we&apos;re available 24 hours, 7 days a week.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
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
            <ul className="flex flex-col gap-4 rounded-xl border border-white/10 bg-brand-black/40 p-6">
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
