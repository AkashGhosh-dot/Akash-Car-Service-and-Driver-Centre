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
      className={`flex w-full flex-col items-center justify-center rounded-xl bg-gray-100 ${height} p-8 text-center`}
    >
      <MapPin size={36} className="text-brand-red" aria-hidden="true" />
      <p className="mt-3 font-heading text-xl font-semibold text-gray-900">
        New Barrackpore, Kolkata
      </p>
      <p className="mt-1 font-body text-sm text-gray-500">{BUSINESS.address.full}</p>
      <p className="mt-4 font-body text-xs text-gray-400">Map coming soon</p>
    </div>
  );
}
