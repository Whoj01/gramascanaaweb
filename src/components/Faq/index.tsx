'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { perguntas } from '@/helpers/faq'
import * as S from './styles'

export const Faq = () => {
  const [aberta, setAberta] = useState<number | null>(0)

  return (
    <S.Secao id="perguntas-frequentes">
      <S.Inner>
        <S.Titulo>Dúvidas de quem vai comprar</S.Titulo>

        <S.Lista>
          {perguntas.map((item, i) => {
            const estaAberta = i === aberta
            const painelId = `faq-resposta-${i}`

            return (
              <S.Item key={item.pergunta}>
                <S.Pergunta
                  onClick={() => setAberta(estaAberta ? null : i)}
                  aria-expanded={estaAberta}
                  aria-controls={painelId}
                >
                  {item.pergunta}

                  <ChevronDown
                    size={20}
                    style={{
                      transform: estaAberta ? 'rotate(180deg)' : 'none',
                    }}
                  />
                </S.Pergunta>

                {estaAberta && (
                  <S.Resposta id={painelId}>{item.resposta}</S.Resposta>
                )}
              </S.Item>
            )
          })}
        </S.Lista>
      </S.Inner>
    </S.Secao>
  )
}
