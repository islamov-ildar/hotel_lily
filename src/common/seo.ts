import { useHead } from '@unhead/vue'
import hero from '@/assets/generated/hero-1600.webp'

export const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')
const title = 'Отель «Лилия» в Гудауте — номера, цены и отдых у моря'
const description = 'Отель «Лилия» в Гудауте, Абхазия: стандартные и семейные номера, полулюкс с видом на море. Цены, фотографии, условия проживания и контакты для бронирования.'

export function useHomeSeo() {
  useHead({
    title,
    htmlAttrs: { lang: 'ru' },
    meta: [
      { name: 'description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'ru_RU' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      ...(siteUrl ? [
        { property: 'og:url', content: `${siteUrl}/` },
        { property: 'og:image', content: new URL(hero, siteUrl).href },
      ] : []),
    ],
    link: siteUrl ? [{ rel: 'canonical', href: `${siteUrl}/` }] : [],
    script: [{ type: 'application/ld+json', children: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Hotel',
      name: 'Отель «Лилия»', description,
      telephone: '+7-968-076-55-27', email: 'asmatka2008@mail.ru',
      address: { '@type': 'PostalAddress', streetAddress: 'ул. Пушкина, 2', addressLocality: 'Гудаута', addressRegion: 'Абхазия' },
      ...(siteUrl ? { url: `${siteUrl}/`, image: new URL(hero, siteUrl).href } : {}),
    }) }],
  })
}
