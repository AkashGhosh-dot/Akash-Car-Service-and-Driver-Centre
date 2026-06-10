import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { getLocalBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact Us — Book a Driver or Car Service in Kolkata",
  description:
    "Call or WhatsApp Akash Car Service & Driver Centre any time — we're open 24/7. Car rentals, driver hire & transport across Kolkata & West Bengal.",
  openGraph: {
    title: "Contact Us — Book a Driver or Car Service in Kolkata",
    description:
      "Call or WhatsApp us any time — open 24/7. Car rentals, driver hire & transport across Kolkata & West Bengal. No hidden charges.",
    url: "https://akashcarservice.in/contact",
    siteName: "Akash Car Service & Driver Centre",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://akashcarservice.in/contact",
  },
};

export default function ContactPage() {
  const jsonLd = getLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        label="Get In Touch"
        title="Contact Us"
        description="We're available 24 hours a day, 7 days a week. Call or WhatsApp us for an instant quote — no hidden charges."
      />
      <ContactSection />
      <CTABanner />
    </>
  );
}
