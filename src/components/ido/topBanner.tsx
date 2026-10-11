"use client";
import { useState } from "react";
import { DesignAsset } from "./designAssets";

export function TopBanner() {
  const [shown, setShown] = useState(true);
  if (!shown) return null;
  return (
    <div className="announcement">
      <button
        aria-label="Dismiss announcement"
        onClick={() => setShown(false)}
        className="announcement-close"
      >
        <DesignAsset file="6d101.svg" />
      </button>
      <span>Demo</span>
      <a
        className="announcement-link"
        href="#participate"
        aria-label="Explore the token sale"
      >
        Demo
        <DesignAsset file="100b7.svg" />
      </a>
    </div>
  );
}
