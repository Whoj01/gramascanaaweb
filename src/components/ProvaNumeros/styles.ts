import styled from 'styled-components'
import { bp, cor, fonte, layout, tipo } from '@/styles/tokens'

export const Faixa = styled.section`
  width: 100%;

  background-color: ${cor.verdeCampo};
  border-top: 3px solid ${cor.terraSeca};
`

export const Grade = styled.div`
  width: 100%;
  max-width: ${layout.larguraMax};

  margin: 0 auto;
  padding: 5rem 1.6rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 4rem 2rem;

  ${bp.tablet} {
    grid-template-columns: repeat(4, 1fr);
    padding: 6rem 4rem;
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.6rem;
`

export const Numero = styled.span`
  font-family: ${fonte.display};
  font-size: ${tipo.stat};
  font-weight: 700;

  line-height: 1;
  letter-spacing: -0.02em;

  /* os dígitos não mudam de largura durante a contagem */
  font-variant-numeric: tabular-nums;

  color: ${cor.terraSeca};
`

export const Rotulo = styled.p`
  font-size: ${tipo.body};

  max-width: 18ch;

  color: ${cor.brancoQuente};
  opacity: 0.85;
`
