import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Himachal Temples',
    short_name: 'HimachalTemples',
    description: 'District-wise temple discovery across Himachal Pradesh.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#1e3a8a',
  };
}
