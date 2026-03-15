import { siteConfig } from '@/config/site'
import { DEFAULT_LOCALE, LOCALE_NAMES, Locale } from '@/i18n/routing'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

type MetadataProps = {
  page?: string
  title?: string
  description?: string
  images?: string[]
  noIndex?: boolean
  locale: Locale
  path?: string
  canonicalUrl?: string
}

export async function constructMetadata({
  page = 'Home',
  title,
  description,
  images = [],
  noIndex = false,
  locale,
  path,
  canonicalUrl,
}: MetadataProps): Promise<Metadata> {
  // get translations
  const t = await getTranslations({ locale, namespace: 'Home' })

  // get page specific metadata translations
  const pageTitle = title || t(`title`)
  const pageDescription = description || t(`description`)

  // build full title
  const finalTitle = page === 'Home'
    ? `${pageTitle} - ${t('tagLine')}`
    : `${pageTitle} | ${t('title')}`

  // build image URLs
  const imageUrls = images.length > 0
    ? images.map(img => ({
      url: img.startsWith('http') ? img : `${siteConfig.url}/${img}`,
      alt: pageTitle,
    }))
    : [{
      url: `${siteConfig.url}/og.png`,
      alt: pageTitle,
    }]

  const resolvedPath = path || '/'
  const pagePath = `${locale === DEFAULT_LOCALE ? '' : `/${locale}`}${resolvedPath === '/' ? '' : resolvedPath}`
  const pageURL = `${siteConfig.url}${pagePath}`
  const canonicalPath = canonicalUrl
    ? `${locale === DEFAULT_LOCALE ? '' : `/${locale}`}${canonicalUrl === '/' ? '' : canonicalUrl}`
    : undefined
  const canonical = canonicalPath ? `${siteConfig.url}${canonicalPath}` : undefined
  const languages =
    Object.keys(LOCALE_NAMES).length > 1
      ? Object.keys(LOCALE_NAMES).reduce((acc, lang) => {
          const localizedPath = canonicalUrl
            ? `${lang === DEFAULT_LOCALE ? '' : `/${lang}`}${canonicalUrl === '/' ? '' : canonicalUrl}`
            : `${lang === DEFAULT_LOCALE ? '' : `/${lang}`}`
          acc[lang] = `${siteConfig.url}${localizedPath}`
          return acc
        }, {} as Record<string, string>)
      : undefined

  return {
    title: finalTitle,
    description: pageDescription,
    keywords: [],
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: 'website',
      title: finalTitle,
      description: pageDescription,
      url: pageURL,
      siteName: t('title'),
      locale: locale,
      images: imageUrls,
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: pageDescription,
      site: pageURL,
      images: imageUrls,
      creator: siteConfig.creator,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
  }
}
