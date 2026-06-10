import type { NavLink, Service } from "@/types";

export const BUSINESS = {
  name: "Akash Car Service & Driver Centre",
  ownerName: "Tapas Ghosh",
  phones: ["9339865491", "8910068402"],
  phonePrimary: "9339865491",
  whatsapp: "9339865491",
  whatsappUrl:
    "https://wa.me/919339865491?text=Hello%2C%20I%27m%20interested%20in%20your%20car%2Fdriver%20service.%20Please%20share%20details%20and%20pricing.",
  email: "akashbusinessghosh@gmail.com",
  address: {
    street: "New Barrackpore",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700133",
    full: "New Barrackpore, Kolkata, West Bengal – 700133",
  },
  hours: "Open 24 Hours, 7 Days a Week",
  serviceArea: "Kolkata & West Bengal",
  mapEmbedUrl: null as string | null,
} as const;

export const SITE = {
  url: "https://akashcarservice.in",
  ogImage: "/opengraph-image",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    id: "car-rentals",
    name: "Car Rentals",
    description:
      "Affordable car hire for any distance, any duration. Self-drive or with a driver — available 24/7 across Kolkata and West Bengal.",
    icon: "Car",
    imageUrl: "/images/services/car-rentals.jpg",
  },
  {
    id: "driver-service",
    name: "Driver Service",
    description:
      "Experienced, professional drivers available on-demand for local trips, full-day hire, or outstation journeys. Punctual and reliable, around the clock.",
    icon: "User",
    imageUrl: "/images/services/driver-service.jpg",
  },
  {
    id: "transportation-service",
    name: "Transportation Service",
    description:
      "Safe, comfortable point-to-point transportation for individuals and groups across Kolkata and all of West Bengal. Airport transfers, corporate travel, and more.",
    icon: "MapPin",
    imageUrl: "/images/services/transportation.jpg",
  },
  {
    id: "bus-service",
    name: "Bus Service",
    description:
      "Comfortable bus hire for group travel, corporate outings, school trips, and pilgrimages. Local and outstation routes covered across West Bengal.",
    icon: "Bus",
    imageUrl: "/images/services/bus-service.jpg",
  },
  {
    id: "traveller-service",
    name: "Traveller Service",
    description:
      "Spacious traveller vehicles for family trips, group tours, and outstation travel. Ideal for 8–12 passengers with comfort and safety on long journeys.",
    icon: "Users",
    imageUrl: "/images/services/traveller-service.jpg",
  },
  {
    id: "tempo-service",
    name: "Tempo Service",
    description:
      "Dependable tempo hire for local goods movement, home shifting, and logistics. Serving Kolkata and surrounding areas with prompt, careful service.",
    icon: "Package",
    imageUrl: "/images/services/tempo-service.jpg",
  },
  {
    id: "truck-service",
    name: "Truck Service",
    description:
      "Heavy-duty truck hire for commercial freight, construction materials, and long-distance goods transport. Covering all major routes across West Bengal.",
    icon: "Truck",
    imageUrl: "/images/services/truck-service.jpg",
  },
  {
    id: "wedding-vehicle-services",
    name: "Wedding Vehicle Services",
    description:
      "Make your special day unforgettable with our premium wedding fleet. Decorated cars and convoy arrangements for weddings across Kolkata and West Bengal.",
    icon: "Heart",
    imageUrl: "/images/services/wedding-vehicles.jpg",
  },
];
