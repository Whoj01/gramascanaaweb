import styled, { css, keyframes } from 'styled-components'
import { bp, cor, fonte, layout, tipo } from '@/styles/tokens'

const fadeIn = keyframes`
  from { top: -100vh; }
  to { top: 0; }
`

const fadeOut = keyframes`
  from {
    top: 0;
    visibility: visible;
    opacity: 1;
  }
  to {
    top: -100vh;
    visibility: hidden;
    opacity: 0;
  }
`

export const Header = styled.header<{ $isScroll: boolean }>`
  width: 100%;
  height: ${layout.headerAltura};

  position: fixed;
  top: 0;
  left: 0;

  z-index: 89;

  transition:
    background-color 0.4s ease,
    border-color 0.4s ease;

  background-color: ${(props) =>
    props.$isScroll ? cor.verdeCampo : 'transparent'};

  /* substitui o antigo Indicator, que dependia de animation-timeline: scroll() */
  border-bottom: 2px solid
    ${(props) => (props.$isScroll ? cor.verdeVivo : 'transparent')};

  color: ${cor.brancoQuente};
`

export const HeaderInner = styled.div`
  width: 100%;
  max-width: ${layout.larguraMax};
  height: 100%;

  margin: 0 auto;
  padding: 0 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1.6rem;

  ${bp.tablet} {
    padding: 0 4rem;
  }
`

export const LogoButton = styled.button`
  display: flex;
  align-items: center;

  border: none;
  background: none;
  cursor: pointer;

  flex-shrink: 0;
`

export const Nav = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;

  overflow: hidden;

  top: ${(props) => (props.$isOpen ? '0' : '-100vh')};
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};

  background-color: ${cor.verdeFundo};
  backdrop-filter: blur(8px);

  display: ${(props) => (props.$isOpen ? 'grid' : 'none')};
  place-content: center;

  transition: top 0.3s ease;

  animation: ${(props) =>
    props.$isOpen
      ? css`
          ${fadeIn} 0.3s forwards
        `
      : css`
          ${fadeOut} 0.3s forwards
        `};

  z-index: 99;

  ${bp.desktop} {
    position: static;
    inset: initial;

    visibility: visible;
    display: flex;

    background: none;
    backdrop-filter: none;

    animation: none;
    z-index: 0;
  }
`

export const NavMenu = styled.menu`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 4rem;

  ${bp.desktop} {
    flex-direction: row;
    gap: 3.2rem;
  }
`

export const CloseMenuIcon = styled.button`
  position: absolute;

  top: 2.4rem;
  right: 2.4rem;

  display: flex;

  border: none;
  background: none;
  cursor: pointer;

  z-index: 2;

  ${bp.desktop} {
    display: none;
  }
`

export const MenuIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;
  color: inherit;
  cursor: pointer;

  ${bp.desktop} {
    display: none;
  }
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;

  gap: 1.2rem;
`

export const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;

  border: 1px solid currentColor;
  border-radius: 4px;

  color: inherit;

  ${bp.desktop} {
    display: none;
  }
`

export const WppButtons = styled.button`
  display: none;

  ${bp.desktop} {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    height: 4.2rem;
    padding: 0 2rem;

    border: 1px solid ${cor.verdeVivo};
    border-radius: 4px;

    background-color: ${cor.verdeVivo};
    color: ${cor.brancoQuente};

    font-family: ${fonte.texto};
    font-size: ${tipo.small};
    font-weight: 600;

    cursor: pointer;

    transition:
      background-color 0.3s ease,
      color 0.3s ease;

    &:hover {
      background-color: ${cor.brancoQuente};
      color: ${cor.verdeCampo};
    }
  }
`
