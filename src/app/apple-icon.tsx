import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#DC2626",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 110,
            fontWeight: 800,
            lineHeight: 1,
          }}
        >
          A
        </div>
      </div>
    ),
    { ...size }
  );
}
