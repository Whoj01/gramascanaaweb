import Link from 'next/link'
import styled from 'styled-components'

// prettier-ignore
export const NavMenuLink = styled(Link) <{ $isActive: boolean }>`
  position: relative;

  text-decoration: none;

  color: ${(props) => (props.$isActive ? '#25d366' : '#fff')};

  font-size: 3.2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;

  transition: color 0.3s ease;

  &::after {
    content: '';

    position: absolute;

    bottom: 0;
    left: 0;

    height: 2px;
    width: ${(props) => (props.$isActive ? '100%' : 0)};

    background-color: #25d366;

    transition: width 0.4s ease;
  }

  &:hover {
    color: #25d366;

    &::after {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    color: ${(props) => (props.$isActive ? '#25d366' : 'inherit')};

    font-size: 2rem;
  }
`
