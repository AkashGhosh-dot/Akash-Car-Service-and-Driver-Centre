import { Clock, MapPin, Car, Shield, CheckCircle, Award, type LucideIcon } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface USPItem {
  icon: LucideIcon;
  title: string;
  description: string;
  gold?: boolean;
}

interface WhyChooseUsProps {
  limit?: number;
}

export function WhyChooseUs({ limit }: WhyChooseUsProps) {
  const years = new Date().getFullYear() - BUSINESS.foundedYear;

  const USP_ITEMS: USPItem[] = [
    {
      icon: Award,
      title: `${years} Years of Transport Excellence`,
      description: `Serving Kolkata and West Bengal since ${BUSINESS.foundedYear}. Over two decades of trusted, continuous transport service that competitors simply cannot match.`,
      gold: true,
    },
    {
      icon: Clock,
      title: "Available 24/7",
      description: "We never close. Call or WhatsApp any time, day or night.",
    },
    {
      icon: MapPin,
      title: "Wide Service Area",
      description: "We cover all of Kolkata and West Bengal.",
    },
    {
      icon: Car,
      title: "Every Vehicle Type",
      description:
        "Cars, buses, travellers, pick-up vans, trucks, and wedding fleets under one roof.",
    },
    {
      icon: Shield,
      title: "Experienced & Reliable",
      description: "Professional drivers and well-maintained vehicles you can count on.",
    },
    {
      icon: CheckCircle,
      title: "No Hidden Charges",
      description: "Transparent quotes over call or WhatsApp before you book.",
    },
  ];

  const items = limit ? USP_ITEMS.slice(0, limit) : USP_ITEMS;

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background:
          "linear-gradient(135deg, #0F2D6B 0%, #163A70 50%, #10244A 100%)",
      }}
    >
      {/* Ambient glow — top centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Ambient glow — bottom right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 90% 100%, rgba(212,160,23,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center">
          <span className="font-body text-sm font-medium uppercase tracking-wider text-brand-gold">
            Why Choose Us
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-wide text-white md:text-4xl">
            Why Choose Akash?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-body text-base text-text-secondary">
            Over {years} years of continuous service across Kolkata — thousands of customers trust
            us for reliable, on-time transport every single day.
          </p>
        </div>

        {/* USP grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
                    item.gold ? "bg-brand-gold" : "bg-brand-red"
                  }`}
                >
                  <Icon size={22} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold tracking-wide text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-body text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
