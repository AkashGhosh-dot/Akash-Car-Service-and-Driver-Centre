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
    <section
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-24"
      style={{
        background: "linear-gradient(135deg, #071225 0%, #0A1833 60%, #10244A 100%)",
      }}
    >
      {/* Ambient glow behind the 404 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-lg px-4 text-center">
        {/* Large 404 */}
        <p className="font-heading text-[9rem] font-bold leading-none tracking-tight text-brand-red md:text-[11rem]">
          404
        </p>

        {/* Heading */}
        <h1 className="mt-4 font-heading text-3xl font-semibold tracking-wide text-white md:text-4xl">
          Page Not Found
        </h1>

        {/* Message */}
        <p className="mx-auto mt-4 max-w-sm font-body text-base leading-relaxed text-text-secondary">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>

        {/* Accent line */}
        <div className="mx-auto mt-6 h-px w-12 bg-brand-red" />

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-red px-8 font-body text-sm font-medium text-white transition-colors hover:bg-brand-red-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
          >
            Back to Home
          </Link>
          <a
            href={`tel:+91${BUSINESS.phonePrimary}`}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/20 px-8 font-body text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
          >
            <Phone size={16} aria-hidden="true" />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
