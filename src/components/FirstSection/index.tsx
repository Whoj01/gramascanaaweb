'use client'

import * as S from './styles'

interface FirstSectionProps {
  title: string
  subtitle: string
}

export const FirstSection = ({ subtitle, title }: FirstSectionProps) => {
  return (
    <S.FirstSection>
      <S.BackgroundImage>
        <S.FirstSectionTitle>{title}</S.FirstSectionTitle>

        <S.Divisor />

        <S.FirstSectionText>{subtitle}</S.FirstSectionText>
      </S.BackgroundImage>
    </S.FirstSection>
  )
}
