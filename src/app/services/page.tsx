import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTABanner } from "@/components/sections/CTABanner";
import { getServiceSchema } from "@/lib/structured-data";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services — Car Rentals, Driver Hire & Transport in Kolkata",
  description:
    "Car rentals, driver hire, bus, truck & wedding vehicles across Kolkata & West Bengal. Available 24/7. Call or WhatsApp for a quote — no hidden charges.",
  openGraph: {
    title: "Our Services — Car Rentals, Driver Hire & Transport in Kolkata",
    description:
      "Car rentals, driver hire, bus, truck & wedding vehicles across Kolkata & West Bengal. Available 24/7. Call or WhatsApp for a quote.",
    url: "https://akashcarservice.in/services",
    siteName: "Akash Car Service & Driver Centre",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://akashcarservice.in/services",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": SERVICES.map((service) => getServiceSchema(service)),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        label="What We Offer"
        title="Our Services"
        description="Every vehicle type, any distance, any time. Call or WhatsApp for an instant quote — we cover all of Kolkata and West Bengal, 24 hours a day, 7 days a week."
      />
      <ServicesGrid columns={2} cardVariant="detail" />
      <CTABanner />
    </>
  );
}
