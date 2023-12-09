'use client'

import { FirstSection } from '@/components/FirstSection'
import {
  GrassCard,
  GrassCardButton,
  GrassCardImage,
  GrassCardInfoContainer,
  GrassCardInfoFeature,
  GrassCardInfoFeatureText,
  GrassCardInfoFeatures,
  GrassCardInfoText,
  GrassCardInfoTitle,
  GrassCardViewMore,
  GrassInfoContainer,
} from '../GrassContainer/styles'
import { CheckCircle } from 'lucide-react'
import router from 'next/navigation'
import Image from 'next/image'

interface RecomendationsProps {
  grams: Array<{
    id: number
    name: string
    pictures: string[]
    banner: string
    description: string
    features: string[]
    href: string
    care: string[]
    indicate: string[]
  }>
  slug: string
}

export const Recomendations = ({ grams, slug }: RecomendationsProps) => {
  console.log(grams)

  return (
    <>
      <FirstSection
        title={`Gramas para ${slug}`}
        subtitle={`Venha ver nossas recomendações para ${slug}`}
      />

      <GrassInfoContainer>
        {grams.map((grass, i) => (
          <GrassCard key={grass.id}>
            <GrassCardImage>
              <Image
                src={grass.pictures[0]}
                alt={`Foto da grama ${grass.name}`}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '12px',
                }}
                width={500}
                height={300}
              />

              <GrassCardViewMore href={grass.href}>Ver mais!</GrassCardViewMore>
            </GrassCardImage>

            <GrassCardInfoContainer>
              <GrassCardInfoTitle>
                {String(i + 1).padStart(2, '0')}. {grass.name}
              </GrassCardInfoTitle>

              <GrassCardInfoText>{grass.description}</GrassCardInfoText>

              <GrassCardInfoFeatures>
                {grass.features.map((feature) => (
                  <GrassCardInfoFeature key={feature}>
                    <CheckCircle color="#25d366" size={24} />

                    <GrassCardInfoFeatureText>
                      {feature}
                    </GrassCardInfoFeatureText>
                  </GrassCardInfoFeature>
                ))}
              </GrassCardInfoFeatures>

              <GrassCardButton
                onClick={() =>
                  router.push(
                    `/gramas/${grass.name.toLowerCase().split(' ').join('-')}`,
                  )
                }
              >
                Veja mais!
              </GrassCardButton>
            </GrassCardInfoContainer>
          </GrassCard>
        ))}
      </GrassInfoContainer>
    </>
  )
}
