import styled, { css, keyframes } from 'styled-components'

const scroll = keyframes`
  from {
    scale: 0 1;
  }

  to {
    scale: 1 1;
  }
`

const fadeIn = keyframes`
  0% {
    top: -100vh;
  }

  100% {
    top: 0;
  }
`

const fadeOut = keyframes`
  0% {
    top: 0;
    display: flex;
    visibility: visible;
    opacity: 1;
  }

  100% {
    top: -100vh;
    display: none;
    visibility: hidden;
    opacity: 0;
  }
`

export const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    visibility: hidden;
    display: none;
  }
`
export const Indicator = styled.div`
  background-color: #25d366;
  transform-origin: left;
  height: 10px;
  inset: 0;
  position: fixed;

  z-index: 99;

  animation: ${scroll} 0.5s ease-in;
  animation-timeline: scroll();
`

export const CloseMenuIcon = styled.div`
  position: absolute;

  width: 1.6rem;
  height: 1.6rem;

  top: 15px;
  right: 30px;

  z-index: 2;

  @media (min-width: 900px) {
    display: none;
    visibility: hidden;
  }
`

export const Header = styled.header<{ $isScroll: boolean }>`
  width: 100%;
  height: var(--header-heigth);

  position: fixed;

  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  padding: 0 1.5rem;

  z-index: 89;

  transition: background-color 0.4s ease;

  background-color: ${(props) => (props.$isScroll ? '#ffffff' : 'transparent')};

  -webkit-box-shadow: ${(props) =>
    props.$isScroll ? '0px 0px 32px -15px rgba(0, 0, 0, 0.8)' : 'none'};
  -moz-box-shadow: ${(props) =>
    props.$isScroll ? '0px 0px 32px -15px rgba(0, 0, 0, 0.8)' : 'none'};
  box-shadow: ${(props) =>
    props.$isScroll ? '0px 0px 32px -15px rgba(0, 0, 0, 0.8)' : 'none'};

  @media (min-width: 768px) {
    padding: 0rem 7rem;
  }

  color: ${(props) => (props.$isScroll ? '#252525' : '#ffffff')};
`

export const LeftSideHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  gap: 1.5rem;
  flex-direction: column;

  width: 100%;

  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;

    flex-direction: row;

    gap: 5rem;
  }
`

export const WppButtons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  height: 40px;

  padding: 0 1rem;

  border: 1px solid #25d366;
  border-radius: 6px;

  outline: none;

  background-color: #25d366;

  color: #fff;

  transition: all 0.4s ease;

  cursor: pointer;

  &:hover {
    background: #fff;
    color: #25d366;

    border: 1px solid #25d366;

    & > svg {
      fill: #25d366;
    }
  }
`

export const Nav = styled.nav<{ $isOpen: boolean }>`
  transition: top 0.3s ease;

  position: fixed;

  inset: 0;

  overflow: hidden;

  top: ${(props) => (props.$isOpen ? '0' : '-100vh')};
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};

  background: linear-gradient(180deg, #00856fef, #00856f90);
  backdrop-filter: blur(12px);

  display: ${(props) => (props.$isOpen ? 'grid' : 'none')};
  place-content: center;

  animation: ${(props) =>
    props.$isOpen
      ? css`
          ${fadeIn} 0.3s forwards
        `
      : css`
          ${fadeOut} 0.3s forwards
        `};

  z-index: 99;

  @media (min-width: 900px) {
    visibility: visible;
    inset: initial;
    position: initial;

    background: none;
    backdrop-filter: initial;
    display: flex;
    flex-direction: row;

    z-index: 0;
    animation: none;
  }
`

export const NavMenu = styled.menu`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;

    gap: 2rem;
  }
`
