'use client'

import { useContagem } from '@/hooks/useContagem'
import * as S from './styles'

interface DadoProva {
  valor: number
  sufixo?: string
  prefixo?: string
  rotulo: string
}

const dados: DadoProva[] = [
  { valor: 20, sufixo: '+', rotulo: 'anos cultivando em Angatuba' },
  { valor: 3, rotulo: 'espécies de grama no talhão' },
  { valor: 100, sufixo: '%', rotulo: 'produção própria, sem atravessador' },
  { valor: 48, sufixo: 'h', rotulo: 'do corte à entrega na obra' },
]

const Contador = ({ valor, sufixo, prefixo }: Omit<DadoProva, 'rotulo'>) => {
  const { ref, atual } = useContagem(valor)

  return (
    <S.Numero ref={ref}>
      {prefixo}
      {atual}
      {sufixo}
    </S.Numero>
  )
}

export const ProvaNumeros = () => {
  return (
    <S.Faixa>
      <S.Grade>
        {dados.map((dado) => (
          <S.Item key={dado.rotulo}>
            <Contador
              valor={dado.valor}
              sufixo={dado.sufixo}
              prefixo={dado.prefixo}
            />

            <S.Rotulo>{dado.rotulo}</S.Rotulo>
          </S.Item>
        ))}
      </S.Grade>
    </S.Faixa>
  )
}
