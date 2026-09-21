'use client'

import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { formatarMetros, obrasDestaque } from '@/helpers/obras'
import { shimmer, toBase64 } from '@/helpers/ImageOp'
import * as S from './styles'

export const ObrasDestaque = () => {
  return (
    <S.Secao>
      <S.Inner>
        <S.Cabecalho>
          <S.Titulo>Obras que já receberam nossa grama</S.Titulo>

          <S.VerTodas href="/obras">
            Ver todas as obras
            <ChevronRight size={18} />
          </S.VerTodas>
        </S.Cabecalho>

        <S.Grade>
          {obrasDestaque.map((obra) => (
            <S.Card key={obra.slug}>
              <S.Foto>
                <Image
                  placeholder={`data:image/svg+xml;base64,${toBase64(
                    shimmer(700, 475),
                  )}`}
                  src={obra.fotos[0].src}
                  alt={obra.fotos[0].alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </S.Foto>

              <S.Corpo>
                <S.CardTitulo>{obra.titulo}</S.CardTitulo>

                <S.CardMeta>
                  {obra.local} · Grama {obra.especies.join(' e ')}
                </S.CardMeta>

                {obra.metrosQuadrados && (
                  <S.CardArea>
                    {formatarMetros(obra.metrosQuadrados)}
                  </S.CardArea>
                )}
              </S.Corpo>
            </S.Card>
          ))}
        </S.Grade>
      </S.Inner>
    </S.Secao>
  )
}
