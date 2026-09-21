import Link from 'next/link'
import styled from 'styled-components'
import { bp, cor, fonte, layout, tipo } from '@/styles/tokens'

export const GrassInfoContainer = styled.section`
  width: 100%;

  padding: ${layout.espSecao} 1.6rem;

  background-color: ${cor.brancoQuente};

  display: flex;
  flex-direction: column;

  gap: 8rem;

  ${bp.tablet} {
    padding: ${layout.espSecao} 4rem;
  }
`

export const GrassCard = styled.article`
  width: 100%;
  max-width: ${layout.larguraMax};

  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;

  gap: 2.4rem;

  ${bp.desktop} {
    grid-template-columns: 5fr 7fr;
    gap: 5rem;
    align-items: start;

    /* alterna o lado da foto a cada espécie */
    &:nth-child(even) > div:first-child {
      order: 1;
    }
  }
`

export const GrassCardImage = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 4 / 3;

  border-radius: 4px;
  overflow: hidden;

  & > img {
    object-fit: cover;
  }
`

export const GrassCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;
`

export const GrassCardInfoTitle = styled.h2`
  font-family: ${fonte.display};
  font-size: ${tipo.h2};
  font-weight: 600;

  letter-spacing: -0.02em;
  text-transform: capitalize;

  color: ${cor.verdeCampo};
`

export const Divisor = styled.div`
  width: 48px;
  height: 3px;

  background-color: ${cor.terraSeca};
`

export const GrassCardInfoText = styled.p`
  font-size: ${tipo.body};

  max-width: 62ch;

  color: ${cor.cinzaTexto};
`

export const GrassCardInfoFeatures = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  gap: 0.8rem 2rem;

  margin-top: 0.8rem;

  ${bp.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const GrassCardInfoFeature = styled.li`
  display: flex;
  align-items: center;

  gap: 0.8rem;

  color: ${cor.verdeCampo};
`

export const GrassCardInfoFeatureText = styled.span`
  font-size: ${tipo.body};

  color: ${cor.tintaEscura};
`

export const GrassCardAcoes = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 1.2rem;

  margin-top: 1.2rem;
`

export const GrassCardButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 0.6rem;

  height: 5.2rem;
  padding: 0 2.8rem;

  border: 1px solid ${cor.verdeCampo};
  border-radius: 4px;

  background-color: ${cor.verdeCampo};
  color: ${cor.brancoQuente};

  font-family: ${fonte.texto};
  font-size: ${tipo.body};
  font-weight: 600;

  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: transparent;
    color: ${cor.verdeCampo};
  }
`

export const GrassCardViewMore = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 5.2rem;
  padding: 0 2.8rem;

  border: 1px solid rgba(30, 77, 43, 0.3);
  border-radius: 4px;

  background: none;
  color: ${cor.verdeCampo};

  font-family: ${fonte.texto};
  font-size: ${tipo.body};
  font-weight: 600;

  cursor: pointer;

  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${cor.verdeCampo};
  }
`
