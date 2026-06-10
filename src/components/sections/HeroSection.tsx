import { Phone } from "lucide-react";
import { Button, WhatsAppIcon } from "@/components/ui";
import { BUSINESS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-black md:min-h-[85vh]">
      {/* Decorative background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[700px] w-[700px] -translate-y-1/4 translate-x-1/4 rounded-full bg-brand-red/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/3 -translate-x-1/3 rounded-full bg-brand-red/5 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center md:text-left">
          {/* Available 24/7 badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-red/30 bg-brand-red/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-red" aria-hidden="true" />
            <span className="font-body text-sm font-medium uppercase tracking-wider text-brand-red">
              Available 24/7
            </span>
          </div>

          {/* H1 */}
          <h1 className="max-w-3xl font-heading text-5xl font-bold leading-tight tracking-wide text-white md:text-6xl">
            Your Trusted Transport Partner —{" "}
            <span className="text-brand-red">Available 24/7</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl font-body text-xl leading-relaxed text-gray-300 md:mx-0">
            Car rentals, driver hire, bus, truck, and wedding vehicles across Kolkata &amp; West
            Bengal.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <Button
              variant="primary"
              size="lg"
              href={`tel:+91${BUSINESS.phonePrimary}`}
              className="w-full sm:w-auto"
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
              className="w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>

          {/* Contact note */}
          <p className="mt-8 font-body text-sm text-gray-500">
            {BUSINESS.phones[0]} &nbsp;·&nbsp; {BUSINESS.phones[1]} &nbsp;·&nbsp;{" "}
            {BUSINESS.serviceArea}
          </p>
        </div>
      </div>
    </section>
  );
}
