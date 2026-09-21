import type { MetadataRoute } from 'next'
import { SITE_URL, INDEXAVEL } from '@/helpers/seo'

export default function robots(): MetadataRoute.Robots {
  // Enquanto o site roda com dados de placeholder, bloqueamos os buscadores:
  // indexar nome, telefone e CNPJ fictícios prejudica o domínio real depois.
  if (!INDEXAVEL) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
