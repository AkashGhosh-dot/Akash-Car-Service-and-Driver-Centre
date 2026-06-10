import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function AboutSnippet() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-body text-sm font-medium uppercase tracking-wider text-brand-red">
            About Us
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-wide text-gray-900">
            A Name Kolkata Trusts Since 2000
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-gray-600">
            Established in {BUSINESS.foundedYear}, {BUSINESS.name} has been Kolkata&apos;s trusted
            transport partner for over {new Date().getFullYear() - BUSINESS.foundedYear} years.
            Based in New Barrackpore, we provide a complete range of vehicle and driver hire
            services — from car rentals and professional driver hire to bus, traveller, truck, and
            wedding vehicle services. Available 24 hours a day, 7 days a week across Kolkata and all
            of West Bengal.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 font-body text-base font-medium text-brand-red transition-colors hover:text-brand-red-hover"
          >
            Learn More About Us
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
