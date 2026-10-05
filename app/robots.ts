import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://isaque-claudino-dos-santos.github.io/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
