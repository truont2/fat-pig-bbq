import { fetchAPI } from "./api"

import delve from "dlv";
// This function simply return the slug and the locale of the request with default values
export function getLocalizedParams(query) {
  const lang = delve(query, "lang");
  const slug = delve(query, "slug");
  return { slug: slug || "", locale: lang || "en" };
}

export async function getLocalizedPage(targetLocale, pageContext) {
  const localization = pageContext.localizations.data.find(
    (localization) => localization.attributes.locale === targetLocale
  )
  const localePage = await fetchAPI(`/pages/${localization.id}`)
  return localePage
}

export function localizePath(page) {
  const { locale, defaultLocale, slug } = page

  if (locale === defaultLocale) {
    // The default locale is not prefixed
    return `/${slug}`
  }

  // The slug should have a localePrefix
  return `/${locale}/${slug}`
}

export function getLocalizedPaths(page) {
  const paths = page.locales.map((locale) => {
    return {
      locale: locale,
      href: localizePath({ ...page, locale }),
    }
  })

  return paths
}
