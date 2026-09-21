import Link from 'next/link'
import styled from 'styled-components'
import { bp, cor, fonte, layout, tipo } from '@/styles/tokens'

export const Footer = styled.footer`
  width: 100%;

  background-color: ${cor.verdeFundo};
  color: ${cor.brancoQuente};
`

export const FooterInner = styled.div`
  width: 100%;
  max-width: ${layout.larguraMax};

  margin: 0 auto;
  padding: 6rem 1.6rem 3rem;

  ${bp.tablet} {
    padding: 8rem 4rem 3rem;
  }
`

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.4rem;

  padding-bottom: 5rem;

  ${bp.tablet} {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`

export const CallToActionTitle = styled.h2`
  font-family: ${fonte.display};
  font-size: ${tipo.h2};
  font-weight: 700;

  max-width: 18ch;
`

export const CallToActionText = styled.p`
  font-size: ${tipo.body};

  margin-top: 1.2rem;
  opacity: 0.8;
`

export const CallToActionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 1.2rem;
`

export const FooterButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  height: 4.8rem;
  padding: 0 2.4rem;

  border: 1px solid ${cor.verdeVivo};
  border-radius: 4px;

  background-color: ${cor.verdeVivo};
  color: ${cor.brancoQuente};

  font-family: ${fonte.texto};
  font-size: ${tipo.body};
  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${cor.brancoQuente};
    color: ${cor.verdeFundo};
  }
`

export const FooterPhoneLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 4.8rem;
  padding: 0 2.4rem;

  border: 1px solid rgba(251, 250, 247, 0.4);
  border-radius: 4px;

  color: ${cor.brancoQuente};

  font-size: ${tipo.body};
  font-weight: 500;

  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${cor.brancoQuente};
  }
`

export const FooterInfosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  gap: 4rem;

  padding: 4rem 0;

  border-top: 1px solid rgba(78, 155, 71, 0.35);

  ${bp.tablet} {
    /* colunas assimétricas: a densidade de cada bloco é diferente */
    grid-template-columns: 4fr 3fr 5fr;
    gap: 3rem;
  }
`

export const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;
`

export const FooterInfoTitle = styled.h3`
  font-family: ${fonte.display};
  font-size: 2rem;
  font-weight: 600;
`

export const FooterInfoText = styled.p`
  font-size: ${tipo.small};

  max-width: 40ch;
  opacity: 0.8;
`

export const FooterInfoLinks = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`

export const FooterLink = styled(Link)`
  font-size: ${tipo.small};

  color: ${cor.brancoQuente};
  opacity: 0.8;

  transition:
    color 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    color: ${cor.verdeVivo};
    opacity: 1;
  }
`

export const FooterBase = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.8rem;

  padding-top: 2.4rem;

  border-top: 1px solid rgba(78, 155, 71, 0.35);

  ${bp.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const TextCopy = styled.small`
  font-size: 1.3rem;
  opacity: 0.65;
`
