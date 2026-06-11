import Image from "next/image";
import { MapPin, Clock, Car, Phone, Award } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/constants";

const AREA_HIGHLIGHTS = [
  {
    icon: Award,
    label: "Established",
    value: `${BUSINESS.foundedYear} — Serving for ${new Date().getFullYear() - BUSINESS.foundedYear}+ years`,
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "New Barrackpore, Kolkata",
  },
  {
    icon: MapPin,
    label: "Service area",
    value: "All of Kolkata & West Bengal",
  },
  {
    icon: Clock,
    label: "Hours",
    value: BUSINESS.hours,
  },
  {
    icon: Car,
    label: "Services offered",
    value: `${SERVICES.length} vehicle & driver services`,
  },
];

export function StorySection() {
  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "linear-gradient(135deg, #10244A 0%, #0A1833 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Image + Story row */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Photo — 2/5 columns */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/about/about.jpg"
                alt="Tapas Ghosh — owner of Akash Car Service & Driver Centre, New Barrackpore, Kolkata"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Story — 3/5 columns */}
          <div className="flex flex-col justify-center lg:col-span-3">
            <span className="font-body text-sm font-medium uppercase tracking-wider text-brand-red">
              Our Story
            </span>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-wide text-white">
              Serving Kolkata Since {BUSINESS.foundedYear}
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-text-secondary">
              Founded in {BUSINESS.foundedYear} and run by {BUSINESS.ownerName},{" "}
              {BUSINESS.name} has been a trusted transport business in New Barrackpore, Kolkata for
              over {new Date().getFullYear() - BUSINESS.foundedYear} years. We provide a complete
              range of vehicle and driver hire services — from car rentals and professional driver
              hire to bus, traveller, truck, and wedding vehicle services.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-text-secondary">
              We serve customers across the entire Kolkata region and throughout West Bengal,
              available 24 hours a day, 7 days a week. Very few transport businesses in the region
              can claim over two decades of continuous, reliable service — and that experience is
              something our customers feel every time they call.
            </p>
            <a
              href={`tel:+91${BUSINESS.phonePrimary}`}
              className="mt-8 inline-flex items-center gap-2 font-body text-base font-medium text-brand-red transition-colors hover:text-brand-red-hover"
            >
              <Phone size={16} aria-hidden="true" />
              Call us — {BUSINESS.phonePrimary}
            </a>
          </div>
        </div>

        {/* Where We Operate — full-width card below */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <h3 className="font-heading text-xl font-semibold tracking-wide text-white">
            Where We Operate
          </h3>
          <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AREA_HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-red">
                    <Icon size={16} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-medium uppercase tracking-wider text-text-muted">
                      {item.label}
                    </p>
                    <p className="mt-0.5 font-body text-sm font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
