import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ai-response-generator.space"

  // Main pages
  const routes = ["", "/faq"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Template pages
  const templateRoutes = [
    "/templates/email-responses",
    "/templates/customer-support",
    "/templates/content-creation",
    "/templates/social-messaging",
    "/templates/job-applications",
    "/templates/networking",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // FAQ pages
  const faqRoutes = [
    "/faq/how-it-works",
    "/faq/data-security",
    "/faq/customization-options",
    "/faq/response-accuracy",
    "/faq/business-use",
    "/faq/usage-limits",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...routes, ...templateRoutes, ...faqRoutes]
}
