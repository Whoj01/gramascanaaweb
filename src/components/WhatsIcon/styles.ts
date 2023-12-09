import styled from 'styled-components'

export const CircleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 64px;
  width: 64px;

  border-radius: 90px;

  position: fixed;

  bottom: 15px;
  right: 15px;

  z-index: 10;

  background: #25d366;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    filter: brightness(0.8);
  }
`
