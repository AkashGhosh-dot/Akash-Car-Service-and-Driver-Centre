import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${BUSINESS.name} — ${BUSINESS.serviceArea}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#DC2626",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          AKASH
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "rgba(255,255,255,0.92)",
            marginTop: 20,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Car Service &amp; Driver Centre
        </div>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 4,
            background: "rgba(255,255,255,0.4)",
            borderRadius: 2,
            marginTop: 36,
          }}
        />

        {/* Location + hours */}
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.75)",
            marginTop: 32,
            letterSpacing: "0.04em",
            textAlign: "center",
          }}
        >
          Kolkata &amp; West Bengal · Available 24/7
        </div>
      </div>
    ),
    { ...size }
  );
}
