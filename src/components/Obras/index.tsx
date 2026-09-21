'use client'

import { useMemo, useState } from 'react'
import { obras, rotuloTipo, type TipoObra } from '@/helpers/obras'
import { sendMessage } from '@/helpers/sendMessage'
import { CardObra } from './CardObra'
import * as S from './styles'

type Filtro = TipoObra | 'todas'

export const Obras = () => {
  const [filtro, setFiltro] = useState<Filtro>('todas')

  // só mostra filtros para tipos que realmente têm obra cadastrada
  const tiposDisponiveis = useMemo(() => {
    const tipos = new Set(obras.map((obra) => obra.tipo))
    return Array.from(tipos)
  }, [])

  const visiveis = useMemo(
    () =>
      filtro === 'todas' ? obras : obras.filter((obra) => obra.tipo === filtro),
    [filtro],
  )

  return (
    <S.Secao>
      <S.Inner>
        <S.Cabecalho>
          <div>
            <S.Titulo>Obras entregues</S.Titulo>

            <S.Contagem>
              {visiveis.length} {visiveis.length === 1 ? 'projeto' : 'projetos'}{' '}
              na região de Itapetininga e Sorocaba.
            </S.Contagem>
          </div>

          <S.Filtros>
            <S.FiltroBotao
              $ativo={filtro === 'todas'}
              onClick={() => setFiltro('todas')}
            >
              Todas
            </S.FiltroBotao>

            {tiposDisponiveis.map((tipo) => (
              <S.FiltroBotao
                key={tipo}
                $ativo={filtro === tipo}
                onClick={() => setFiltro(tipo)}
              >
                {rotuloTipo[tipo]}
              </S.FiltroBotao>
            ))}
          </S.Filtros>
        </S.Cabecalho>

        <S.Grade>
          {visiveis.map((obra) => (
            <CardObra key={obra.slug} obra={obra} />
          ))}
        </S.Grade>

        <S.Chamada>
          <S.ChamadaTitulo>A sua obra pode estar aqui.</S.ChamadaTitulo>

          <S.ChamadaBotao onClick={sendMessage}>Pedir orçamento</S.ChamadaBotao>
        </S.Chamada>
      </S.Inner>
    </S.Secao>
  )
}
