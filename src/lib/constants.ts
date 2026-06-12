import type { NavLink, Service } from "@/types";

export const BUSINESS = {
  name: "Akash Car Service & Driver Centre",
  ownerName: "Tapas Ghosh",
  foundedYear: 2000,
  phones: ["9339865491", "8910068402"],
  phonePrimary: "9339865491",
  whatsapp: "9339865491",
  whatsappUrl:
    "https://wa.me/919339865491?text=Hello%2C%20I%27m%20interested%20in%20your%20car%2Fdriver%20service.%20Please%20share%20details.",
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
    id: "car-rental-service",
    name: "Car Rental Service",
    description:
      "Affordable car hire for any distance, any duration. Self-drive or with a driver — available 24/7 across Kolkata and West Bengal.",
    icon: "Car",
    imageUrl: "/images/services/car-rental-service.png",
  },
  {
    id: "driver-service",
    name: "Driver Service",
    description:
      "Experienced, professional drivers available on-demand for local trips, full-day hire, or outstation journeys. Punctual and reliable, around the clock.",
    icon: "User",
    imageUrl: "/images/services/driver-service.png",
  },
  {
    id: "traveller-service",
    name: "Traveller Service",
    description:
      "Spacious traveller vehicles for family trips, group tours, and outstation travel. Ideal for 8–12 passengers with comfort and safety on long journeys.",
    icon: "Users",
    imageUrl: "/images/services/traveller-service.png",
  },
  {
    id: "wedding-car-service",
    name: "Wedding Car Service",
    description:
      "Make your special day unforgettable with our premium wedding fleet. Decorated cars and convoy arrangements for weddings across Kolkata and West Bengal.",
    icon: "Heart",
    imageUrl: "/images/services/wedding-car-service.png",
  },
  {
    id: "bus-service",
    name: "Bus Service",
    description:
      "Comfortable bus hire for group travel, corporate outings, school trips, and pilgrimages. Local and outstation routes covered across West Bengal.",
    icon: "Bus",
    imageUrl: "/images/services/bus-service.png",
  },
  {
    id: "pickup-van-service",
    name: "Pick Up Van Service",
    description:
      "Reliable pick-up van hire for small loads, quick deliveries, and goods movement across Kolkata. Ideal for furniture shifting, parcels, and local logistics.",
    icon: "Package",
    imageUrl: "/images/services/pickup-van-service.png",
  },
  {
    id: "truck-service",
    name: "Truck Service",
    description:
      "Heavy-duty truck hire for commercial freight, construction materials, and long-distance goods transport. Covering all major routes across West Bengal.",
    icon: "Truck",
    imageUrl: "/images/services/truck-service.png",
  },
];
