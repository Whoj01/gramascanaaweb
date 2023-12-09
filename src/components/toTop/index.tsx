'use client'

import { useState, useEffect } from 'react'

import * as S from './styles'
import { ChevronUp } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const ToTop = () => {
  const router = useRouter()

  const [isScroll, setScroll] = useState<boolean>(false)

  const checkScroll = () => {
    if (window.scrollY >= 300) setScroll((state) => true)
    else setScroll((state) => false)
  }

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScroll)

    if (window.scrollY >= 300) setScroll((state) => true)
    else setScroll((state) => false)

    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <S.CircleDiv $isScroll={isScroll} onClick={scrollTo}>
      <ChevronUp size={24} color="#fff" />
    </S.CircleDiv>
  )
}
