"use client";
import { useState } from "react";
import { toast } from "sonner";
import { DesignAsset } from "./designAssets";

const socials = [
  ["X", "/icons/xSocial.svg"],
  ["YouTube", "/icons/youTube.svg"],
  ["Discord", "/icons/discord.svg"],
  ["LinkedIn", "/icons/linkedIn.svg"],
  ["Medium", "/icons/medium.svg"],
] as const;
export function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="site-footer">
      <div className="container-main footer-layout">
        <div className="footer-content">
          <div className="footer-columns">
            <div className="footer-news">
              <p className="muted">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed
              </p>
              <div className="social-row">
                {socials.map(([name, file]) => (
                  <button
                    className="social-icon"
                    aria-label={`${name} — demo link`}
                    key={name}
                    onClick={() =>
                      toast.info(`${name} URL hasn't been provided yet.`)
                    }
                  >
                    {name === "YouTube" ? (
                      <span
                        className="youtube-mark"
                        style={{ maskImage: "url(/artwork/youTubeMask.svg)" }}
                      >
                        <DesignAsset src={file} loading="lazy" />
                      </span>
                    ) : (
                      <DesignAsset src={file} loading="lazy" />
                    )}
                  </button>
                ))}
              </div>
              <form
                className="subscription"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.info(
                    "Demo subscription preview. Nothing has been sent.",
                  );
                  setEmail("");
                }}
              >
                <label htmlFor="newsletter" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="[XX]"
                  required
                />
                <button type="submit" aria-label="DEMO — Subscribe">
                  DEMO
                </button>
              </form>
            </div>
            <div className="footer-link-column">
              <h3>DEMO</h3>
              <a href="#participate" aria-label="Demo — Sale">
                Demo
              </a>
              <a href="#timeline" aria-label="Demo — Timeline">
                Demo
              </a>
            </div>
            <div className="footer-link-column">
              <h3>DEMO</h3>
              <a href="#read-before" aria-label="Lorem ipsum — Sale guide">
                Lorem ipsum
              </a>
              <a href="#sale-details" aria-label="Lorem ipsum — Token details">
                Lorem ipsum
              </a>
              <a href="#top" aria-label="Lorem ipsum — Back to top">
                Lorem ipsum
              </a>
            </div>
          </div>
          <div className="footer-legal-row">
            <p className="footer-legal">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
              ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
              tempor incididunt ut labore et dolore magna
            </p>
            <span>[XX]</span>
          </div>
        </div>
        <div className="mega-wordmark" aria-hidden="true">
          <span>D</span>EMO
        </div>
      </div>
    </footer>
  );
}
