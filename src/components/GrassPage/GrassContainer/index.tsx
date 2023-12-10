'use client'

import Image from 'next/image'
import * as S from './styles'

import { grassInfo } from '@/helpers/data'
import { CheckCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { shimmer, toBase64 } from '@/helpers/ImageOp'

export const GrassContainer = () => {
  const router = useRouter()

  return (
    <S.GrassInfoContainer>
      {grassInfo.map((grass, i) => (
        <S.GrassCard key={grass.id}>
          <S.GrassCardImage>
            <Image
              src={grass.pictures[0]}
              alt={`Foto da grama ${grass.name}`}
              sizes="100vw"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '12px',
              }}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475),
              )}`}
              width={500}
              height={300}
            />

            <S.GrassCardViewMore href={grass.href}>
              Ver mais!
            </S.GrassCardViewMore>
          </S.GrassCardImage>

          <S.GrassCardInfoContainer>
            <S.GrassCardInfoTitle>
              {String(i + 1).padStart(2, '0')}. {grass.name}
            </S.GrassCardInfoTitle>

            <S.GrassCardInfoText>{grass.description}</S.GrassCardInfoText>

            <S.GrassCardInfoFeatures>
              {grass.features.map((feature) => (
                <S.GrassCardInfoFeature key={feature}>
                  <CheckCircle color="#25d366" size={24} />

                  <S.GrassCardInfoFeatureText>
                    {feature}
                  </S.GrassCardInfoFeatureText>
                </S.GrassCardInfoFeature>
              ))}
            </S.GrassCardInfoFeatures>

            <S.GrassCardButton
              onClick={() =>
                router.push(
                  `/gramas/${grass.name.toLowerCase().split(' ').join('-')}`,
                )
              }
            >
              Veja mais!
            </S.GrassCardButton>
          </S.GrassCardInfoContainer>
        </S.GrassCard>
      ))}
    </S.GrassInfoContainer>
  )
}
