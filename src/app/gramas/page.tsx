import type { Metadata } from 'next'
import { NOME_EMPRESA } from '@/helpers/contato'
import { REGIAO_TEXTO } from '@/helpers/seo'
import { FirstSection } from '@/components/FirstSection'
import { GrassContainer } from '@/components/GrassPage/GrassContainer'
import MainContainer from '@/components/MainContainer'

export const metadata: Metadata = {
  title: 'Tipos de grama: Esmeralda, São Carlos e Batatais',
  description: `Compare as espécies de grama que cultivamos: Esmeralda, São Carlos e Batatais. Características, cuidados e indicação de uso. Entrega em ${REGIAO_TEXTO}.`,
  alternates: { canonical: '/gramas' },
  openGraph: {
    title: `Tipos de grama | ${NOME_EMPRESA}`,
    description:
      'Grama Esmeralda, São Carlos e Batatais: características, cuidados e indicação de uso.',
    url: '/gramas',
  },
}

export default function Gramas() {
  return (
    <MainContainer>
      <FirstSection
        title="As espécies que cultivamos"
        subtitle="Cada grama responde de um jeito ao sol, ao pisoteio e ao tipo de solo. Veja as características de cada uma antes de escolher."
      />

      <GrassContainer />
    </MainContainer>
  )
}
