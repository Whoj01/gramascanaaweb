'use client'

import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import * as S from './styles'
import { grassInfo } from '@/helpers/data'
import { shimmer, toBase64 } from '@/helpers/ImageOp'

export const GrassSection = () => {
  return (
    <S.GrassSectionContainer>
      <S.GrassSectionTitleContainer>
        <S.GrassSectionTitle>As gramas que cultivamos</S.GrassSectionTitle>

        <S.GrassSectionSubTittle>
          Cada espécie responde de um jeito ao sol, ao pisoteio e ao tipo de
          solo. Veja qual combina com o seu projeto.
        </S.GrassSectionSubTittle>
      </S.GrassSectionTitleContainer>

      <S.CardsContainer>
        {grassInfo.map((grama) => (
          <S.GrassCard key={grama.id}>
            <S.GrassCardImage>
              <Image
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475),
                )}`}
                src={grama.pictures[0]}
                alt={`Grama ${grama.name}`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </S.GrassCardImage>

            <S.GrassCardTextContainer>
              <S.GrassCardTextTitle>
                <S.GrassCardTextLink href={grama.href}>
                  {grama.name}
                </S.GrassCardTextLink>
              </S.GrassCardTextTitle>

              <S.GrassCardText>
                {grama.features.slice(0, 3).join('. ')}.
              </S.GrassCardText>

              <S.GrassCardSeeMoreButton href={grama.href}>
                Ver a grama {grama.name}
                <ChevronRight size={18} />
              </S.GrassCardSeeMoreButton>
            </S.GrassCardTextContainer>
          </S.GrassCard>
        ))}
      </S.CardsContainer>
    </S.GrassSectionContainer>
  )
}
