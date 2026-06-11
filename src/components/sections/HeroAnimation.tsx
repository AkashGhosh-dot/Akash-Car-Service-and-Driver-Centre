"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button, WhatsAppIcon } from "@/components/ui";
import { BUSINESS } from "@/lib/constants";
import { HeroCarVisual } from "./HeroCarVisual";

const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function HeroAnimation() {
  const reduce = useReducedMotion() ?? false;

  const fadeLeft = (delay: number, duration = 0.7) => ({
    initial: { opacity: reduce ? 1 : 0, x: reduce ? 0 : -24 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: reduce ? 0 : duration, delay: reduce ? 0 : delay, ease: EASING },
  });

  const fadeUp = (delay: number, duration = 0.6) => ({
    initial: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0 : duration, delay: reduce ? 0 : delay, ease: EASING },
  });

  return (
    <div className="relative flex min-h-screen w-full items-center overflow-hidden">
      {/* ── Full-screen background image with slow zoom ── */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={reduce ? { scale: 1 } : { scale: [1, 1.06, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      >
        <HeroCarVisual />
      </motion.div>

      {/* ── Luxury dark overlay — left opaque → right transparent ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,18,37,0.92) 0%, rgba(7,18,37,0.75) 35%, rgba(7,18,37,0.35) 70%, rgba(7,18,37,0.10) 100%)",
        }}
      />

      {/* ── Content — left column ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center text-center md:max-w-[54%] md:items-start md:text-left">
          {/* Badge */}
          <motion.div
            {...fadeLeft(0.05, 0.6)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-2 backdrop-blur-sm"
          >
            <span className="font-body text-sm font-medium uppercase tracking-wider text-brand-gold">
              26 Years of Transport Excellence &nbsp;·&nbsp; Est. {BUSINESS.foundedYear}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeLeft(0.2)}
            className="max-w-xl font-heading text-5xl font-bold leading-tight tracking-wide text-white md:text-6xl lg:text-7xl"
          >
            Your Trusted Transport Partner —{" "}
            <span className="text-brand-red">Since 2000 &bull; 26 Years of Trust</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeLeft(0.4)}
            className="mt-6 max-w-lg font-body text-xl leading-relaxed text-text-secondary"
          >
            24/7 Car Rental, Driver Service, Bus, Traveller, Wedding Vehicles &amp; More across
            Kolkata &amp; West Bengal.
          </motion.p>

          {/* Red accent line */}
          <motion.div
            initial={{ scaleX: reduce ? 1 : 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reduce ? 0 : 0.5, delay: reduce ? 0 : 0.6, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="mt-8 h-px w-16 bg-brand-red"
          />

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.75)}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start"
          >
            <Button
              variant="primary"
              size="lg"
              href={`tel:+91${BUSINESS.phonePrimary}`}
              className="w-full sm:w-auto"
            >
              <Phone size={20} aria-hidden="true" />
              Call Now
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              href={BUSINESS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </motion.div>

          {/* Contact note */}
          <motion.p {...fadeUp(0.9)} className="mt-6 font-body text-sm text-text-muted">
            {BUSINESS.phones[0]} &nbsp;·&nbsp; {BUSINESS.phones[1]}{" "}
            &nbsp;·&nbsp; {BUSINESS.serviceArea}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
