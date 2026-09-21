import styled from 'styled-components'
import { bp, cor, fonte, layout, tipo } from '@/styles/tokens'

export const AboutUsContainer = styled.section`
  width: 100%;

  padding: ${layout.espSecao} 1.6rem;

  background-color: ${cor.brancoQuente};

  ${bp.tablet} {
    padding: ${layout.espSecao} 4rem;
  }
`

export const Inner = styled.div`
  width: 100%;
  max-width: ${layout.larguraMax};

  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;

  gap: 4rem;

  ${bp.desktop} {
    /* texto mais largo que a foto: a leitura é o que manda aqui */
    grid-template-columns: 7fr 5fr;
    gap: 6rem;
    align-items: start;
  }
`

export const Texto = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`

export const AboutUsTitle = styled.h2`
  font-family: ${fonte.display};
  font-size: ${tipo.h2};
  font-weight: 600;

  letter-spacing: -0.02em;

  max-width: 16ch;

  color: ${cor.verdeCampo};
`

export const AboutUsSectionText = styled.p`
  font-size: ${tipo.body};

  max-width: 62ch;

  color: ${cor.cinzaTexto};
`

export const Figura = styled.figure`
  display: flex;
  flex-direction: column;

  gap: 1.2rem;
`

export const ImageContainer = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 4 / 5;

  border-radius: 4px;
  overflow: hidden;

  & > img {
    object-fit: cover;
  }
`

export const Legenda = styled.figcaption`
  font-size: ${tipo.small};

  padding-left: 1.2rem;
  border-left: 2px solid ${cor.terraSeca};

  color: ${cor.cinzaTexto};
`
