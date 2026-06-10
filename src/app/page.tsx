import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { getLocalBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Akash Car Service & Driver Centre — Car Rentals & Driver Hire in Kolkata",
  description:
    "Trusted car rentals, driver hire, bus, truck & wedding vehicles across Kolkata & West Bengal. Available 24 hours, 7 days a week. Call now for an instant quote.",
  openGraph: {
    title: "Akash Car Service & Driver Centre — Car Rentals & Driver Hire in Kolkata",
    description:
      "Trusted car rentals, driver hire, bus, truck & wedding vehicles across Kolkata & West Bengal. Available 24/7. Call for an instant quote.",
    url: "https://akashcarservice.in",
    siteName: "Akash Car Service & Driver Centre",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://akashcarservice.in",
  },
};

export default function HomePage() {
  const jsonLd = getLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ServicesGrid showViewAll />
      <WhyChooseUs />
      <AboutSnippet />
      <ContactSection />
      <CTABanner />
    </>
  );
}
