import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    bottom: -100vh;
  }

  100% {
    bottom: 15px;
  }
`

const fadeOut = keyframes`
  0% {
    bottom: 15px;
    display: flex;
    visibility: visible;
    opacity: 1;
  }

  100% {
    bottom: -100vh;
    display: none;
    visibility: hidden;
    opacity: 0;
  }
`

export const CircleDiv = styled.div<{ $isScroll: boolean }>`
  display: ${(props) => (props.$isScroll ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 40px;

  border-radius: 90px;

  position: fixed;

  visibility: ${(props) => (props.$isScroll ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$isScroll ? 1 : 0)};

  bottom: 15px;
  left: 15px;

  background: #25d366;

  cursor: pointer;

  transition: all 0.3s ease;

  animation: ${(props) =>
    props.$isScroll
      ? css`
          ${fadeIn} 0.5s forwards
        `
      : css`
          ${fadeOut} 0.5s forwards
        `};

  &:hover {
    filter: brightness(0.8);
  }
`
