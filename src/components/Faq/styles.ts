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

  display: grid;
  grid-template-columns: 1fr;

  gap: 3.2rem;

  ${bp.desktop} {
    grid-template-columns: 4fr 8fr;
    gap: 6rem;
    align-items: start;
  }
`

export const Titulo = styled.h2`
  font-family: ${fonte.display};
  font-size: ${tipo.h2};
  font-weight: 600;

  letter-spacing: -0.02em;

  max-width: 14ch;

  color: ${cor.verdeCampo};
`

export const Lista = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled.div`
  border-bottom: 1px solid rgba(30, 77, 43, 0.16);

  &:first-child {
    border-top: 1px solid rgba(30, 77, 43, 0.16);
  }
`

export const Pergunta = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;

  padding: 2rem 0;

  border: none;
  background: none;
  text-align: left;

  font-family: ${fonte.display};
  font-size: 2rem;
  font-weight: 600;

  color: ${cor.verdeCampo};

  cursor: pointer;

  transition: color 0.3s ease;

  &:hover {
    color: ${cor.verdeVivo};
  }

  & > svg {
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }
`

export const Resposta = styled.p`
  font-size: ${tipo.body};

  max-width: 68ch;
  padding-bottom: 2rem;

  color: ${cor.cinzaTexto};
`
