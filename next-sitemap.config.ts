import type { IConfig } from 'next-sitemap'

const config: IConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://omkarpalika.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'], // Add any paths you want to exclude
  robotsTxtOptions: {
    additionalSitemaps: [
      // Add any additional sitemaps here if needed
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}

export default config
