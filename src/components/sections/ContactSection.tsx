import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Button, WhatsAppIcon } from "@/components/ui";
import { MapEmbed } from "./MapEmbed";
import { BUSINESS } from "@/lib/constants";

export function ContactSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center">
          <span className="font-body text-sm font-medium uppercase tracking-wider text-brand-red">
            Get In Touch
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-wide text-gray-900">
            Contact Us
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-body text-base text-gray-500">
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
            <ul className="flex flex-col gap-4 rounded-xl border border-gray-100 bg-gray-50 p-6">
              {BUSINESS.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:+91${phone}`}
                    className="flex items-center gap-3 font-body text-base text-gray-700 transition-colors hover:text-brand-red"
                  >
                    <Phone
                      size={18}
                      className="shrink-0 text-brand-red"
                      aria-hidden="true"
                    />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BUSINESS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-base text-gray-700 transition-colors hover:text-brand-red"
                >
                  <MessageCircle
                    size={18}
                    className="shrink-0 text-[#25D366]"
                    aria-hidden="true"
                  />
                  WhatsApp — {BUSINESS.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 font-body text-base text-gray-700 transition-colors hover:text-brand-red"
                >
                  <Mail size={18} className="shrink-0 text-brand-red" aria-hidden="true" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-brand-red"
                  aria-hidden="true"
                />
                <span className="font-body text-base text-gray-700">
                  {BUSINESS.address.full}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="shrink-0 text-brand-red" aria-hidden="true" />
                <span className="font-body text-base text-gray-700">{BUSINESS.hours}</span>
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
