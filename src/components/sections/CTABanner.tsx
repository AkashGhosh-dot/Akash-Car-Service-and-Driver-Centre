import { Phone } from "lucide-react";
import { Button, WhatsAppIcon } from "@/components/ui";
import { BUSINESS } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="bg-brand-red py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-wide text-white md:text-4xl">
            Need a Vehicle or Driver?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-red-100">
            We&apos;re available around the clock. Call or WhatsApp for an instant quote — no hidden
            charges.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="secondary"
              size="lg"
              href={`tel:+91${BUSINESS.phonePrimary}`}
              className="w-full border-white text-white hover:bg-white hover:text-brand-red sm:w-auto"
            >
              <Phone size={20} aria-hidden="true" />
              Call Now — {BUSINESS.phonePrimary}
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
        </div>
      </div>
    </section>
  );
}
