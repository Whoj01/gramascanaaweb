import styled from 'styled-components'
import { bp, cor, fonte, layout, tipo } from '@/styles/tokens'

export const Secao = styled.section`
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

  display: flex;
  flex-direction: column;

  gap: 8rem;
`

export const Bloco = styled.article`
  display: grid;
  grid-template-columns: 1fr;

  gap: 2.4rem;

  ${bp.desktop} {
    grid-template-columns: repeat(2, 1fr);
    gap: 6rem;
    align-items: center;

    /* alterna o lado da foto; aqui a alternância serve ao ritmo da leitura,
       já que cada bloco é uma etapa independente do transporte */
    &:nth-child(even) > figure {
      order: -1;
    }
  }
`

export const Texto = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;
`

export const Titulo = styled.h2`
  font-family: ${fonte.display};
  font-size: ${tipo.h2};
  font-weight: 600;

  letter-spacing: -0.02em;

  max-width: 16ch;

  color: ${cor.verdeCampo};
`

export const Divisor = styled.div`
  width: 48px;
  height: 3px;

  background-color: ${cor.terraSeca};
`

export const Paragrafo = styled.p`
  font-size: ${tipo.body};

  max-width: 62ch;

  color: ${cor.cinzaTexto};
`

export const Figura = styled.figure`
  position: relative;

  width: 100%;
  aspect-ratio: 3 / 2;

  border-radius: 4px;
  overflow: hidden;

  & > img {
    object-fit: cover;
  }
`

export const FaixaFrota = styled.section`
  width: 100%;

  background-color: ${cor.verdeCampo};
  border-top: 3px solid ${cor.terraSeca};
`

export const FrotaGrade = styled.div`
  width: 100%;
  max-width: ${layout.larguraMax};

  margin: 0 auto;
  padding: 5rem 1.6rem;

  display: grid;
  grid-template-columns: 1fr;

  gap: 3.2rem;

  ${bp.tablet} {
    grid-template-columns: repeat(3, 1fr);
    padding: 6rem 4rem;
  }
`

export const FrotaItem = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.6rem;
`

export const FrotaValor = styled.span`
  font-family: ${fonte.display};
  font-size: ${tipo.stat};
  font-weight: 700;

  line-height: 1;
  letter-spacing: -0.02em;

  font-variant-numeric: tabular-nums;

  color: ${cor.terraSeca};
`

export const FrotaRotulo = styled.p`
  font-size: ${tipo.body};

  max-width: 22ch;

  color: ${cor.brancoQuente};
  opacity: 0.85;
`

export const Alcance = styled.section`
  width: 100%;

  padding: ${layout.espSecao} 1.6rem;

  background-color: ${cor.areiaClara};

  ${bp.tablet} {
    padding: ${layout.espSecao} 4rem;
  }
`

export const AlcanceInner = styled.div`
  width: 100%;
  max-width: ${layout.larguraMax};

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1.6rem;
`

export const AlcanceTexto = styled.p`
  font-size: ${tipo.lead};

  max-width: 62ch;

  color: ${cor.cinzaTexto};
`

export const AlcanceBotao = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 5.2rem;
  padding: 0 2.8rem;

  margin-top: 0.8rem;

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
