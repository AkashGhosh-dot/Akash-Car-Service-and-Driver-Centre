import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function AboutSnippet() {
  return (
    <section className="bg-brand-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-body text-sm font-medium uppercase tracking-wider text-brand-red">
            About Us
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-wide text-white">
            A Name Kolkata Trusts
          </h2>
          <p className="mt-6 font-body text-lg leading-relaxed text-gray-300">
            {BUSINESS.name} is a trusted transport business based in New Barrackpore, Kolkata. We
            provide a wide range of vehicle and driver hire services — from daily car rentals and
            professional driver hire to bus, tempo, truck, and wedding vehicle services. We serve
            customers across the entire Kolkata region and throughout West Bengal, available 24 hours
            a day, 7 days a week.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 font-body text-base font-medium text-brand-red transition-colors hover:text-red-400"
          >
            Learn More About Us
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
