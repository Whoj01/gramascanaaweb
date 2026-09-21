import Link from 'next/link'
import styled from 'styled-components'
import { bp, cor, fonte, layout, tipo } from '@/styles/tokens'

export const WhereGrassContainer = styled.section`
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

export const WhereGrassTitle = styled.h2`
  font-family: ${fonte.display};
  font-size: ${tipo.h2};
  font-weight: 600;

  letter-spacing: -0.02em;
  text-align: center;

  max-width: 20ch;

  color: ${cor.verdeCampo};
`

export const WhereGrassCards = styled.div`
  width: 100%;
  max-width: ${layout.larguraMax};

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1.6rem;

  ${bp.tablet} {
    grid-template-columns: repeat(4, 1fr);
    gap: 2.4rem;
  }
`

export const IconGrassBox = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.6rem;

  padding: 3.2rem 1.6rem;

  background-color: ${cor.brancoQuente};
  border: 1px solid rgba(30, 77, 43, 0.14);
  border-radius: 4px;

  color: ${cor.verdeCampo};

  transition:
    border-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    border-color: ${cor.verdeCampo};
    color: ${cor.verdeVivo};
  }
`

export const IconGrassText = styled.span`
  font-family: ${fonte.texto};
  font-size: ${tipo.body};
  font-weight: 600;

  color: ${cor.tintaEscura};
`
