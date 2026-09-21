import type { Metadata } from 'next'
import { NOME_EMPRESA } from '@/helpers/contato'
import { CIDADE_SEDE, REGIAO_TEXTO } from '@/helpers/seo'
import { AboutUs } from '@/components/AboutUs'
import { ComoTrabalhamos } from '@/components/ComoTrabalhamos'
import { FirstSection } from '@/components/FirstSection'
import { Guias } from '@/components/Guias'
import MainContainer from '@/components/MainContainer'
import { ProvaNumeros } from '@/components/ProvaNumeros'
import { WhyUs } from '@/components/WhyBuyUs'

export const metadata: Metadata = {
  title: 'Sobre nós',
  description: `Mais de 20 anos de produção própria de grama em ${CIDADE_SEDE}. Conheça como plantamos, cortamos e entregamos grama para ${REGIAO_TEXTO}.`,
  alternates: { canonical: '/sobre-nos' },
  openGraph: {
    title: `Sobre nós | ${NOME_EMPRESA}`,
    description: `Mais de 20 anos de produção própria de grama em ${CIDADE_SEDE}.`,
    url: '/sobre-nos',
  },
}

export default function SobreNosPage() {
  return (
    <MainContainer>
      <FirstSection
        title="Conheça nossa história"
        subtitle="Mais de vinte anos plantando, cortando e entregando a nossa própria grama em Angatuba."
      />

      <AboutUs />

      <ProvaNumeros />

      <ComoTrabalhamos />

      <Guias />

      <WhyUs />
    </MainContainer>
  )
}
