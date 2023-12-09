import { FirstSection } from '@/components/FirstSection'
import MainContainer from '@/components/MainContainer'
import { Services } from '@/components/Services'

export default function Obras() {
  return (
    <MainContainer>
      <FirstSection
        title="Conheça nossos serviços"
        subtitle="Venha conhecer serviços que já entregamos!"
      />

      <Services />
    </MainContainer>
  )
}
