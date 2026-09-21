'use client'

import { sendMessage } from '@/helpers/sendMessage'
import {
  ANO_CORRENTE,
  CNPJ,
  EMAIL,
  NOME_EMPRESA,
  TELEFONE_EXIBICAO,
  TELEFONE_WHATSAPP,
} from '@/helpers/contato'
import * as S from './styles'

export const Footer = () => {
  return (
    <S.Footer>
      <S.FooterInner>
        <S.CallToAction>
          <div>
            <S.CallToActionTitle>
              Precisa de grama para a sua obra?
            </S.CallToActionTitle>

            <S.CallToActionText>
              Respondemos no mesmo dia com preço e prazo de entrega.
            </S.CallToActionText>
          </div>

          <S.CallToActionButtons>
            <S.FooterButton onClick={sendMessage}>
              Pedir orçamento
            </S.FooterButton>

            <S.FooterPhoneLink href={`tel:+${TELEFONE_WHATSAPP}`}>
              {TELEFONE_EXIBICAO}
            </S.FooterPhoneLink>
          </S.CallToActionButtons>
        </S.CallToAction>

        <S.FooterInfosContainer>
          <S.FooterInfoContainer>
            <S.FooterInfoTitle>{NOME_EMPRESA}</S.FooterInfoTitle>

            <S.FooterInfoText>
              Produção própria de grama em Angatuba, entregue em Itapetininga,
              Sorocaba e região.
            </S.FooterInfoText>
          </S.FooterInfoContainer>

          <S.FooterInfoContainer>
            <S.FooterInfoTitle>Navegação</S.FooterInfoTitle>

            <S.FooterInfoLinks>
              <S.FooterLink href="/">Início</S.FooterLink>

              <S.FooterLink href="/sobre-nos">Sobre nós</S.FooterLink>

              <S.FooterLink href="/gramas">Gramas</S.FooterLink>

              <S.FooterLink href="/transporte">Transporte</S.FooterLink>

              <S.FooterLink href="/obras">Obras</S.FooterLink>
            </S.FooterInfoLinks>
          </S.FooterInfoContainer>

          <S.FooterInfoContainer>
            <S.FooterInfoTitle>Contato</S.FooterInfoTitle>

            <S.FooterInfoLinks>
              <S.FooterInfoText>{TELEFONE_EXIBICAO}</S.FooterInfoText>

              <S.FooterInfoText>{EMAIL}</S.FooterInfoText>
            </S.FooterInfoLinks>
          </S.FooterInfoContainer>
        </S.FooterInfosContainer>

        <S.FooterBase>
          <S.TextCopy>CNPJ {CNPJ}</S.TextCopy>

          <S.TextCopy>
            &copy; {ANO_CORRENTE} {NOME_EMPRESA}
          </S.TextCopy>
        </S.FooterBase>
      </S.FooterInner>
    </S.Footer>
  )
}
