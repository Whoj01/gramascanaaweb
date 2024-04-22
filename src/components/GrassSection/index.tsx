import Image from 'next/image'
import * as S from './styles'
import { useRouter } from 'next/navigation'
import { shimmer, toBase64 } from '@/helpers/ImageOp'

export const GrassSection = () => {
  const router = useRouter()

  return (
    <S.GrassSectionContainer>
      <S.GrassSectionTitleContainer>
        <S.GrassSectionTitle>Nossas Gramas</S.GrassSectionTitle>

        <S.GrassSectionSubTittle>
          Vamos encontrar a espécie de grama perfeita para sua obra!
        </S.GrassSectionSubTittle>
      </S.GrassSectionTitleContainer>

      <S.CardsContainer>
        <S.GrassCard>
          <S.GrassCardImage>
            <Image
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475),
              )}`}
              src="/esmeralda.webp"
              alt="Grama esmeralda"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              width={500}
              height={300}
            />

            <S.GrassCardViewMore href="/gramas/esmeralda">
              Ver mais
            </S.GrassCardViewMore>
          </S.GrassCardImage>

          <S.GrassCardTextContainer>
            <S.GrassCardTextTitle>
              <S.GrassCardTextLink href="/gramas/esmeralda">
                Esmeralda
              </S.GrassCardTextLink>
            </S.GrassCardTextTitle>

            <S.GrassCardText>
              A mais comercializada no Brasil. Excelente para contenção, com
              grande adaptabilidade a diferentes tipos de solos, e resistente as
              diferentes condições climáticas do país.
            </S.GrassCardText>

            <S.GrassCardSeeMoreButton
              onClick={() => router.push('/gramas/esmeralda')}
            >
              Veja mais!
            </S.GrassCardSeeMoreButton>
          </S.GrassCardTextContainer>
        </S.GrassCard>

        <S.GrassCard>
          <S.GrassCardImage>
            <Image
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475),
              )}`}
              src="/saocarlos.webp"
              alt="Grama Santo Agostinho"
              sizes="100vw"
              style={{
                width: '340px',
                height: '181px',
                objectFit: 'cover',
              }}
              width={500}
              height={300}
            />

            <S.GrassCardViewMore href="/gramas/são-carlos">
              Ver mais
            </S.GrassCardViewMore>
          </S.GrassCardImage>

          <S.GrassCardTextContainer>
            <S.GrassCardTextTitle>
              <S.GrassCardTextLink href="/gramas/são-carlos">
                São Carlos
              </S.GrassCardTextLink>
            </S.GrassCardTextTitle>

            <S.GrassCardText>
              De coloração única verde intensa, essa espécie é ótima para
              jardins, parques, praças, Casas de Campo e Resorts.
            </S.GrassCardText>

            <S.GrassCardSeeMoreButton
              onClick={() => router.push('/gramas/são-carlos')}
            >
              Veja mais!
            </S.GrassCardSeeMoreButton>
          </S.GrassCardTextContainer>
        </S.GrassCard>

        <S.GrassCard>
          <S.GrassCardImage>
            <Image
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475),
              )}`}
              src="/batatais.webp"
              alt="Grama Santo Agostinho"
              sizes="100vw"
              style={{
                width: '340px',
                height: '181px',
                objectFit: 'cover',
              }}
              width={500}
              height={300}
            />

            <S.GrassCardViewMore href="/gramas/batatais">
              Ver mais
            </S.GrassCardViewMore>
          </S.GrassCardImage>

          <S.GrassCardTextContainer>
            <S.GrassCardTextTitle>
              <S.GrassCardTextLink href="/gramas/batatais">
                Batatais
              </S.GrassCardTextLink>
            </S.GrassCardTextTitle>

            <S.GrassCardText>
              Esta grama está entre as mais populares do mundo. Originalmente é
              a grama de pasto e se adapta muito bem a qualquer tipo de clima:
              equatorial, tropical, subtropical e tropical de altitude.
            </S.GrassCardText>

            <S.GrassCardSeeMoreButton
              onClick={() => router.push('/gramas/batatais')}
            >
              Veja mais!
            </S.GrassCardSeeMoreButton>
          </S.GrassCardTextContainer>
        </S.GrassCard>
      </S.CardsContainer>
    </S.GrassSectionContainer>
  )
}
