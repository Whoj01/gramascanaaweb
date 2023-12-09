'use client'

import * as S from './style'
import { CiCreditCard1 } from 'react-icons/ci'
import { GiHighGrass } from 'react-icons/gi'
import { Truck, Map } from 'lucide-react'

export const WhyUs = () => {
  return (
    <S.WhyUsContainer>
      <S.WhyUsTitle>Por que comprar com a gramas canaã?</S.WhyUsTitle>

      <S.IconsContainer>
        <S.Icons>
          <S.IconContainer>
            <CiCreditCard1 color="#25d366" size={50} />
          </S.IconContainer>

          <S.IconText>Compra 100% segura!</S.IconText>
        </S.Icons>

        <S.Icons>
          <S.IconContainer>
            <GiHighGrass color="#25d366" size={50} />
          </S.IconContainer>

          <S.IconText>Garantia de fornecimento!</S.IconText>
        </S.Icons>

        <S.Icons>
          <S.IconContainer>
            <Truck color="#25d366" size={50} />
          </S.IconContainer>

          <S.IconText>Logistica Ágil!</S.IconText>
        </S.Icons>

        <S.Icons>
          <S.IconContainer>
            <Map color="#25d366" size={50} />
          </S.IconContainer>

          <S.IconText>Plantio na Obra!</S.IconText>
        </S.Icons>
      </S.IconsContainer>
    </S.WhyUsContainer>
  )
}
