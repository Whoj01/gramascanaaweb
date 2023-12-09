'use client'

import * as S from './style'

interface MainContainerProps {
  children: React.ReactNode
}

export default function MainContainer({ children }: MainContainerProps) {
  return <S.MainContainer>{children}</S.MainContainer>
}
