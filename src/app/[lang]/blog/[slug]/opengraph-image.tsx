import { ImageResponse } from "next/og";
import { getPost, getPostCopy } from "@/lib/blog/posts";
import type { Language } from "@/lib/dictionaries";

export const runtime = "nodejs";
export const alt = "Esharq Journal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const post = getPost(slug);
  const title = post
    ? getPostCopy(post, lang as Language).title
    : "Esharq Journal";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #151616 50%, #0d1b1c 100%)",
        fontFamily: "sans-serif",
      }}
    >
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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          color: "#27DFE9",
          fontSize: 16,
          letterSpacing: 6,
          textTransform: "uppercase",
          fontWeight: 800,
        }}
      >
        <div style={{ width: 28, height: 2, background: "#27DFE9" }} />
        <span>Esharq · Journal</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "white",
            letterSpacing: -1.5,
            lineHeight: 1.08,
            fontStyle: "italic",
            textTransform: "uppercase",
          }}
        >
          {title}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 14,
          color: "rgba(200,238,237,0.5)",
          letterSpacing: 4,
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        <span>esharq.com</span>
        <span>AI-Powered IT Agency</span>
      </div>
    </div>,
    { ...size },
  );
}
