import type { Metadata } from 'next'
import { NOME_EMPRESA } from '@/helpers/contato'
import { REGIAO_TEXTO } from '@/helpers/seo'
import { FirstSection } from '@/components/FirstSection'
import MainContainer from '@/components/MainContainer'
import { Transport } from '@/components/Transport/index'

export const metadata: Metadata = {
  title: 'Transporte e entrega de grama',
  description: `Entrega de grama em até 24 horas em ${REGIAO_TEXTO}. Frota própria com carreta, bitrem e truck, e carga paletizada.`,
  alternates: { canonical: '/transporte' },
  openGraph: {
    title: `Transporte e entrega de grama | ${NOME_EMPRESA}`,
    description: `Entrega em até 24 horas em ${REGIAO_TEXTO}, com carga paletizada.`,
    url: '/transporte',
  },
}

export default function Transporte() {
  return (
    <MainContainer>
      <FirstSection
        title="Do campo ao canteiro"
        subtitle="Frota própria, carga paletizada e entrega em até 24 horas na região."
      />

      <Transport />
    </MainContainer>
  )
}
