import Link from 'next/link'
import styled from 'styled-components'
import { bp, cor, fonte } from '@/styles/tokens'

// prettier-ignore
export const NavMenuLink = styled(Link) <{ $isActive: boolean }>`
  position: relative;

  text-decoration: none;

  color: ${cor.brancoQuente};
  opacity: ${(props) => (props.$isActive ? 1 : 0.82)};

  font-family: ${fonte.display};
  font-size: 3.2rem;
  font-weight: 600;

  transition: opacity 0.3s ease;

  &::after {
    content: '';

    position: absolute;

    bottom: -0.4rem;
    left: 0;

    height: 2px;
    width: ${(props) => (props.$isActive ? '100%' : 0)};

    background-color: ${cor.verdeVivo};

    transition: width 0.4s ease;
  }

  &:hover {
    opacity: 1;

    &::after {
      width: 100%;
    }
  }

  ${bp.desktop} {
    font-size: 1.7rem;
    font-family: ${fonte.texto};
    font-weight: 500;
  }
`
