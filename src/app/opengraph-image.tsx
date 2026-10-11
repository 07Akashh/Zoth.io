import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "DEMO token sale — live progress, timeline, and participation details";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function SocialPreview() {
  const logo = await readFile(join(process.cwd(), "src/app/apple-icon.png"));
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#0b0303",
        color: "white",
        padding: "64px",
        borderTop: "12px solid #ff4509",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
          fontSize: 40,
        }}
      >
        <img
          src={`data:image/png;base64,${logo.toString("base64")}`}
          width={64}
          height={64}
          alt=""
        />
        <span>DEMO</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ fontSize: 80, fontWeight: 700 }}>Token sale</div>
        <div style={{ fontSize: 30, color: "#bdb1a9" }}>
          Live progress · Sale timeline · Participation details
        </div>
      </div>
      <div style={{ display: "flex", color: "#ff4509", fontSize: 24 }}>
        Explore the DEMO token sale
      </div>
    </div>,
    size,
  );
}
