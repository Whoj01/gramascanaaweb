'use client'

import Image from 'next/image'
import { sendMessage } from '@/helpers/sendMessage'
import * as S from './styles'

export const HeroHome = () => {
  return (
    <S.Hero id="inicio">
      <S.Foto>
        <Image
          src="/banner_3.jpeg"
          alt=""
          fill
          priority
          quality={82}
          sizes="100vw"
          aria-hidden
        />
      </S.Foto>

      <S.Conteudo>
        <S.Titulo>Grama cultivada em Angatuba, entregue na sua obra.</S.Titulo>

        <S.Subtitulo>
          Esmeralda, São Carlos e Batatais direto do nosso talhão para
          paisagistas, construtoras e condomínios de Itapetininga, Sorocaba e
          região.
        </S.Subtitulo>

        <S.Acoes>
          <S.BotaoPrimario onClick={sendMessage}>
            Pedir orçamento
          </S.BotaoPrimario>

          <S.BotaoSecundario href="/gramas">Ver as gramas</S.BotaoSecundario>
        </S.Acoes>
      </S.Conteudo>
    </S.Hero>
  )
}
