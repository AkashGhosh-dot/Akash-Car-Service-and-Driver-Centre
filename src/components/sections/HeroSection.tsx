import { HeroAnimation } from "./HeroAnimation";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #071225 0%, #10244A 50%, #0A1833 100%)",
      }}
    >
      <HeroAnimation />
    </section>
  );
}
