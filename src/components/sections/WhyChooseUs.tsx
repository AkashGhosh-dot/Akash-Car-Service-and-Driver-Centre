import { Clock, MapPin, Car, Shield, CheckCircle, Award, type LucideIcon } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface USPItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  limit?: number;
}

export function WhyChooseUs({ limit }: WhyChooseUsProps) {
  const years = new Date().getFullYear() - BUSINESS.foundedYear;

  const USP_ITEMS: USPItem[] = [
    {
      icon: Award,
      title: `${years} Years of Experience`,
      description: `Serving Kolkata and West Bengal since ${BUSINESS.foundedYear}. Over two decades of trusted, continuous transport service that competitors simply cannot match.`,
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
          "linear-gradient(150deg, #050E1F 0%, #0A1830 35%, #0E2248 65%, #0B1D40 100%)",
      }}
    >
      {/* ── Background depth layers — referencing luminous blue gradient ── */}

      {/* Top-right luminous zone — the bright white-silver glow from the reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 58% 52% at 88% 2%, rgba(148,200,255,0.28) 0%, transparent 65%)",
        }}
      />

      {/* Top-left dark pool — the deep navy corner in the reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 42% 38% at 2% 3%, rgba(5,10,28,0.65) 0%, transparent 55%)",
        }}
      />

      {/* Sky-blue ambient — centre-left, the main blue zone in the reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 58% at 25% 65%, rgba(56,140,246,0.18) 0%, transparent 68%)",
        }}
      />

      {/* Cyan bottom glow — the light aqua at the bottom of the reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 78% 44% at 65% 100%, rgba(96,186,255,0.16) 0%, transparent 62%)",
        }}
      />

      {/* Edge vignette — keeps card text readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 110% 90% at 50% 50%, transparent 38%, rgba(5,10,20,0.50) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center">
          <span className="font-body text-sm font-medium uppercase tracking-wider text-brand-red">
            Why Us
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-wide text-white">
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
            const isExperience = item.icon === Award;
            return (
              <div key={item.title} className="flex gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
                    isExperience ? "bg-brand-gold" : "bg-brand-red"
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

