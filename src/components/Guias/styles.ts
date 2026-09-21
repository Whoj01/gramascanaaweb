import styled from 'styled-components'
import { bp, cor, fonte, layout, tipo } from '@/styles/tokens'

export const Secao = styled.section`
  width: 100%;

  padding: ${layout.espSecao} 1.6rem;

  background-color: ${cor.areiaClara};

  ${bp.tablet} {
    padding: ${layout.espSecao} 4rem;
  }
`

export const Grade = styled.div`
  width: 100%;
  max-width: ${layout.larguraMax};

  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;

  gap: 4rem;

  ${bp.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 6rem;
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.2rem;

  padding-top: 2rem;

  border-top: 2px solid ${cor.terraSeca};
`

export const Titulo = styled.h3`
  font-family: ${fonte.display};
  font-size: ${tipo.h3};
  font-weight: 600;

  color: ${cor.verdeCampo};
`

export const Texto = styled.p`
  font-size: ${tipo.body};

  max-width: 56ch;

  color: ${cor.cinzaTexto};
`
