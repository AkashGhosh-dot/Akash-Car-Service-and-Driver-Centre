import { MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface MapEmbedProps {
  src?: string | null;
  height?: string;
}

export function MapEmbed({ src, height = "h-72 md:h-96" }: MapEmbedProps) {
  if (src) {
    return (
      <div className={`w-full overflow-hidden rounded-xl ${height}`}>
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${BUSINESS.name} — ${BUSINESS.address.full}`}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex w-full flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm ${height} p-8 text-center`}
    >
      <MapPin size={36} className="text-brand-red" aria-hidden="true" />
      <p className="mt-3 font-heading text-xl font-semibold text-white">
        New Barrackpore, Kolkata
      </p>
      <p className="mt-1 font-body text-sm text-text-secondary">{BUSINESS.address.full}</p>
      <p className="mt-4 font-body text-xs text-text-muted">Map coming soon</p>
    </div>
  );
}
