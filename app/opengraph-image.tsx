import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Waintel.ai — WhatsApp AI Agents that close sales for your business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generates the default Open Graph image dynamically.
// Shown when someone shares any Waintel page on WhatsApp, LinkedIn, Twitter, etc.
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 90px",
          background:
            "linear-gradient(135deg, #0a4a3a 0%, #0F6E56 50%, #1D9E75 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top: logo + badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            W
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>Waintel.ai</div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              WhatsApp AI Agent
            </div>
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            Turn WhatsApp into your{" "}
            <span style={{ color: "#a7f3d0" }}>best salesperson.</span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.85)",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            AI agents that qualify leads, take orders, and book appointments — 24/7 in your customers' language.
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <div style={{ fontSize: 18, color: "rgba(255,255,255,0.7)" }}>
            🇵🇰 Built for Pakistan & MENA
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "white",
              padding: "12px 24px",
              borderRadius: 10,
              background: "rgba(255,255,255,0.15)",
            }}
          >
            waintel.io →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
