import type { Service } from "@/types";
import { BUSINESS, SITE } from "@/lib/constants";

export function getLocalBusinessSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    telephone: BUSINESS.phones.map((p) => `+91${p}`),
    email: BUSINESS.email,
    url: SITE.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.pincode,
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: [BUSINESS.address.city, BUSINESS.address.state],
    priceRange: "₹₹",
  };
}

export function getServiceSchema(service: Service): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
    },
    areaServed: BUSINESS.serviceArea,
  };
}
