export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

  const routes = [
    '',
    '/about',
    '/contact',
    '/articles',
    '/districts',
    '/privacy',
    '/districts/Bilaspur',
    '/districts/Chamba',
    '/districts/Hamirpur',
    '/districts/Kangra',
    '/districts/Kinnaur',
    '/districts/Kullu',
    '/districts/Lahaul-Spiti',
    '/districts/Mandi',
    '/districts/Shimla',
    '/districts/Sirmaur',
    '/districts/Solan',
    '/districts/Una',
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route.startsWith('/districts/') ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
