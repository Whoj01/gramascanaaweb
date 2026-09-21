import styled from 'styled-components'
import { bp, cor, fonte, layout, tipo } from '@/styles/tokens'

export const Secao = styled.section`
  width: 100%;

  padding: ${layout.espSecao} 1.6rem;

  background-color: ${cor.verdeFundo};

  ${bp.tablet} {
    padding: ${layout.espSecao} 4rem;
  }
`

export const Inner = styled.div`
  width: 100%;
  max-width: ${layout.larguraMax};

  margin: 0 auto;
`

export const Titulo = styled.h2`
  font-family: ${fonte.display};
  font-size: ${tipo.h2};
  font-weight: 600;

  letter-spacing: -0.02em;

  max-width: 20ch;
  margin-bottom: 4.8rem;

  color: ${cor.brancoQuente};
`

export const Grade = styled.ol`
  display: grid;
  grid-template-columns: 1fr;

  gap: 4rem;

  ${bp.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 3.2rem;
  }
`

export const Etapa = styled.li`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;
`

export const EtapaCabecalho = styled.div`
  display: flex;
  align-items: baseline;

  gap: 1.2rem;
`

/** Numeração: aqui ela codifica uma sequência real (cultivo → corte → entrega). */
export const EtapaNumero = styled.span`
  font-family: ${fonte.display};
  font-size: 2.8rem;
  font-weight: 700;

  line-height: 1;

  color: ${cor.terraSeca};
`

export const EtapaTitulo = styled.h3`
  font-family: ${fonte.display};
  font-size: ${tipo.h3};
  font-weight: 600;

  color: ${cor.brancoQuente};
`

export const EtapaTexto = styled.p`
  font-size: ${tipo.body};

  max-width: 44ch;

  color: ${cor.brancoQuente};
  opacity: 0.82;
`

export const EtapaFoto = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 3 / 2;

  border-radius: 4px;
  overflow: hidden;

  & > img {
    object-fit: cover;
  }
`
