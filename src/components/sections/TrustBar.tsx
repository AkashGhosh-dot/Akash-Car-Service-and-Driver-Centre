import { Check } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function TrustBar() {
  const years = new Date().getFullYear() - BUSINESS.foundedYear;

  const items = [
    `Since ${BUSINESS.foundedYear}`,
    `${years} Years Experience`,
    "Available 24/7",
    "Professional Drivers",
    "Kolkata & West Bengal",
  ];

  return (
    <div className="border-y border-white/10 bg-surface-dark py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <li key={item} className="inline-flex items-center gap-2">
              <Check size={14} className="shrink-0 text-success" aria-hidden="true" />
              <span className="font-body text-sm font-medium text-white/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
