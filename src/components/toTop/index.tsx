'use client'

import { useState, useEffect } from 'react'

import * as S from './styles'
import { ChevronUp } from 'lucide-react'

export const ToTop = () => {
  const [isScroll, setScroll] = useState<boolean>(false)

  const checkScroll = () => {
    if (window.scrollY >= 300) setScroll(true)
    else setScroll(false)
  }

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScroll)

    if (window.scrollY >= 300) setScroll(true)
    else setScroll(false)

    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <S.CircleDiv $isScroll={isScroll} onClick={scrollTo}>
      <ChevronUp size={24} color="#fff" />
    </S.CircleDiv>
  )
}
