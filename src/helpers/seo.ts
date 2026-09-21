import { NOME_EMPRESA, TELEFONE_WHATSAPP } from './contato'

/**
 * Configuração central de SEO.
 *
 * Os campos marcados com TODO precisam do dado real antes de publicar —
 * sem o domínio correto, canonical, sitemap e Open Graph apontam para o lugar
 * errado e o Google ignora boa parte do trabalho.
 */

/** Domínio do site. Usado em canonical, sitemap, robots e og:url. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://grama.josuedev.tech'

/**
 * Libera a indexação pelos buscadores.
 *
 * Fica desligado enquanto nome, telefone, CNPJ e domínio forem placeholder:
 * deixar o Google indexar dados fictícios compromete o domínio real depois.
 * Para ligar: NEXT_PUBLIC_INDEXAVEL=true no ambiente.
 */
export const INDEXAVEL = process.env.NEXT_PUBLIC_INDEXAVEL === 'true'

/** Cidades de atuação: âncoras do SEO local, a peça que mais traz cliente. */
export const CIDADES = ['Angatuba', 'Itapetininga', 'Sorocaba'] as const

export const ESTADO = 'SP'
export const CIDADE_SEDE = 'Angatuba'

/** Coordenadas aproximadas de Angatuba – SP, para o LocalBusiness. */
export const GEO = { latitude: -23.4906, longitude: -48.4128 } as const

export const REGIAO_TEXTO = `${CIDADES.join(', ')} e região`

export const DESCRICAO_PADRAO = `Produção própria de grama há mais de 20 anos. Grama Esmeralda, São Carlos e Batatais com entrega em ${REGIAO_TEXTO}. Peça seu orçamento.`

/** Imagem de compartilhamento (WhatsApp, Facebook, LinkedIn). */
export const OG_IMAGE = '/banner_3.jpeg'

export const url = (caminho = '') => `${SITE_URL}${caminho}`

/**
 * Schema.org LocalBusiness: alimenta o painel do Google com telefone,
 * área de atendimento e horário.
 */
export const schemaLocalBusiness = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': url('/#empresa'),
  name: NOME_EMPRESA,
  description: DESCRICAO_PADRAO,
  url: SITE_URL,
  telephone: `+${TELEFONE_WHATSAPP}`,
  image: url(OG_IMAGE),
  address: {
    '@type': 'PostalAddress',
    addressLocality: CIDADE_SEDE,
    addressRegion: ESTADO,
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },
  areaServed: CIDADES.map((cidade) => ({
    '@type': 'City',
    name: cidade,
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '07:00',
      closes: '17:00',
    },
  ],
})

interface ItemBreadcrumb {
  nome: string
  caminho: string
}

/** Breadcrumb: faz o Google mostrar a trilha em vez da URL crua. */
export const schemaBreadcrumb = (itens: ItemBreadcrumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: itens.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.nome,
    item: url(item.caminho),
  })),
})
