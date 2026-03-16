import { siteConfig } from '@/config/site'
import type { MetadataRoute } from 'next'

// 静态导出模式配置
export const dynamic = 'force-static'

const siteUrl = siteConfig.url

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/api/',
        '/auth/',
        '/dashboard/',
        '/_next/',
        '/assets/',
        '/error',
        '/*/404',
        '/*/500',
        '/*/403',
        '/*/401',
        '/*/400',
        '/cdn-cgi/',
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`
  }
}