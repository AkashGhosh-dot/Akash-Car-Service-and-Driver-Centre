"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 focus-visible:outline-none">
            <span className="block font-heading text-2xl font-bold leading-none tracking-wide text-brand-red">
              AKASH
            </span>
            <span className="block font-body text-[10px] font-medium uppercase tracking-widest text-gray-700">
              Car Service &amp; Driver Centre
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-body text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-brand-red"
                    : "text-gray-700 hover:text-brand-red"
                )}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={`tel:+91${BUSINESS.phonePrimary}`}
            className="hidden items-center gap-2 rounded-lg bg-brand-red px-4 py-2 font-body text-sm font-medium text-white transition-colors hover:bg-brand-red-dark md:flex"
          >
            <Phone size={16} aria-hidden="true" />
            {BUSINESS.phonePrimary}
          </a>

          {/* Mobile: hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red md:hidden"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
