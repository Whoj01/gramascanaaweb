'use client'

import Image from 'next/image'
import { abertura } from '@/helpers/sobre'
import { NOME_EMPRESA } from '@/helpers/contato'
import * as S from './styles'

export const AboutUs = () => {
  return (
    <S.AboutUsContainer id="sobre-nos">
      <S.Inner>
        <S.Texto>
          <S.AboutUsTitle>{abertura.titulo}</S.AboutUsTitle>

          {abertura.paragrafos.map((paragrafo) => (
            <S.AboutUsSectionText key={paragrafo.slice(0, 40)}>
              {paragrafo}
            </S.AboutUsSectionText>
          ))}
        </S.Texto>

        <S.Figura>
          <S.ImageContainer>
            <Image
              src="/aboutUs.webp"
              alt={`Gramado cultivado pela ${NOME_EMPRESA} em Angatuba`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </S.ImageContainer>

          <S.Legenda>{abertura.legendaFoto}</S.Legenda>
        </S.Figura>
      </S.Inner>
    </S.AboutUsContainer>
  )
}
