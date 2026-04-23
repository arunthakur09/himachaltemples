import type { MetadataRoute } from 'next';
import { getAllDistrictSlugs } from '@/data/districts';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    '', '/about', '/contact', '/articles', '/districts', '/privacy', '/search',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.6,
  }));

  const districtRoutes: MetadataRoute.Sitemap = getAllDistrictSlugs().map((slug) => ({
    url: `${siteUrl}/districts/${slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...districtRoutes];
}
