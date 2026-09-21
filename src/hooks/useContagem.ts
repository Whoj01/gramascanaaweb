'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Conta de 0 até `valor` quando o elemento entra na viewport, uma única vez.
 *
 * O valor inicial do estado é o valor final, de propósito: o HTML do servidor
 * já sai com "20", não com "0", então crawlers e quem está sem JS veem o número
 * certo. A contagem só começa depois que o efeito roda no cliente.
 */
export const useContagem = (valor: number, duracaoMs = 1400) => {
  const ref = useRef<HTMLSpanElement>(null)
  const [atual, setAtual] = useState(valor)

  useEffect(() => {
    const elemento = ref.current
    if (!elemento) return

    const reduzir = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduzir) return

    setAtual(0)

    let frame = 0
    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return

        observer.disconnect()

        const inicio = performance.now()

        const passo = (agora: number) => {
          const progresso = Math.min((agora - inicio) / duracaoMs, 1)
          // cubic-out: rápido no começo, assenta no fim
          const suavizado = 1 - Math.pow(1 - progresso, 3)

          setAtual(Math.round(valor * suavizado))

          if (progresso < 1) frame = requestAnimationFrame(passo)
        }

        frame = requestAnimationFrame(passo)
      },
      { threshold: 0.4 },
    )

    observer.observe(elemento)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [valor, duracaoMs])

  return { ref, atual }
}
