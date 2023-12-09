import { AboutUs } from '@/components/AboutUs'
import { FirstSection } from '@/components/FirstSection'
import MainContainer from '@/components/MainContainer'
import { WhyUs } from '@/components/WhyBuyUs'

export default function Sobrenos() {
  return (
    <MainContainer>
      <FirstSection
        title="Conheça nossa história"
        subtitle="Saiba mais como nos tornamos a empresa referência em nosso ramo"
      />

      <AboutUs />

      <WhyUs />
    </MainContainer>
  )
}
