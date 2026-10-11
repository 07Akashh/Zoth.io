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
    <footer className={"mt-[37px] overflow-hidden max-[761px]:mt-2.5"}>
      <div
        className={
          "w-[min(var(--content),_calc(100%_-_64px))] mx-auto max-[761px]:w-[calc(100%_-_36px)] relative min-h-[1007.308px] max-[951px]:min-h-250 max-[761px]:min-h-200 max-[511px]:min-h-190"
        }
      >
        <div className={"py-0 px-8 max-[761px]:py-0 max-[761px]:px-0"}>
          <div
            className={
              "grid grid-cols-[minmax(345px,_1fr)_293.667px_max-content] gap-8 min-h-[197.886px] max-[1151px]:grid-cols-[1fr_160px_max-content] max-[951px]:grid-cols-[1fr_1fr] max-[951px]:gap-8 max-[511px]:gap-[32px_15px] max-[761px]:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)]"
            }
          >
            <div
              className={
                "w-[345px] [&_>_p]:text-[13.6px] [&_>_p]:leading-[20px] [&_>_p]:max-w-[245px] [&_>_p]:text-[#ffffff80] max-[951px]:[grid-column:span_2] max-[511px]:w-full max-[761px]:w-full max-[761px]:max-w-[345px]"
              }
            >
              <p className={"muted text-muted"}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed
              </p>
              <div
                className={
                  "flex gap-4 items-center mt-3 h-4 max-[761px]:h-11 max-[761px]:gap-2"
                }
              >
                {socials.map(([name, file]) => (
                  <button
                    className={
                      "h-4 min-w-4 py-0 px-0 [border:0] bg-transparent [transition:transform_var(--duration-release)_var(--ease-out),_background-color_150ms_ease,_color_150ms_ease] hover:opacity-[0.7] active:[transform:scale(0.97)] active:[transition-duration:var(--duration-press),_150ms,_150ms] motion-reduce:transform-none! motion-reduce:[transition:background-color_150ms_ease,_color_150ms_ease] max-[761px]:h-11 max-[761px]:w-11 max-[761px]:grid max-[761px]:place-items-center [@media(hover:_none)]:hover:opacity-[1]"
                    }
                    aria-label={`${name} — demo link`}
                    key={name}
                    onClick={() =>
                      toast.info(`${name} URL hasn't been provided yet.`)
                    }
                  >
                    {name === "YouTube" ? (
                      <span
                        className={
                          "[mask-image:url('/artwork/youTubeMask.svg')] block h-4 w-4 [mask-size:16px_16px] relative overflow-hidden [&_>_img]:absolute [&_>_img]:top-[2.664px] [&_>_img]:left-0 [&_>_img]:max-w-none"
                        }
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
                className={
                  "h-[49.886px] flex mt-12 w-[345px] [&_input]:bg-[#150a05] [&_input]:min-w-0 [&_input]:w-[220.548px] [&_input]:[border:0] [&_input]:py-0 [&_input]:px-[15.75px] [&_input]:text-white [&_input]:text-[10px] [&_input::placeholder]:text-[#57656c] [&_>_button]:bg-[#ff5409] [&_>_button]:w-[124.452px] [&_>_button]:text-[10.502px] [&_>_button]:tracking-[1.6804px] [&_>_button]:font-semibold [&_>_button]:[transition:transform_var(--duration-release)_var(--ease-out),_background-color_150ms_ease,_color_150ms_ease] max-[511px]:w-full [&_>_button:active]:[transform:scale(0.97)] [&_>_button:active]:[transition-duration:var(--duration-press),_150ms,_150ms] max-[761px]:w-full motion-reduce:[&_>_button]:transform-none! motion-reduce:[&_>_button]:[transition:background-color_150ms_ease,_color_150ms_ease] max-[761px]:[&_input]:text-[16px] max-[761px]:[&_>_button]:text-[12px]"
                }
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.info(
                    "Demo subscription preview. Nothing has been sent.",
                  );
                  setEmail("");
                }}
              >
                <label htmlFor="newsletter" className={"sr-only"}>
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
            <div
              className={
                "[&_h3]:text-[18.463px] [&_h3]:font-medium [&_h3]:leading-[20.68px] [&_h3]:mb-6 [&_a]:block [&_a]:text-[#ffffff80] [&_a]:text-[16.155px] [&_a]:leading-[20.68px] [&_a]:mt-2 [&_a:hover]:text-orange max-[761px]:min-w-0"
              }
            >
              <h3>DEMO</h3>
              <a href="#participate" aria-label="Demo — Sale">
                Demo
              </a>
              <a href="#timeline" aria-label="Demo — Timeline">
                Demo
              </a>
            </div>
            <div
              className={
                "[&_h3]:text-[18.463px] [&_h3]:font-medium [&_h3]:leading-[20.68px] [&_h3]:mb-6 [&_a]:block [&_a]:text-[#ffffff80] [&_a]:text-[16.155px] [&_a]:leading-[20.68px] [&_a]:mt-2 [&_a:hover]:text-orange max-[761px]:min-w-0"
              }
            >
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
          <div
            className={
              "flex items-end justify-between gap-8 mt-12 text-[14px] text-[#a8a8aa] max-[761px]:mt-[45px] max-[511px]:gap-[15px] max-[511px]:items-start max-[511px]:flex-wrap"
            }
          >
            <p
              className={
                "text-[12px] leading-[20px] max-w-[603px] max-[511px]:text-[11px]"
              }
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
              ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
              tempor incididunt ut labore et dolore magna
            </p>
            <span>[XX]</span>
          </div>
        </div>
        <div
          className={
            "absolute bottom-[196.81px] left-0 [transform:translateY(50%)] text-[475.581px] font-semibold tracking-[-10px] leading-[1.2] whitespace-nowrap text-[#ff45091a] select-none [&_>_span]:text-orange max-[1151px]:text-[28vw] max-[761px]:bottom-17.5 max-[761px]:text-[27.2vw] max-[761px]:tracking-[-0.02em] max-[511px]:text-[27vw] max-[511px]:bottom-10"
          }
          aria-hidden="true"
        >
          <span>D</span>EMO
        </div>
      </div>
    </footer>
  );
}
