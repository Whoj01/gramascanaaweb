'use client'

import Image from 'next/image'
import * as S from './styles'

interface FirstSectionProps {
  title: string
  subtitle: string
}

export const FirstSection = ({ subtitle, title }: FirstSectionProps) => {
  return (
    <S.FirstSection>
      <S.BackgroundImage>
        <Image
          src="/sectionTransciton.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden
        />
      </S.BackgroundImage>

      <S.Content>
        <S.FirstSectionTitle>{title}</S.FirstSectionTitle>

        <S.Divisor />

        <S.FirstSectionText>{subtitle}</S.FirstSectionText>
      </S.Content>
    </S.FirstSection>
  )
}
