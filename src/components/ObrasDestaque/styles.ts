import Link from 'next/link'
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

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  margin-bottom: 4.8rem;

  ${bp.desktop} {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
`

export const Titulo = styled.h2`
  font-family: ${fonte.display};
  font-size: ${tipo.h2};
  font-weight: 600;

  letter-spacing: -0.02em;

  max-width: 20ch;

  color: ${cor.brancoQuente};
`

export const VerTodas = styled(Link)`
  display: inline-flex;
  align-items: center;

  gap: 0.6rem;

  font-size: ${tipo.body};
  font-weight: 600;

  color: ${cor.brancoQuente};

  border-bottom: 1px solid ${cor.verdeVivo};
  padding-bottom: 0.4rem;

  transition: color 0.3s ease;

  &:hover {
    color: ${cor.verdeVivo};
  }
`

export const Grade = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  gap: 2.4rem;

  ${bp.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Card = styled.article`
  display: flex;
  flex-direction: column;
`

export const Foto = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 3 / 2;

  border-radius: 4px;
  overflow: hidden;

  & > img {
    object-fit: cover;
  }
`

export const Corpo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.6rem;

  padding-top: 1.6rem;
`

export const CardTitulo = styled.h3`
  font-family: ${fonte.display};
  font-size: 2rem;
  font-weight: 600;

  color: ${cor.brancoQuente};
`

export const CardMeta = styled.p`
  font-size: ${tipo.small};

  color: ${cor.brancoQuente};
  opacity: 0.7;
`

export const CardArea = styled.p`
  font-family: ${fonte.display};
  font-size: 2rem;
  font-weight: 600;

  font-variant-numeric: tabular-nums;

  margin-top: 0.4rem;

  color: ${cor.terraSeca};
`
