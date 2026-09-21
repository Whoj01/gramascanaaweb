import styled from 'styled-components'
import { bp, cor, fonte, layout, tipo } from '@/styles/tokens'

export const FirstSection = styled.section`
  position: relative;

  width: 100%;
  min-height: 56vh;

  display: flex;
  align-items: flex-end;

  padding-top: ${layout.headerAltura};

  overflow: hidden;

  ${bp.tablet} {
    min-height: 46vh;
  }
`

/** Camada da foto: o <Image fill> entra aqui, atrás do overlay. */
export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;

  z-index: 0;

  & > img {
    object-fit: cover;
    object-position: center;
  }

  &::after {
    content: '';

    position: absolute;
    inset: 0;

    background: linear-gradient(
      90deg,
      rgba(20, 51, 29, 0.88),
      rgba(20, 51, 29, 0.45)
    );
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  max-width: ${layout.larguraMax};

  margin: 0 auto;
  padding: 6rem 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1.6rem;

  ${bp.tablet} {
    padding: 8rem 4rem;
  }
`

export const FirstSectionTitle = styled.h1`
  font-family: ${fonte.display};
  font-size: ${tipo.h1};
  font-weight: 700;

  letter-spacing: -0.02em;

  max-width: 16ch;

  color: ${cor.brancoQuente};
`

export const Divisor = styled.div`
  width: 48px;
  height: 3px;

  background-color: ${cor.terraSeca};
`

export const FirstSectionText = styled.p`
  font-size: ${tipo.lead};
  font-weight: 400;

  max-width: 52ch;

  color: ${cor.brancoQuente};
  opacity: 0.9;
`
