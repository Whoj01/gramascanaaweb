'use client'

import { FirstSection } from '@/components/FirstSection'
import { type Grama } from '@/helpers/data'
import { CardGrama } from '../GrassContainer/CardGrama'
import * as S from '../GrassContainer/styles'

const rotulos: Record<string, string> = {
  pracas: 'praças',
  jardins: 'jardins',
  playgrounds: 'playgrounds',
  sitios: 'sítios e chácaras',
  campos: 'campos',
}

interface RecomendationsProps {
  grams: Grama[]
  slug: string
}

export const Recomendations = ({ grams, slug }: RecomendationsProps) => {
  const rotulo = rotulos[slug] ?? slug

  return (
    <>
      <FirstSection
        title={`Grama para ${rotulo}`}
        subtitle={`As espécies que melhor respondem ao uso em ${rotulo}, com as características que importam para esse tipo de área.`}
      />

      <S.GrassInfoContainer>
        {grams.map((grass) => (
          <CardGrama key={grass.id} grama={grass} />
        ))}
      </S.GrassInfoContainer>
    </>
  )
}
