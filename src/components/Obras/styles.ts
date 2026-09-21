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
`

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.4rem;

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

  color: ${cor.verdeCampo};
`

export const Contagem = styled.p`
  font-size: ${tipo.body};

  margin-top: 0.8rem;

  color: ${cor.cinzaTexto};
`

export const Filtros = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.8rem;
`

export const FiltroBotao = styled.button<{ $ativo: boolean }>`
  height: 4rem;
  padding: 0 1.6rem;

  border: 1px solid
    ${(props) => (props.$ativo ? cor.verdeCampo : 'rgba(30, 77, 43, 0.22)')};
  border-radius: 4px;

  background-color: ${(props) =>
    props.$ativo ? cor.verdeCampo : 'transparent'};
  color: ${(props) => (props.$ativo ? cor.brancoQuente : cor.cinzaTexto)};

  font-family: ${fonte.texto};
  font-size: ${tipo.small};
  font-weight: 600;

  cursor: pointer;

  transition:
    border-color 0.3s ease,
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    border-color: ${cor.verdeCampo};
    color: ${(props) => (props.$ativo ? cor.brancoQuente : cor.verdeCampo)};
  }
`

export const Grade = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  gap: 3.2rem;

  ${bp.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Card = styled.article`
  display: flex;
  flex-direction: column;

  border: 1px solid rgba(30, 77, 43, 0.14);
  border-radius: 4px;

  overflow: hidden;

  background-color: ${cor.brancoQuente};
`

export const CardFoto = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 4 / 3;

  & > img {
    object-fit: cover;
  }
`

export const CardCorpo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  padding: 2.4rem;

  border-top: 2px solid ${cor.terraSeca};

  flex: 1;
`

export const CardTitulo = styled.h3`
  font-family: ${fonte.display};
  font-size: ${tipo.h3};
  font-weight: 600;

  color: ${cor.verdeCampo};
`

/** Régua de metadados: local, espécie, área e ano da obra. */
export const Metadados = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1.6rem 2rem;
`

export const MetaItem = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.2rem;
`

export const MetaRotulo = styled.dt`
  font-size: 1.3rem;

  color: ${cor.cinzaTexto};
`

export const MetaValor = styled.dd`
  font-family: ${fonte.texto};
  font-size: ${tipo.body};
  font-weight: 600;

  color: ${cor.tintaEscura};
`

/** Área e ano em Fraunces/terra: o único acento cromático do card. */
export const MetaDestaque = styled.dd`
  font-family: ${fonte.display};
  font-size: ${tipo.h3};
  font-weight: 600;

  font-variant-numeric: tabular-nums;

  color: ${cor.terraSeca};
`

export const Resumo = styled.p`
  font-size: ${tipo.body};

  color: ${cor.cinzaTexto};

  flex: 1;
`

export const Detalhes = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.2rem;

  padding-top: 0.4rem;
`

export const DetalheTexto = styled.p`
  font-size: ${tipo.body};

  max-width: 62ch;

  color: ${cor.cinzaTexto};
`

export const AvisoPlaceholder = styled.p`
  font-size: 1.3rem;

  padding: 0.8rem 1.2rem;

  border-left: 2px solid ${cor.terraSeca};

  color: ${cor.cinzaTexto};
`

export const BotaoDetalhes = styled.button`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;

  gap: 0.6rem;

  border: none;
  background: none;

  font-family: ${fonte.texto};
  font-size: ${tipo.body};
  font-weight: 600;

  color: ${cor.verdeCampo};

  cursor: pointer;

  transition: color 0.3s ease;

  &:hover {
    color: ${cor.verdeVivo};
  }

  & > svg {
    transition: transform 0.3s ease;
  }
`

export const Chamada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.6rem;

  margin-top: 6rem;
  padding: 4.8rem 2.4rem;

  border: 1px solid rgba(30, 77, 43, 0.14);
  border-radius: 4px;

  background-color: ${cor.areiaClara};

  text-align: center;
`

export const ChamadaTitulo = styled.h3`
  font-family: ${fonte.display};
  font-size: ${tipo.h3};
  font-weight: 600;

  color: ${cor.verdeCampo};
`

export const ChamadaBotao = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 5.2rem;
  padding: 0 2.8rem;

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
