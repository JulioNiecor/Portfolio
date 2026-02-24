import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://julioniecor.netlify.app',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        }
    ]
}
