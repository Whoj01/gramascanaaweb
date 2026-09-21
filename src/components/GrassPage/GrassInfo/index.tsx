'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import {
  CheckCircle,
  Flower2,
  RollerCoaster,
  Tractor,
  type LucideIcon,
} from 'lucide-react'
import { GiParkBench, GiSoccerKick } from 'react-icons/gi'
import type { IconType } from 'react-icons'

import { grassInfo, type Grama } from '@/helpers/data'
import { TELEFONE_WHATSAPP } from '@/helpers/contato'
import { shimmer, toBase64 } from '@/helpers/ImageOp'
import * as S from './styles'

interface GrassInfoProps {
  grass: Grama
}

const indicacoes: Record<
  string,
  { rotulo: string; Icone: LucideIcon | IconType }
> = {
  pracas: { rotulo: 'Praças', Icone: GiParkBench },
  campos: { rotulo: 'Campos', Icone: GiSoccerKick },
  playgrounds: { rotulo: 'Playgrounds', Icone: RollerCoaster },
  sitios: { rotulo: 'Sítios', Icone: Tractor },
  jardins: { rotulo: 'Jardins', Icone: Flower2 },
}

export const GrassInfo = ({ grass }: GrassInfoProps) => {
  const [fotoAtiva, setFotoAtiva] = useState(0)

  const pedirOrcamento = () => {
    const message = `Olá, gostaria de fazer o orçamento da grama ${grass.name}`

    window.open(
      `https://api.whatsapp.com/send?phone=${TELEFONE_WHATSAPP}&text=${message}`,
      '_blank',
    )
  }

  // valor derivado do próprio dado: não precisa de estado nem de efeito
  const outrasGramas = useMemo(
    () =>
      grassInfo.filter(
        (outra) =>
          outra.id !== grass.id &&
          outra.indicate.some((uso) => grass.indicate.includes(uso)),
      ),
    [grass.id, grass.indicate],
  )

  return (
    <>
      <S.FirstSection>
        <S.BackgroundImage>
          <Image
            src={grass.banner}
            alt=""
            fill
            priority
            sizes="100vw"
            aria-hidden
          />
        </S.BackgroundImage>

        <S.HeroConteudo>
          <S.FirstSectionTitle>Grama {grass.name}</S.FirstSectionTitle>

          <S.Divisor />

          <S.FirstSectionText>
            Características, cuidados e aplicações da grama {grass.name}.
          </S.FirstSectionText>
        </S.HeroConteudo>
      </S.FirstSection>

      <S.GrassSectionContainer>
        <S.Inner>
          <S.Galeria>
            <S.GaleriaPrincipal>
              <Image
                src={grass.pictures[fotoAtiva]}
                alt={`Grama ${grass.name}, foto ${fotoAtiva + 1}`}
                fill
                priority
                sizes="(min-width: 1024px) 80vw, 100vw"
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475),
                )}`}
              />
            </S.GaleriaPrincipal>

            {grass.pictures.length > 1 && (
              <S.GaleriaMiniaturas>
                {grass.pictures.map((picture, i) => (
                  <S.Miniatura
                    key={picture}
                    $ativa={i === fotoAtiva}
                    onClick={() => setFotoAtiva(i)}
                    aria-label={`Ver foto ${i + 1} da grama ${grass.name}`}
                    aria-current={i === fotoAtiva}
                  >
                    <Image
                      src={picture}
                      alt=""
                      fill
                      sizes="160px"
                      aria-hidden
                    />
                  </S.Miniatura>
                ))}
              </S.GaleriaMiniaturas>
            )}
          </S.Galeria>

          <S.InfoContainer>
            <S.Coluna>
              <S.Bloco>
                <S.InfoContainerTitle>
                  Sobre a grama {grass.name}
                </S.InfoContainerTitle>

                <S.InfoContainerDivisor />

                <S.InfoContainerText>{grass.description}</S.InfoContainerText>
              </S.Bloco>

              <S.Bloco>
                <S.InfoContainerTitle>
                  Como cuidar desta grama
                </S.InfoContainerTitle>

                <S.InfoContainerDivisor />

                {grass.care.map((care) => (
                  <S.InfoContainerText key={care.slice(0, 40)}>
                    {care}
                  </S.InfoContainerText>
                ))}
              </S.Bloco>
            </S.Coluna>

            <S.Painel>
              <div>
                <S.PainelTitulo>Características</S.PainelTitulo>

                <S.ListaFeatures style={{ marginTop: '1.6rem' }}>
                  {grass.features.map((feature) => (
                    <S.GrassCardInfoFeature key={feature}>
                      <CheckCircle size={20} />

                      <S.GrassCardInfoFeatureText>
                        {feature}
                      </S.GrassCardInfoFeatureText>
                    </S.GrassCardInfoFeature>
                  ))}
                </S.ListaFeatures>
              </div>

              <div>
                <S.PainelTitulo>Indicada para</S.PainelTitulo>

                <S.WhereGrassCards style={{ marginTop: '1.6rem' }}>
                  {grass.indicate.map((uso) => {
                    const indicacao = indicacoes[uso]
                    if (!indicacao) return null

                    const { rotulo, Icone } = indicacao

                    return (
                      <S.IconGrassBox key={uso}>
                        <Icone size={32} />

                        <S.IconGrassText>{rotulo}</S.IconGrassText>
                      </S.IconGrassBox>
                    )
                  })}
                </S.WhereGrassCards>
              </div>

              <S.GrassCardButton onClick={pedirOrcamento}>
                Pedir orçamento
              </S.GrassCardButton>
            </S.Painel>
          </S.InfoContainer>
        </S.Inner>
      </S.GrassSectionContainer>

      {outrasGramas.length > 0 && (
        <S.OutrasSecao>
          <S.Inner>
            <S.OutrasTitulo>Outras gramas para o mesmo uso</S.OutrasTitulo>

            <S.OutrasGrade>
              {outrasGramas.map((outra) => (
                <S.OutraCard key={outra.id} href={outra.href}>
                  <S.OutraFoto>
                    <Image
                      src={outra.pictures[0]}
                      alt={`Grama ${outra.name}`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </S.OutraFoto>

                  <S.OutraNome>{outra.name}</S.OutraNome>

                  <S.OutraTexto>
                    {outra.features.slice(0, 2).join('. ')}.
                  </S.OutraTexto>
                </S.OutraCard>
              ))}
            </S.OutrasGrade>
          </S.Inner>
        </S.OutrasSecao>
      )}
    </>
  )
}
