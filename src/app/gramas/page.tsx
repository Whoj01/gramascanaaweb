import { FirstSection } from '@/components/FirstSection'
import { GrassContainer } from '@/components/GrassPage/GrassContainer'
import MainContainer from '@/components/MainContainer'

export default function Gramas() {
  return (
    <MainContainer>
      <FirstSection
        title="Espécies de grama"
        subtitle="As nossas gramas são feita de pessoas que prezam pelo bom atendimento, qualidade e por pessoas que são apaixonadas pelo meio ambiente e ações sustentáveis."
      />

      <GrassContainer />
    </MainContainer>
  )
}
