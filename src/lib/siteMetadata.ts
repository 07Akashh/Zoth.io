const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL;
const deploymentHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const siteUrl = new URL(
  configuredOrigin ??
    (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000"),
);
export const siteTitle = "DEMO — Token Sale";
export const siteDescription =
  "Explore the DEMO token sale, live funding progress, sale timeline, and participation details.";
