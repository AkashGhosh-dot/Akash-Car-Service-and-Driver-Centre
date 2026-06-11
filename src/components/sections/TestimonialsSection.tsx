import { Star } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface Review {
  name: string;
  service: string;
  text: string;
}

const REVIEWS: Review[] = [
  {
    name: "Subhajit Chatterjee",
    service: "Corporate Transport",
    text: "Reliable service, professional drivers, and always on time. We've been using Akash Car Service for our business travel for years.",
  },
  {
    name: "Priyanka Banerjee",
    service: "Wedding Car Service",
    text: "The wedding vehicle arrived perfectly decorated and exactly on schedule. Excellent experience.",
  },
  {
    name: "Sourav Mukherjee",
    service: "Airport Transfer",
    text: "Booked a late-night airport pickup and the driver was punctual and courteous. Highly recommended.",
  },
  {
    name: "Anindita Roy",
    service: "Family Trip",
    text: "Clean vehicle, comfortable journey, and very professional service throughout our trip.",
  },
  {
    name: "Arindam Ghosh",
    service: "Traveller Service",
    text: "We hired a traveller for an outstation trip. The vehicle was well-maintained and the driver was excellent.",
  },
  {
    name: "Madhumita Sen",
    service: "Regular Customer",
    text: "Akash Car Service has been our trusted transport partner for many years. Consistent quality every time.",
  },
];

export function TestimonialsSection() {
  const years = new Date().getFullYear() - BUSINESS.foundedYear;

  const STATS = [
    { top: `${years}+`, bottom: "Years of Experience" },
    { top: "24/7", bottom: "Availability" },
    { top: "Since", bottom: `${BUSINESS.foundedYear}` },
    { top: "All Across", bottom: "Kolkata & West Bengal" },
  ];

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background: "linear-gradient(135deg, #0A1833 0%, #0F2D6B 50%, #10244A 100%)",
      }}
    >
      {/* Ambient glow — top centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Ambient glow — bottom left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 10% 100%, rgba(212,160,23,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <span className="font-body text-sm font-medium uppercase tracking-wider text-brand-gold">
            Trusted Since {BUSINESS.foundedYear}
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-wide text-white md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-body text-base text-text-secondary">
            Serving Kolkata &amp; West Bengal with trusted transport services for over {years} years.
          </p>
        </div>

        {/* Trust statistics */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.bottom}
              className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm"
            >
              <span className="font-heading text-3xl font-bold text-brand-gold md:text-4xl">
                {stat.top}
              </span>
              <span className="mt-1 font-body text-xs font-medium uppercase tracking-wider text-text-secondary">
                {stat.bottom}
              </span>
            </div>
          ))}
        </div>

        {/* Review cards — mobile: horizontal carousel, desktop: 3-col grid */}
        <div
          className="mt-12 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:snap-none"
          style={{ scrollbarWidth: "none" }}
        >
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="relative w-[82vw] shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/30 hover:shadow-xl hover:shadow-black/40 md:w-auto"
            >
              {/* Decorative quote mark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-5 top-3 select-none font-heading text-6xl leading-none text-brand-gold/15"
              >
                &ldquo;
              </span>

              {/* Star rating */}
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-gold text-brand-gold" aria-hidden="true" />
                ))}
              </div>

              {/* Review text */}
              <p className="mt-4 font-body text-sm leading-relaxed text-white/85">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer identity */}
              <div className="mt-5 flex items-center gap-3 border-t border-white/8 pt-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <span className="font-heading text-sm font-bold text-white" aria-hidden="true">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold tracking-wide text-white">
                    {review.name}
                  </p>
                  <p className="font-body text-xs text-brand-gold/80">{review.service}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
