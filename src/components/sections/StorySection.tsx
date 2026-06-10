import { MapPin, Clock, Car, Phone } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/constants";

const AREA_HIGHLIGHTS = [
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
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Story — takes 3/5 columns */}
          <div className="lg:col-span-3">
            <span className="font-body text-sm font-medium uppercase tracking-wider text-brand-red">
              Our Story
            </span>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-wide text-gray-900">
              A Trusted Name in Transport
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-gray-700">
              {BUSINESS.name} is a trusted transport business based in New Barrackpore, Kolkata. We
              provide a wide range of vehicle and driver hire services — from daily car rentals and
              professional driver hire to bus, tempo, truck, and wedding vehicle services.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-gray-700">
              We serve customers across the entire Kolkata region and throughout West Bengal,
              available 24 hours a day, 7 days a week. Whether it&apos;s a quick local trip, a
              full-day hire, or a convoy for your wedding, we have the fleet and the team to make it
              happen — reliably, safely, and on time.
            </p>
            <a
              href={`tel:+91${BUSINESS.phonePrimary}`}
              className="mt-8 inline-flex items-center gap-2 font-body text-base font-medium text-brand-red transition-colors hover:text-brand-red-dark"
            >
              <Phone size={16} aria-hidden="true" />
              Call us — {BUSINESS.phonePrimary}
            </a>
          </div>

          {/* Service area callout — takes 2/5 columns */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <h3 className="font-heading text-xl font-semibold tracking-wide text-gray-900">
                Where We Operate
              </h3>
              <ul className="mt-6 flex flex-col gap-5">
                {AREA_HIGHLIGHTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-red">
                        <Icon size={16} className="text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-body text-xs font-medium uppercase tracking-wider text-gray-500">
                          {item.label}
                        </p>
                        <p className="mt-0.5 font-body text-sm font-semibold text-gray-900">
                          {item.value}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
