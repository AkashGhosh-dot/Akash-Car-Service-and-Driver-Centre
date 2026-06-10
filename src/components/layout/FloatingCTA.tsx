import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui";
import { BUSINESS } from "@/lib/constants";

export function FloatingCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex h-14 shadow-[0_-2px_8px_rgba(0,0,0,0.15)] md:hidden"
      role="complementary"
      aria-label="Quick contact"
    >
      <a
        href={`tel:+91${BUSINESS.phonePrimary}`}
        className="flex flex-1 items-center justify-center gap-2 bg-brand-red font-body text-sm font-medium text-white transition-colors hover:bg-brand-red-dark"
      >
        <Phone size={18} aria-hidden="true" />
        Call Now
      </a>
      <a
        href={BUSINESS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] font-body text-sm font-medium text-white transition-colors hover:bg-[#128C7E]"
      >
        <WhatsAppIcon className="h-[18px] w-[18px]" />
        WhatsApp
      </a>
    </div>
  );
}
