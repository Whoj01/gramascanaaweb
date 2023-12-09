import { FirstSection } from '@/components/FirstSection'
import MainContainer from '@/components/MainContainer'
import { Transport } from '@/components/Transport/index'

export default function Transporte() {
  return (
    <MainContainer>
      <FirstSection
        title="Nosso transporte"
        subtitle="Conheça nossa entrega ágil e com cuidado."
      />

      <Transport />
    </MainContainer>
  )
}
