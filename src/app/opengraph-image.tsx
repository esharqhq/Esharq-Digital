import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Esharq Digital — AI-Powered IT Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #151616 50%, #0d1b1c 100%)",
        fontFamily: "sans-serif",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background:
            "linear-gradient(90deg, transparent, #27DFE9, transparent)",
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(39,223,233,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "white",
            letterSpacing: -3,
            lineHeight: 1,
          }}
        >
          ESHARQ
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "#27DFE9",
            letterSpacing: -3,
            lineHeight: 1,
          }}
        >
          DIGITAL
        </div>
      </div>

      {/* Subtitle */}
      <div
        style={{
          marginTop: 32,
          fontSize: 22,
          color: "rgba(200,238,237,0.6)",
          letterSpacing: 8,
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        AI-Powered IT Agency
      </div>

      {/* Bottom accent */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#27DFE9",
          }}
        />
        <div
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          esharq.com
        </div>
      </div>
    </div>,
    { ...size },
  );
}
