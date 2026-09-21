'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import * as S from './styles'

import { type Grama } from '@/helpers/data'
import { sendMessage } from '@/helpers/sendMessage'
import { shimmer, toBase64 } from '@/helpers/ImageOp'

interface CardGramaProps {
  grama: Grama
}

/** Card de espécie usado no catálogo /gramas e nas recomendações. */
export const CardGrama = ({ grama }: CardGramaProps) => {
  return (
    <S.GrassCard>
      <S.GrassCardImage>
        <Image
          src={grama.pictures[0]}
          alt={`Grama ${grama.name}`}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475),
          )}`}
        />
      </S.GrassCardImage>

      <S.GrassCardInfoContainer>
        <S.GrassCardInfoTitle>{grama.name}</S.GrassCardInfoTitle>

        <S.Divisor />

        <S.GrassCardInfoText>{grama.description}</S.GrassCardInfoText>

        <S.GrassCardInfoFeatures>
          {grama.features.map((feature) => (
            <S.GrassCardInfoFeature key={feature}>
              <CheckCircle size={20} />

              <S.GrassCardInfoFeatureText>{feature}</S.GrassCardInfoFeatureText>
            </S.GrassCardInfoFeature>
          ))}
        </S.GrassCardInfoFeatures>

        <S.GrassCardAcoes>
          <S.GrassCardButton href={grama.href}>
            Ver a grama {grama.name}
          </S.GrassCardButton>

          <S.GrassCardViewMore onClick={sendMessage}>
            Pedir orçamento
          </S.GrassCardViewMore>
        </S.GrassCardAcoes>
      </S.GrassCardInfoContainer>
    </S.GrassCard>
  )
}
