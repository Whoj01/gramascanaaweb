import Link from 'next/link'
import styled from 'styled-components'
import { bp, cor, fonte, layout, tipo } from '@/styles/tokens'

export const GrassSectionContainer = styled.section`
  width: 100%;

  padding: ${layout.espSecao} 1.6rem;

  background-color: ${cor.brancoQuente};

  display: flex;
  flex-direction: column;

  gap: 4.8rem;

  ${bp.tablet} {
    padding: ${layout.espSecao} 4rem;
  }
`

export const GrassSectionTitleContainer = styled.div`
  width: 100%;
  max-width: ${layout.larguraMax};

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  gap: 1.2rem;
`

export const GrassSectionTitle = styled.h2`
  font-family: ${fonte.display};
  font-size: ${tipo.h2};
  font-weight: 600;

  letter-spacing: -0.02em;

  max-width: 18ch;

  color: ${cor.verdeCampo};
`

export const GrassSectionSubTittle = styled.p`
  font-size: ${tipo.lead};

  max-width: 54ch;

  color: ${cor.cinzaTexto};
`

export const CardsContainer = styled.div`
  width: 100%;
  max-width: ${layout.larguraMax};

  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;

  gap: 3.2rem;

  ${bp.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const GrassCard = styled.article`
  display: flex;
  flex-direction: column;

  border: 1px solid rgba(30, 77, 43, 0.14);
  border-radius: 4px;

  overflow: hidden;

  background-color: ${cor.brancoQuente};
`

export const GrassCardImage = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 4 / 3;

  & > img {
    object-fit: cover;
  }
`

export const GrassCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.2rem;

  padding: 2.4rem;

  border-top: 2px solid ${cor.terraSeca};
`

export const GrassCardTextTitle = styled.h3`
  font-family: ${fonte.display};
  font-size: ${tipo.h3};
  font-weight: 600;

  text-transform: capitalize;
`

export const GrassCardTextLink = styled(Link)`
  color: ${cor.verdeCampo};

  transition: color 0.3s ease;

  &:hover {
    color: ${cor.verdeVivo};
  }
`

export const GrassCardText = styled.p`
  font-size: ${tipo.body};

  color: ${cor.cinzaTexto};

  flex: 1;
`

export const GrassCardSeeMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;

  gap: 0.6rem;

  margin-top: 0.8rem;

  font-family: ${fonte.texto};
  font-size: ${tipo.body};
  font-weight: 600;

  color: ${cor.verdeCampo};

  transition: color 0.3s ease;

  &:hover {
    color: ${cor.verdeVivo};
  }
`
