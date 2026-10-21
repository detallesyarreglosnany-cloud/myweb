import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export function renderOg(eyebrow: string, title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0F09",
          padding: "72px",
          color: "#F3F4EE",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#CDBA9C", letterSpacing: 3, textTransform: "uppercase" }}>
          {eyebrow}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 600, lineHeight: 1.08 }}>{title}</div>
          <div style={{ display: "flex", fontSize: 30, color: "#B2B6A8", lineHeight: 1.4 }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#CDBA9C" }}>
          <div style={{ display: "flex", width: 48, height: 2, background: "#CDBA9C" }} />
          Daniela Silva
        </div>
      </div>
    ),
    ogSize,
  );
}
