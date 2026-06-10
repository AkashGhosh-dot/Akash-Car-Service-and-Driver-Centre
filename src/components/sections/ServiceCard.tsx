import { Phone, Car, User, MapPin, Bus, Users, Package, Truck, Heart, type LucideIcon } from "lucide-react";
import { Button, WhatsAppIcon } from "@/components/ui";
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
  variant?: "compact" | "detail";
}

export function ServiceCard({ service, variant = "compact" }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] ?? Car;
  const isDetail = variant === "detail";

  return (
    <div
      id={service.id}
      className="group flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Icon */}
      <div
        className={`flex items-center justify-center rounded-lg bg-red-50 ${isDetail ? "h-14 w-14" : "h-12 w-12"}`}
      >
        <Icon size={isDetail ? 32 : 28} className="text-brand-red" aria-hidden="true" />
      </div>

      {/* Name */}
      <h3
        className={`mt-4 font-heading font-semibold tracking-wide text-gray-900 ${isDetail ? "text-2xl" : "text-xl"}`}
      >
        {service.name}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-gray-600">
        {service.description}
      </p>

      {/* CTA(s) */}
      {isDetail ? (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button
            variant="primary"
            size="sm"
            href={`tel:+91${BUSINESS.phonePrimary}`}
            className="flex-1"
          >
            <Phone size={15} aria-hidden="true" />
            Call for Quote
          </Button>
          <Button
            variant="whatsapp"
            size="sm"
            href={BUSINESS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </Button>
        </div>
      ) : (
        <a
          href={`tel:+91${BUSINESS.phonePrimary}`}
          className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-medium text-brand-red transition-colors hover:text-brand-red-dark"
        >
          <Phone size={14} aria-hidden="true" />
          Call for Quote
        </a>
      )}
    </div>
  );
}
