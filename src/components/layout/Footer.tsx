import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Column 1 — Brand + Quick Links */}
          <div>
            <Link href="/" className="focus-visible:outline-none">
              <span className="block font-heading text-2xl font-bold leading-none tracking-wide text-brand-red">
                AKASH
              </span>
              <span className="block font-body text-[10px] font-medium uppercase tracking-widest text-gray-400">
                Car Service &amp; Driver Centre
              </span>
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-gray-400">
              Trusted transport across Kolkata &amp; West Bengal. Available 24 hours, 7 days a
              week.
            </p>
            <nav className="mt-6" aria-label="Footer navigation">
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gray-300">
              Our Services
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="font-body text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-gray-300">
              Contact Us
            </h3>
            <ul className="mt-4 flex flex-col gap-4">
              {BUSINESS.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:+91${phone}`}
                    className="flex items-center gap-2 font-body text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <Phone size={14} className="shrink-0 text-brand-red" aria-hidden="true" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BUSINESS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <MessageCircle
                    size={14}
                    className="shrink-0 text-[#25D366]"
                    aria-hidden="true"
                  />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-2 font-body text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <Mail size={14} className="shrink-0 text-brand-red" aria-hidden="true" />
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0 text-brand-red"
                  aria-hidden="true"
                />
                <span className="font-body text-sm text-gray-400">{BUSINESS.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="shrink-0 text-brand-red" aria-hidden="true" />
                <span className="font-body text-sm text-gray-400">{BUSINESS.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="font-body text-xs text-gray-500">
            &copy; {year} {BUSINESS.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
