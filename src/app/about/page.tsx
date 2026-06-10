import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { StorySection } from "@/components/sections/StorySection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us — Akash Car Service & Driver Centre",
  description:
    "Learn about Akash Car Service & Driver Centre — a trusted transport business in New Barrackpore, Kolkata. Car rentals, driver hire & more across West Bengal, 24/7.",
  openGraph: {
    title: "About Us — Akash Car Service & Driver Centre",
    description:
      "Trusted transport across Kolkata & West Bengal. Car rentals, driver hire, bus, truck and wedding vehicles. Available 24 hours, 7 days a week.",
    url: "https://akashcarservice.in/about",
    siteName: "Akash Car Service & Driver Centre",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://akashcarservice.in/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="Who We Are"
        description="A trusted transport business serving Kolkata and West Bengal — available every hour of every day."
      />
      <StorySection />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
