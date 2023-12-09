'use client'

import { sendMessage } from '@/helpers/sendMessage'
import * as S from './styles'

export const Footer = () => {
  return (
    <S.Footer>
      <S.FooterTitleContainer>
        <S.FooterTitle>Entre em contato!</S.FooterTitle>

        <S.FooterButton onClick={sendMessage}>Peça a sua Grama.</S.FooterButton>
      </S.FooterTitleContainer>

      <S.FooterInfosContainer>
        <S.FooterInfoContainer>
          <S.FooterInfoTitle>Gramas Canaã</S.FooterInfoTitle>

          <S.FooterInfoText>
            Nossa produção de grama atinge uma qualidade superior no mercado,
            garantido a beleza para o seu projeto.
          </S.FooterInfoText>
        </S.FooterInfoContainer>

        <S.FooterInfoContainer>
          <S.FooterInfoTitle>Links rápidos</S.FooterInfoTitle>

          <S.FooterInfoLinks>
            <S.FooterLink href="/">Ínicio</S.FooterLink>

            <S.FooterLink href="/sobre-nos">Sobre nós</S.FooterLink>

            <S.FooterLink href="/gramas">Gramas</S.FooterLink>

            <S.FooterLink href="/transporte">Transporte</S.FooterLink>

            <S.FooterLink href="/obras">Obras</S.FooterLink>
          </S.FooterInfoLinks>
        </S.FooterInfoContainer>

        <S.FooterInfoContainer>
          <S.FooterInfoTitle>Contato</S.FooterInfoTitle>

          <S.FooterInfoLinks>
            <S.FooterInfoText>
              Bairro Faxinal km 2,2 - Fazenda canaã
            </S.FooterInfoText>

            <S.FooterInfoText>Angatuba - SP | CEP 18240 000</S.FooterInfoText>

            <S.FooterInfoText>Fone: (15) 99621-8062</S.FooterInfoText>

            <S.FooterInfoText>
              Email: eloirjunior1984@gmail.com
            </S.FooterInfoText>
          </S.FooterInfoLinks>
        </S.FooterInfoContainer>
      </S.FooterInfosContainer>

      <S.FooterTitleContainer>
        <S.TextCopy>
          Copyright&copy;2023 | CNPJ: 10.351.289/0001-47 | Desenvolvido por
          Gramas Canaã
        </S.TextCopy>
      </S.FooterTitleContainer>
    </S.Footer>
  )
}
