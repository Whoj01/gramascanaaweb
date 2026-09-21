import { Faq } from '@/components/Faq'
import { GrassSection } from '@/components/GrassSection'
import { HeroHome } from '@/components/HeroHome'
import MainContainer from '@/components/MainContainer'
import { ObrasDestaque } from '@/components/ObrasDestaque'
import { ProvaNumeros } from '@/components/ProvaNumeros'
import { WhereGrass } from '@/components/WhereGrass'
import { WhyUs } from '@/components/WhyBuyUs'
import { schemaFaq } from '@/helpers/faq'

export default function Home() {
  return (
    <MainContainer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq()) }}
      />

      <HeroHome />

      <ProvaNumeros />

      <WhereGrass />

      <GrassSection />

      <ObrasDestaque />

      <WhyUs />

      <Faq />
    </MainContainer>
  )
}
