import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { SERVICES } from "@/lib/constants";

interface ServicesGridProps {
  limit?: number;
  showViewAll?: boolean;
  columns?: 2 | 4;
  cardVariant?: "compact" | "detail";
}

export function ServicesGrid({
  limit,
  showViewAll = false,
  columns = 4,
  cardVariant = "compact",
}: ServicesGridProps) {
  const services = limit ? SERVICES.slice(0, limit) : SERVICES;

  const gridClass =
    columns === 2
      ? "grid grid-cols-1 gap-6 sm:grid-cols-2"
      : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="bg-brand-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center">
          <span className="font-body text-sm font-medium uppercase tracking-wider text-brand-red">
            What We Offer
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-wide text-white">
            Our Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-body text-base text-text-secondary">
            From daily car hire to full wedding convoys — one call covers every transport need
            across Kolkata &amp; West Bengal.
          </p>
        </div>

        {/* Grid */}
        <div className={`mt-12 ${gridClass}`}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} variant={cardVariant} />
          ))}
        </div>

        {/* View All link */}
        {showViewAll && (
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-body text-base font-medium text-brand-red transition-colors hover:text-brand-red-hover"
            >
              View All Services
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
