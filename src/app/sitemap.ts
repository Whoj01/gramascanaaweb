import type { MetadataRoute } from 'next'
import { grassInfo, slugDaGrama } from '@/helpers/data'
import { SITE_URL } from '@/helpers/seo'

const USOS = ['sitios', 'playgrounds', 'pracas', 'jardins']

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date()

  const fixas: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/gramas`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/obras`, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${SITE_URL}/transporte`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    { url: `${SITE_URL}/sobre-nos`, changeFrequency: 'yearly', priority: 0.6 },
  ]

  const especies: MetadataRoute.Sitemap = grassInfo.map((grama) => ({
    url: `${SITE_URL}/gramas/${slugDaGrama(grama.name)}`,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const recomendacoes: MetadataRoute.Sitemap = USOS.map((uso) => ({
    url: `${SITE_URL}/gramas/recomendacoes/${uso}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...fixas, ...especies, ...recomendacoes].map((rota) => ({
    ...rota,
    lastModified: agora,
  }))
}
