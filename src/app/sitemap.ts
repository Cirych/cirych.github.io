import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cirych.com',
      lastModified: new Date(),
    },
  ];
}
