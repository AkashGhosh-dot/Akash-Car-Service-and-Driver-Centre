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
    <section className="relative overflow-hidden bg-brand-black py-16 md:py-24">

      {/* ── Background depth layers ── */}

      {/* Top transition — dissolves hard edge from TrustBar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,23,42,0.75) 0%, transparent 100%)",
        }}
      />

      {/* Brand-red ambient glow — upper left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 12% 22%, rgba(225,29,46,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Brand-red ambient glow — lower right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 88% 78%, rgba(225,29,46,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Edge vignette — pulls focus toward the centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 110% 90% at 50% 50%, transparent 35%, rgba(5,7,11,0.55) 100%)",
        }}
      />

      {/* Bottom fade — smooth exit into next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            "linear-gradient(to top, rgba(5,7,11,0.6) 0%, transparent 100%)",
        }}
      />

      {/* Watermark — large ghost text behind the heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center overflow-hidden"
      >
        <span
          className="select-none whitespace-nowrap font-heading font-bold tracking-widest text-white"
          style={{ fontSize: "clamp(72px, 14vw, 210px)", opacity: 0.028, lineHeight: 1.3 }}
        >
          SERVICES
        </span>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center">
          <span className="font-body text-sm font-medium uppercase tracking-wider text-brand-red">
            Trusted Since 2000
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
