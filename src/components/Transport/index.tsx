'use client'

import Image from 'next/image'
import { alcance, blocos, frota } from '@/helpers/transporte'
import { sendMessage } from '@/helpers/sendMessage'
import * as S from './styles'

export const Transport = () => {
  return (
    <>
      <S.Secao>
        <S.Inner>
          {blocos.map((bloco) => (
            <S.Bloco key={bloco.titulo}>
              <S.Texto>
                <S.Titulo>{bloco.titulo}</S.Titulo>

                <S.Divisor />

                {bloco.paragrafos.map((paragrafo) => (
                  <S.Paragrafo key={paragrafo.slice(0, 40)}>
                    {paragrafo}
                  </S.Paragrafo>
                ))}
              </S.Texto>

              <S.Figura>
                <Image
                  src={bloco.foto}
                  alt={bloco.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </S.Figura>
            </S.Bloco>
          ))}
        </S.Inner>
      </S.Secao>

      <S.FaixaFrota>
        <S.FrotaGrade>
          {frota.map((dado) => (
            <S.FrotaItem key={dado.rotulo}>
              <S.FrotaValor>{dado.valor}</S.FrotaValor>

              <S.FrotaRotulo>{dado.rotulo}</S.FrotaRotulo>
            </S.FrotaItem>
          ))}
        </S.FrotaGrade>
      </S.FaixaFrota>

      <S.Alcance>
        <S.AlcanceInner>
          <S.Titulo>{alcance.titulo}</S.Titulo>

          <S.Divisor />

          <S.AlcanceTexto>{alcance.texto}</S.AlcanceTexto>

          <S.AlcanceBotao onClick={sendMessage}>
            Consultar prazo de entrega
          </S.AlcanceBotao>
        </S.AlcanceInner>
      </S.Alcance>
    </>
  )
}
