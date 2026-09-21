import styled from 'styled-components'
import { bp, cor, fonte, layout, tipo } from '@/styles/tokens'

export const WhyUsContainer = styled.section`
  width: 100%;

  padding: ${layout.espSecao} 1.6rem;

  background-color: ${cor.areiaClara};

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 4.8rem;

  ${bp.tablet} {
    padding: ${layout.espSecao} 4rem;
  }
`

export const WhyUsTitle = styled.h2`
  font-family: ${fonte.display};
  font-size: ${tipo.h2};
  font-weight: 600;

  letter-spacing: -0.02em;
  text-align: center;

  max-width: 22ch;

  color: ${cor.verdeCampo};
`

export const IconsContainer = styled.div`
  width: 100%;
  max-width: ${layout.larguraMax};

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 3.2rem 2rem;

  ${bp.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.6rem;

  text-align: center;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 6.4rem;
  height: 6.4rem;

  border-radius: 4px;

  background-color: ${cor.verdeCampo};
  color: ${cor.brancoQuente};
`

export const IconText = styled.p`
  font-family: ${fonte.texto};
  font-size: ${tipo.body};
  font-weight: 600;

  max-width: 16ch;

  color: ${cor.tintaEscura};
`
