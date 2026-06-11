import type { Metadata } from "next";
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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Akash Car Service & Driver Centre" }],
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
      <ServicesGrid columns={2} cardVariant="detail" headingLevel={1} />
      <CTABanner />
    </>
  );
}
