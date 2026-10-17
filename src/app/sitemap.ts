import type { MetadataRoute } from "next";

const SITE = "https://portfolio-juju.saro.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/mentions-legales`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
