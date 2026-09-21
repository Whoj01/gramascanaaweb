import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GrassInfo } from '@/components/GrassPage/GrassInfo'
import { acharGramaPorSlug, grassInfo, slugDaGrama } from '@/helpers/data'
import { NOME_EMPRESA } from '@/helpers/contato'
import {
  REGIAO_TEXTO,
  schemaBreadcrumb,
  url as urlAbsoluta,
} from '@/helpers/seo'

/** Capitaliza respeitando acentos: /\b\w/ do JS não cobre "ã", "é" etc. */
const capitalizar = (texto: string) =>
  texto
    .split(' ')
    .map((palavra) =>
      palavra ? palavra[0].toLocaleUpperCase('pt-BR') + palavra.slice(1) : '',
    )
    .join(' ')

export function generateStaticParams() {
  return grassInfo.map((grama) => ({ slug: slugDaGrama(grama.name) }))
}

/** Title e description próprios por espécie: é a busca com maior intenção de compra. */
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const grama = acharGramaPorSlug(params.slug)

  if (!grama) return { title: 'Grama não encontrada' }

  const nome = capitalizar(grama.name)
  const caminho = `/gramas/${slugDaGrama(grama.name)}`
  const descricao = `Grama ${nome}: ${grama.features
    .slice(0, 3)
    .join(', ')
    .toLowerCase()}. Veja cuidados, indicações de uso e peça orçamento. Entrega em ${REGIAO_TEXTO}.`

  return {
    title: `Grama ${nome}: características, cuidados e preço`,
    description: descricao,
    alternates: { canonical: caminho },
    openGraph: {
      type: 'article',
      title: `Grama ${nome} | ${NOME_EMPRESA}`,
      description: descricao,
      url: caminho,
      images: [{ url: grama.pictures[0], alt: `Grama ${nome}` }],
    },
  }
}

export default function MoreAboutGrass({
  params,
}: {
  params: { slug: string }
}) {
  const grama = acharGramaPorSlug(params.slug)

  // slug inválido: antes caía num non-null assertion e quebrava a página
  if (!grama) notFound()

  const nome = capitalizar(grama.name)
  const caminho = `/gramas/${slugDaGrama(grama.name)}`

  // Product faz o Google exibir o item como produto, com foto e marca
  const schemaProduto = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Grama ${nome}`,
    description: grama.description,
    image: grama.pictures.map((foto) => urlAbsoluta(foto)),
    brand: { '@type': 'Brand', name: NOME_EMPRESA },
    category: 'Grama natural em placa',
    additionalProperty: grama.features.map((feature) => ({
      '@type': 'PropertyValue',
      name: 'Característica',
      value: feature,
    })),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'BRL',
      url: urlAbsoluta(caminho),
      seller: { '@type': 'Organization', name: NOME_EMPRESA },
    },
  }

  const schemaTrilha = schemaBreadcrumb([
    { nome: 'Início', caminho: '/' },
    { nome: 'Gramas', caminho: '/gramas' },
    { nome: `Grama ${nome}`, caminho },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProduto) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaTrilha) }}
      />

      <GrassInfo grass={grama} />
    </>
  )
}
