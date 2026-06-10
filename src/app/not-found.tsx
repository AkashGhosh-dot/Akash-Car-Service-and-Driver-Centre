import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Page Not Found — Akash Car Service & Driver Centre",
  description: "The page you were looking for doesn't exist. Return home or call us directly.",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white py-24">
      <div className="mx-auto max-w-lg px-4 text-center">
        <p className="font-heading text-8xl font-bold text-brand-red">404</p>
        <h1 className="mt-4 font-heading text-3xl font-bold tracking-wide text-gray-900">
          Page Not Found
        </h1>
        <p className="mt-4 font-body text-base leading-relaxed text-gray-500">
          Looks like you took a wrong turn. Let us get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-red px-6 font-body text-sm font-medium text-white transition-colors hover:bg-brand-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
          >
            Go Home
          </Link>
          <a
            href={`tel:+91${BUSINESS.phonePrimary}`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-brand-red px-6 font-body text-sm font-medium text-brand-red transition-colors hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
          >
            <Phone size={16} aria-hidden="true" />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
