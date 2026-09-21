import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Recomendations } from '@/components/GrassPage/Recomendation'
import { grassInfo } from '@/helpers/data'
import { NOME_EMPRESA } from '@/helpers/contato'
import { REGIAO_TEXTO } from '@/helpers/seo'

const USOS: Record<string, string> = {
  pracas: 'praças',
  jardins: 'jardins',
  playgrounds: 'playgrounds',
  sitios: 'sítios e chácaras',
  campos: 'campos',
}

export function generateStaticParams() {
  return Object.keys(USOS).map((slug) => ({ slug }))
}

/** Páginas de uso capturam buscas do tipo "grama para playground". */
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const rotulo = USOS[params.slug]

  if (!rotulo) return { title: 'Recomendação não encontrada' }

  const descricao = `Qual grama usar em ${rotulo}? Veja as espécies indicadas, com características e cuidados. Entrega em ${REGIAO_TEXTO}.`

  return {
    title: `Melhor grama para ${rotulo}`,
    description: descricao,
    alternates: { canonical: `/gramas/recomendacoes/${params.slug}` },
    openGraph: {
      title: `Melhor grama para ${rotulo} | ${NOME_EMPRESA}`,
      description: descricao,
      url: `/gramas/recomendacoes/${params.slug}`,
    },
  }
}

export default function MoreAboutGrass({
  params,
}: {
  params: { slug: string }
}) {
  if (!USOS[params.slug]) notFound()

  const grams = grassInfo.filter((grass) =>
    grass.indicate.includes(params.slug),
  )

  return <Recomendations grams={grams} slug={params.slug} />
}
