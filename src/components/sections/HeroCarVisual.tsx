import Image from "next/image";

/**
 * Isolated vehicle asset slot. To swap the vehicle image, replace
 * /public/images/hero/hero-car.png with a new file of the same name,
 * or update the `src` prop below. All visual effects are CSS-only and
 * will adapt automatically to any landscape-oriented vehicle shot.
 */
export function HeroCarVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Image
        src="/images/hero/hero-car.png"
        alt="Professional chauffeur standing beside a premium black Mercedes sedan"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Bottom fade — grounds into page below */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-48"
        style={{
          background: "linear-gradient(to top, rgba(7,18,37,0.95) 0%, transparent 100%)",
        }}
      />

      {/* Top fade — blends with header */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background: "linear-gradient(to bottom, rgba(7,18,37,0.5) 0%, transparent 100%)",
        }}
      />

      {/* Headlight glow — warm amber */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 38% 30% at 62% 48%, rgba(255,210,80,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Brand-red ambient glow — lower right */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 80% 92%, rgba(225,29,46,0.18) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
