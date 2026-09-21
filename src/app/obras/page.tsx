import type { Metadata } from 'next'
import { NOME_EMPRESA } from '@/helpers/contato'
import { REGIAO_TEXTO } from '@/helpers/seo'
import { FirstSection } from '@/components/FirstSection'
import MainContainer from '@/components/MainContainer'
import { Obras } from '@/components/Obras'

export const metadata: Metadata = {
  title: 'Obras entregues',
  description: `Playgrounds, condomínios, praças e taludes que receberam nossa grama em ${REGIAO_TEXTO}. Veja a espécie usada e a metragem de cada obra.`,
  alternates: { canonical: '/obras' },
  openGraph: {
    title: `Obras entregues | ${NOME_EMPRESA}`,
    description: `Projetos de gramado entregues em ${REGIAO_TEXTO}.`,
    url: '/obras',
  },
}

export default function ObrasPage() {
  return (
    <MainContainer>
      <FirstSection
        title="Obras entregues"
        subtitle="Playgrounds, condomínios, praças e taludes que já receberam grama cultivada por nós."
      />

      <Obras />
    </MainContainer>
  )
}
