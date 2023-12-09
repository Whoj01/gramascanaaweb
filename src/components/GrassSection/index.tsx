import Image from 'next/image'
import * as S from './styles'
import { useRouter } from 'next/navigation'

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
              src="/SantoAgostinho.webp"
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

            <S.GrassCardViewMore href="/gramas/santo-agostinho">
              Ver mais
            </S.GrassCardViewMore>
          </S.GrassCardImage>

          <S.GrassCardTextContainer>
            <S.GrassCardTextTitle>
              <S.GrassCardTextLink href="/gramas/santo-agostinho">
                Santo Agostinho
              </S.GrassCardTextLink>
            </S.GrassCardTextTitle>

            <S.GrassCardText>
              adapta-se muito bem às regiões nas quais há constante luz do sol e
              da mesma forma na meia sombra. Mais indicada para pastos!
            </S.GrassCardText>

            <S.GrassCardSeeMoreButton
              onClick={() => router.push('/gramas/santo-agostinho')}
            >
              Veja mais!
            </S.GrassCardSeeMoreButton>
          </S.GrassCardTextContainer>
        </S.GrassCard>

        <S.GrassCard>
          <S.GrassCardImage>
            <Image
              src="/tifway.webp"
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

            <S.GrassCardViewMore href="/gramas/tifway">
              Ver mais
            </S.GrassCardViewMore>
          </S.GrassCardImage>

          <S.GrassCardTextContainer>
            <S.GrassCardTextTitle>
              <S.GrassCardTextLink href="/gramas/tifway">
                TifWay 419
              </S.GrassCardTextLink>
            </S.GrassCardTextTitle>

            <S.GrassCardText>
              Indicada para futebol e golf, com folhas finas que não produzem
              semente. Excelente recuperação.
            </S.GrassCardText>

            <S.GrassCardSeeMoreButton
              onClick={() => router.push('/gramas/tifway')}
            >
              Veja mais!
            </S.GrassCardSeeMoreButton>
          </S.GrassCardTextContainer>
        </S.GrassCard>

        <S.GrassCard>
          <S.GrassCardImage>
            <Image
              src="/zeon.webp"
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

            <S.GrassCardViewMore href="/gramas/zeon-zoysia">
              Ver mais
            </S.GrassCardViewMore>
          </S.GrassCardImage>

          <S.GrassCardTextContainer>
            <S.GrassCardTextTitle>
              <S.GrassCardTextLink href="/gramas/zeon-zoysia">
                Zeon Zoysia
              </S.GrassCardTextLink>
            </S.GrassCardTextTitle>

            <S.GrassCardText>
              a Zeon Zoysia produz em seu gramado aquele visual observado nos
              melhores gramados. É uma realidade para paisagistas e consumidores
              que desejam um gramado perfeito.
            </S.GrassCardText>

            <S.GrassCardSeeMoreButton
              onClick={() => router.push('/gramas/zeon-zoysia')}
            >
              Veja mais!
            </S.GrassCardSeeMoreButton>
          </S.GrassCardTextContainer>
        </S.GrassCard>

        <S.GrassCard>
          <S.GrassCardImage>
            <Image
              src="/Celebration.webp"
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

            <S.GrassCardViewMore href="/gramas/celebration">
              Ver mais
            </S.GrassCardViewMore>
          </S.GrassCardImage>

          <S.GrassCardTextContainer>
            <S.GrassCardTextTitle>
              <S.GrassCardTextLink href="/gramas/celebration">
                Celebration
              </S.GrassCardTextLink>
            </S.GrassCardTextTitle>

            <S.GrassCardText>
              Grama de folhas finas e macias, muito utilizada para a formação de
              gramados esportivos, como futebol, golfe, polo e etc. A opção mais
              barata!
            </S.GrassCardText>

            <S.GrassCardSeeMoreButton
              onClick={() => router.push('/gramas/celebration')}
            >
              Veja mais!
            </S.GrassCardSeeMoreButton>
          </S.GrassCardTextContainer>
        </S.GrassCard>

        <S.GrassCard>
          <S.GrassCardImage>
            <Image
              src="/tifdwarf.webp"
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

            <S.GrassCardViewMore href="/gramas/tifdwarf">
              Ver mais
            </S.GrassCardViewMore>
          </S.GrassCardImage>

          <S.GrassCardTextContainer>
            <S.GrassCardTextTitle>
              <S.GrassCardTextLink href="/gramas/tifdwarf">
                Bermuda Tifdwarf
              </S.GrassCardTextLink>
            </S.GrassCardTextTitle>

            <S.GrassCardText>
              mais tradicional na construção de Greens de campos de golfe e em
              quadras de tênis. Tem como característica principal suportar podas
              constantes e extremamente baixas.
            </S.GrassCardText>

            <S.GrassCardSeeMoreButton
              onClick={() => router.push('/gramas/tifdwarf')}
            >
              Veja mais!
            </S.GrassCardSeeMoreButton>
          </S.GrassCardTextContainer>
        </S.GrassCard>

        <S.GrassCard>
          <S.GrassCardImage>
            <Image
              src="/coreana.webp"
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

            <S.GrassCardViewMore href="/gramas/coreana">
              Ver mais
            </S.GrassCardViewMore>
          </S.GrassCardImage>

          <S.GrassCardTextContainer>
            <S.GrassCardTextTitle>
              <S.GrassCardTextLink href="/gramas/coreana">
                Coreana
              </S.GrassCardTextLink>
            </S.GrassCardTextTitle>

            <S.GrassCardText>
              Esse tipo de grama é muito utilizado em projetos paisagísticos,
              principalmente jardins orientais. Cor verde clara, folhas finas e
              estreitas, baixa maciez e alta resistência.
            </S.GrassCardText>

            <S.GrassCardSeeMoreButton
              onClick={() => router.push('/gramas/coreana')}
            >
              Veja mais!
            </S.GrassCardSeeMoreButton>
          </S.GrassCardTextContainer>
        </S.GrassCard>

        <S.GrassCard>
          <S.GrassCardImage>
            <Image
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

        <S.GrassCard>
          <S.GrassCardImage>
            <Image
              src="/bermudas.webp"
              alt="Grama Santo Agostinho"
              sizes="100vw"
              style={{
                width: '340px',
                height: '181px',
                objectFit: 'cover',
                zIndex: -5,
              }}
              width={500}
              height={300}
            />

            <S.GrassCardViewMore href="/gramas/bermudas">
              Ver mais
            </S.GrassCardViewMore>
          </S.GrassCardImage>

          <S.GrassCardTextContainer>
            <S.GrassCardTextTitle>
              <S.GrassCardTextLink href="/gramas/bermudas">
                Bermudas
              </S.GrassCardTextLink>
            </S.GrassCardTextTitle>

            <S.GrassCardText>
              A grama Bermudas é muito tolerante ao calor intenso, à falta de
              água e ao pisoteio constante e intenso. Ela é a preferida para o
              uso nos gramados onde os climas são temperados, principalmente em
              campos esportivos.
            </S.GrassCardText>

            <S.GrassCardSeeMoreButton
              onClick={() => router.push('/gramas/bermudas')}
            >
              Veja mais!
            </S.GrassCardSeeMoreButton>
          </S.GrassCardTextContainer>
        </S.GrassCard>
      </S.CardsContainer>
    </S.GrassSectionContainer>
  )
}
