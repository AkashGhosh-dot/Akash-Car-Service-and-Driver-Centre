import Image from "next/image";
import { Phone, Car, User, Users, Heart, Bus, Package, Truck, type LucideIcon } from "lucide-react";
import { Button, WhatsAppIcon } from "@/components/ui";
import type { Service } from "@/types";
import { BUSINESS } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Car,
  User,
  Users,
  Heart,
  Bus,
  Package,
  Truck,
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
      className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-card-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-xl hover:shadow-black/40"
    >
      {/* Image or placeholder */}
      <div className="relative aspect-[16/9] overflow-hidden">
        {service.imageUrl ? (
          <>
            <Image
              src={service.imageUrl}
              alt={`${service.name} — Akash Car Service & Driver Centre`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-12"
              style={{
                background:
                  "linear-gradient(to top, rgba(17,24,39,0.85) 0%, transparent 100%)",
              }}
            />
          </>
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #0f172a 0%, #111827 60%, rgba(225,29,46,0.08) 100%)",
            }}
          >
            <Icon
              size={isDetail ? 48 : 40}
              className="text-brand-red/50"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3
          className={`font-heading font-semibold tracking-wide text-white ${
            isDetail ? "text-2xl" : "text-lg"
          }`}
        >
          {service.name}
        </h3>

        <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-text-secondary line-clamp-3">
          {service.description}
        </p>

        {isDetail ? (
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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
            className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-medium text-brand-red transition-colors hover:text-brand-red-hover"
          >
            <Phone size={14} aria-hidden="true" />
            Call for Quote
            <span aria-hidden="true" className="ml-0.5 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        )}
      </div>
    </div>
  );
}
