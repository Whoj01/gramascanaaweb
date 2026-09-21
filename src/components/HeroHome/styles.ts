import Link from 'next/link'
import styled from 'styled-components'
import { bp, cor, fonte, layout, tipo } from '@/styles/tokens'

export const Hero = styled.section`
  position: relative;

  width: 100%;
  min-height: 86vh;

  display: flex;
  align-items: flex-end;

  padding-top: ${layout.headerAltura};

  overflow: hidden;

  ${bp.desktop} {
    min-height: 92vh;
    align-items: center;
  }
`

export const Foto = styled.div`
  position: absolute;
  inset: 0;

  z-index: 0;

  & > img {
    object-fit: cover;
    object-position: center;
  }

  /* gradiente direcional: abre espaço para o texto à esquerda
     sem lavar a foto inteira */
  &::after {
    content: '';

    position: absolute;
    inset: 0;

    background: linear-gradient(
      180deg,
      rgba(20, 51, 29, 0.78) 0%,
      rgba(20, 51, 29, 0.6) 55%,
      rgba(20, 51, 29, 0.85) 100%
    );

    ${bp.desktop} {
      background: linear-gradient(
        90deg,
        rgba(20, 51, 29, 0.92) 0%,
        rgba(20, 51, 29, 0.72) 45%,
        rgba(20, 51, 29, 0.25) 100%
      );
    }
  }
`

export const Conteudo = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  max-width: ${layout.larguraMax};

  margin: 0 auto;
  padding: 6rem 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2.4rem;

  ${bp.tablet} {
    padding: 8rem 4rem;
  }
`

export const Titulo = styled.h1`
  font-family: ${fonte.display};
  font-size: ${tipo.display};
  font-weight: 700;

  line-height: 1.08;
  letter-spacing: -0.025em;

  max-width: 14ch;

  color: ${cor.brancoQuente};
`

export const Subtitulo = styled.p`
  font-size: ${tipo.lead};

  max-width: 46ch;

  color: ${cor.brancoQuente};
  opacity: 0.9;
`

export const Acoes = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 1.2rem;

  margin-top: 0.8rem;
`

export const BotaoPrimario = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  height: 5.2rem;
  padding: 0 2.8rem;

  border: 1px solid ${cor.verdeVivo};
  border-radius: 4px;

  background-color: ${cor.verdeVivo};
  color: ${cor.brancoQuente};

  font-family: ${fonte.texto};
  font-size: ${tipo.body};
  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${cor.brancoQuente};
    color: ${cor.verdeCampo};
  }
`

export const BotaoSecundario = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 5.2rem;
  padding: 0 2.8rem;

  border: 1px solid rgba(251, 250, 247, 0.45);
  border-radius: 4px;

  color: ${cor.brancoQuente};

  font-size: ${tipo.body};
  font-weight: 500;

  transition:
    border-color 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    border-color: ${cor.brancoQuente};
    background-color: rgba(251, 250, 247, 0.08);
  }
`
