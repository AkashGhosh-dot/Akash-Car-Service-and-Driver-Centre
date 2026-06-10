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
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background:
          "linear-gradient(180deg, #030712 0%, #0B1120 30%, #0F172A 60%, #111827 100%)",
      }}
    >

      {/* ── Background depth layers ── */}

      {/* Blue ambient glow — top right (executive, premium) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 88% 8%, rgba(59,130,246,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Brand-red ambient glow — bottom left (brand warmth) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 10% 92%, rgba(225,29,46,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Edge vignette — pulls focus toward the card grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 110% 90% at 50% 50%, transparent 40%, rgba(3,7,18,0.50) 100%)",
        }}
      />

      {/* Bottom fade — smooth exit into next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background: "linear-gradient(to top, rgba(3,7,18,0.55) 0%, transparent 100%)",
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
