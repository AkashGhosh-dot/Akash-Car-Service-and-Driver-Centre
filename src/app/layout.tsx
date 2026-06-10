import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Akash Car Service & Driver Centre",
    default: "Akash Car Service & Driver Centre — Kolkata",
  },
  description:
    "Car rentals, driver hire, bus, truck, and wedding vehicles across Kolkata & West Bengal. Available 24/7. Call or WhatsApp for a quote.",
  metadataBase: new URL("https://akashcarservice.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
