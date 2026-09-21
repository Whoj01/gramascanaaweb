'use client'

import Image from 'next/image'
import { etapas } from '@/helpers/sobre'
import * as S from './styles'

export const ComoTrabalhamos = () => {
  return (
    <S.Secao>
      <S.Inner>
        <S.Titulo>Do talhão até a sua obra</S.Titulo>

        <S.Grade>
          {etapas.map((etapa) => (
            <S.Etapa key={etapa.numero}>
              <S.EtapaFoto>
                <Image
                  src={etapa.foto}
                  alt={etapa.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </S.EtapaFoto>

              <S.EtapaCabecalho>
                <S.EtapaNumero>{etapa.numero}</S.EtapaNumero>

                <S.EtapaTitulo>{etapa.titulo}</S.EtapaTitulo>
              </S.EtapaCabecalho>

              <S.EtapaTexto>{etapa.texto}</S.EtapaTexto>
            </S.Etapa>
          ))}
        </S.Grade>
      </S.Inner>
    </S.Secao>
  )
}
