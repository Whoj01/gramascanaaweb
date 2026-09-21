'use client'

import * as S from './style'
import { NOME_EMPRESA } from '@/helpers/contato'
import { CiCreditCard1 } from 'react-icons/ci'
import { GiHighGrass } from 'react-icons/gi'
import { Truck, Map } from 'lucide-react'

export const WhyUs = () => {
  return (
    <S.WhyUsContainer>
      <S.WhyUsTitle>Por que comprar com a {NOME_EMPRESA}</S.WhyUsTitle>

      <S.IconsContainer>
        <S.Icons>
          <S.IconContainer>
            <CiCreditCard1 color="#FBFAF7" size={32} />
          </S.IconContainer>

          <S.IconText>Compra 100% segura</S.IconText>
        </S.Icons>

        <S.Icons>
          <S.IconContainer>
            <GiHighGrass color="#FBFAF7" size={32} />
          </S.IconContainer>

          <S.IconText>Garantia de fornecimento</S.IconText>
        </S.Icons>

        <S.Icons>
          <S.IconContainer>
            <Truck color="#FBFAF7" size={32} />
          </S.IconContainer>

          <S.IconText>Logística ágil</S.IconText>
        </S.Icons>

        <S.Icons>
          <S.IconContainer>
            <Map color="#FBFAF7" size={32} />
          </S.IconContainer>

          <S.IconText>Plantio na obra</S.IconText>
        </S.Icons>
      </S.IconsContainer>
    </S.WhyUsContainer>
  )
}
