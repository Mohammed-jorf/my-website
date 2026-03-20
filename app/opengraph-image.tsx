import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/site";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 15% 20%, rgba(13,95,79,0.25), transparent 30%), #f5f4ed",
          color: "#1f2421",
          padding: "72px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "2px solid #d4d8d3",
            borderRadius: "24px",
            padding: "44px",
            width: "100%",
            background: "white"
          }}
        >
          <span style={{ fontSize: 34, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Portfolio
          </span>
          <h1 style={{ fontSize: 72, margin: "22px 0 12px" }}>{siteConfig.name}</h1>
          <p style={{ fontSize: 32, color: "#5a645f", margin: 0 }}>{siteConfig.description}</p>
        </div>
      </div>
    ),
    size
  );
}
