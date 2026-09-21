'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { formatarMetros, type Obra } from '@/helpers/obras'
import { shimmer, toBase64 } from '@/helpers/ImageOp'
import * as S from './styles'

interface CardObraProps {
  obra: Obra
}

export const CardObra = ({ obra }: CardObraProps) => {
  const [aberto, setAberto] = useState(false)

  const capa = obra.fotos[0]
  const painelId = `obra-${obra.slug}-detalhes`

  return (
    <S.Card>
      <S.CardFoto>
        <Image
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475),
          )}`}
          src={capa.src}
          alt={capa.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </S.CardFoto>

      <S.CardCorpo>
        <S.CardTitulo>{obra.titulo}</S.CardTitulo>

        <S.Metadados>
          <S.MetaItem>
            <S.MetaRotulo>Local</S.MetaRotulo>
            <S.MetaValor>{obra.local}</S.MetaValor>
          </S.MetaItem>

          <S.MetaItem>
            <S.MetaRotulo>Grama</S.MetaRotulo>
            <S.MetaValor>{obra.especies.join(' e ')}</S.MetaValor>
          </S.MetaItem>

          {obra.metrosQuadrados && (
            <S.MetaItem>
              <S.MetaRotulo>Área entregue</S.MetaRotulo>
              <S.MetaDestaque>
                {formatarMetros(obra.metrosQuadrados)}
              </S.MetaDestaque>
            </S.MetaItem>
          )}

          <S.MetaItem>
            <S.MetaRotulo>Entrega</S.MetaRotulo>
            <S.MetaDestaque>{obra.ano}</S.MetaDestaque>
          </S.MetaItem>
        </S.Metadados>

        <S.Resumo>{obra.resumo}</S.Resumo>

        {aberto && (
          <S.Detalhes id={painelId}>
            {obra.descricao.map((paragrafo) => (
              <S.DetalheTexto key={paragrafo.slice(0, 40)}>
                {paragrafo}
              </S.DetalheTexto>
            ))}

            {capa.placeholder && (
              <S.AvisoPlaceholder>
                Foto ilustrativa do nosso acervo, ainda não é a foto desta obra.
              </S.AvisoPlaceholder>
            )}
          </S.Detalhes>
        )}

        <S.BotaoDetalhes
          onClick={() => setAberto((estado) => !estado)}
          aria-expanded={aberto}
          aria-controls={painelId}
        >
          {aberto ? 'Fechar detalhes' : 'Ver detalhes'}
          <ChevronDown
            size={18}
            style={{ transform: aberto ? 'rotate(180deg)' : 'none' }}
          />
        </S.BotaoDetalhes>
      </S.CardCorpo>
    </S.Card>
  )
}
