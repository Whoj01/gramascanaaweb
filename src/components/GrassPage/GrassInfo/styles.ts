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

export const HeroConteudo = styled.div`
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
  text-transform: capitalize;

  color: ${cor.brancoQuente};
`

export const Divisor = styled.div`
  width: 48px;
  height: 3px;

  background-color: ${cor.terraSeca};
`

export const FirstSectionText = styled.p`
  font-size: ${tipo.lead};

  max-width: 52ch;

  color: ${cor.brancoQuente};
  opacity: 0.9;
`

export const GrassSectionContainer = styled.section`
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
`

/** Galeria: a foto principal ocupa a largura, as miniaturas ficam abaixo. */
export const Galeria = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.2rem;

  margin-bottom: 6rem;
`

export const GaleriaPrincipal = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 4 / 3;

  border-radius: 4px;
  overflow: hidden;

  background-color: ${cor.areiaClara};

  & > img {
    object-fit: cover;
  }

  ${bp.tablet} {
    /* teto de altura para a foto não dominar a tela em telas largas */
    aspect-ratio: 16 / 9;
    max-height: 52rem;
  }
`

export const GaleriaMiniaturas = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 1.2rem;

  ${bp.tablet} {
    /* acompanha a largura da foto principal quando ela bate no max-height */
    max-width: calc(52rem * 16 / 9);
    grid-template-columns: repeat(6, 1fr);
  }
`

export const Miniatura = styled.button<{ $ativa: boolean }>`
  position: relative;

  width: 100%;
  aspect-ratio: 4 / 3;

  padding: 0;

  border: 2px solid ${(props) => (props.$ativa ? cor.terraSeca : 'transparent')};
  border-radius: 4px;

  background: none;
  overflow: hidden;
  cursor: pointer;

  opacity: ${(props) => (props.$ativa ? 1 : 0.65)};

  transition:
    opacity 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    opacity: 1;
  }

  & > img {
    object-fit: cover;
  }
`

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  gap: 4.8rem;

  ${bp.desktop} {
    grid-template-columns: 7fr 5fr;
    gap: 6rem;
    align-items: start;
  }
`

export const Coluna = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3.2rem;
`

export const Bloco = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.2rem;
`

export const InfoContainerTitle = styled.h2`
  font-family: ${fonte.display};
  font-size: ${tipo.h3};
  font-weight: 600;

  color: ${cor.verdeCampo};
`

export const InfoContainerDivisor = styled.div`
  width: 48px;
  height: 3px;

  background-color: ${cor.terraSeca};
`

export const InfoContainerText = styled.p`
  font-size: ${tipo.body};

  max-width: 62ch;

  color: ${cor.cinzaTexto};
`

/** Painel lateral: ficha técnica + indicações + CTA. */
export const Painel = styled.aside`
  display: flex;
  flex-direction: column;

  gap: 2.4rem;

  padding: 3.2rem 2.4rem;

  border: 1px solid rgba(30, 77, 43, 0.14);
  border-top: 3px solid ${cor.terraSeca};
  border-radius: 4px;

  background-color: ${cor.areiaClara};

  ${bp.desktop} {
    position: sticky;
    top: calc(${layout.headerAltura} + 2rem);
  }
`

export const PainelTitulo = styled.h2`
  font-family: ${fonte.display};
  font-size: 2rem;
  font-weight: 600;

  color: ${cor.verdeCampo};
`

export const GrassCardInfoFeature = styled.li`
  display: flex;
  align-items: flex-start;

  gap: 0.8rem;

  color: ${cor.verdeCampo};
`

export const GrassCardInfoFeatureText = styled.span`
  font-size: ${tipo.body};

  color: ${cor.tintaEscura};
`

export const ListaFeatures = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 0.8rem;
`

export const WhereGrassCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1.2rem;
`

export const IconGrassBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;

  padding: 1.6rem 0.8rem;

  border: 1px solid rgba(30, 77, 43, 0.16);
  border-radius: 4px;

  background-color: ${cor.brancoQuente};
  color: ${cor.verdeCampo};
`

export const IconGrassText = styled.span`
  font-size: ${tipo.small};
  font-weight: 600;

  color: ${cor.tintaEscura};
`

export const GrassCardButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 5.2rem;
  padding: 0 2rem;

  border: 1px solid ${cor.verdeCampo};
  border-radius: 4px;

  background-color: ${cor.verdeCampo};
  color: ${cor.brancoQuente};

  font-family: ${fonte.texto};
  font-size: ${tipo.body};
  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: transparent;
    color: ${cor.verdeCampo};
  }
`

export const OutrasSecao = styled.section`
  width: 100%;

  padding: ${layout.espSecao} 1.6rem;

  background-color: ${cor.verdeFundo};

  ${bp.tablet} {
    padding: ${layout.espSecao} 4rem;
  }
`

export const OutrasTitulo = styled.h2`
  font-family: ${fonte.display};
  font-size: ${tipo.h2};
  font-weight: 600;

  letter-spacing: -0.02em;

  margin-bottom: 3.2rem;

  color: ${cor.brancoQuente};
`

export const OutrasGrade = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  gap: 2.4rem;

  ${bp.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const OutraCard = styled.a`
  display: flex;
  flex-direction: column;

  gap: 1.2rem;
`

export const OutraFoto = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 3 / 2;

  border-radius: 4px;
  overflow: hidden;

  & > img {
    object-fit: cover;
  }
`

export const OutraNome = styled.h3`
  font-family: ${fonte.display};
  font-size: ${tipo.h3};
  font-weight: 600;

  text-transform: capitalize;

  color: ${cor.brancoQuente};
`

export const OutraTexto = styled.p`
  font-size: ${tipo.small};

  color: ${cor.brancoQuente};
  opacity: 0.75;
`
