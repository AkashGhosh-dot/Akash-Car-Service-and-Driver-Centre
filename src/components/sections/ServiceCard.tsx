import { Phone, Car, User, MapPin, Bus, Users, Package, Truck, Heart, type LucideIcon } from "lucide-react";
import type { Service } from "@/types";
import { BUSINESS } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Car,
  User,
  MapPin,
  Bus,
  Users,
  Package,
  Truck,
  Heart,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] ?? Car;

  return (
    <div className="group flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
        <Icon size={28} className="text-brand-red" aria-hidden="true" />
      </div>

      {/* Name */}
      <h3 className="mt-4 font-heading text-xl font-semibold tracking-wide text-gray-900">
        {service.name}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-gray-600">
        {service.description}
      </p>

      {/* CTA */}
      <a
        href={`tel:+91${BUSINESS.phonePrimary}`}
        className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-medium text-brand-red transition-colors hover:text-brand-red-dark"
      >
        <Phone size={14} aria-hidden="true" />
        Call for Quote
      </a>
    </div>
  );
}
