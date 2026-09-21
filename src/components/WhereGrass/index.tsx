'use client'

import * as S from './styles'
import { Tractor, RollerCoaster, Flower2 } from 'lucide-react'
import { GiParkBench } from 'react-icons/gi'

const destinos = [
  { slug: 'sitios', rotulo: 'Sítios', Icone: Tractor },
  { slug: 'playgrounds', rotulo: 'Playgrounds', Icone: RollerCoaster },
  { slug: 'pracas', rotulo: 'Praças', Icone: GiParkBench },
  { slug: 'jardins', rotulo: 'Jardins', Icone: Flower2 },
]

export const WhereGrass = () => {
  return (
    <S.WhereGrassContainer>
      <S.WhereGrassTitle>Onde você vai colocar sua grama?</S.WhereGrassTitle>

      <S.WhereGrassCards>
        {destinos.map(({ slug, rotulo, Icone }) => (
          <S.IconGrassBox key={slug} href={`/gramas/recomendacoes/${slug}`}>
            <Icone size={56} />

            <S.IconGrassText>{rotulo}</S.IconGrassText>
          </S.IconGrassBox>
        ))}
      </S.WhereGrassCards>
    </S.WhereGrassContainer>
  )
}
