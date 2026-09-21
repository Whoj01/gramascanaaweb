'use client'

import { guias } from '@/helpers/sobre'
import * as S from './styles'

export const Guias = () => {
  return (
    <S.Secao>
      <S.Grade>
        {guias.map((guia) => (
          <S.Item key={guia.titulo}>
            <S.Titulo>{guia.titulo}</S.Titulo>

            <S.Texto>{guia.texto}</S.Texto>
          </S.Item>
        ))}
      </S.Grade>
    </S.Secao>
  )
}
