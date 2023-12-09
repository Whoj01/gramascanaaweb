import Link from 'next/link'
import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 8rem 2rem;

  gap: 4rem;

  background: #00331d;
`

export const FooterTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 2rem;
`

export const FooterTitle = styled.h2`
  font-size: 3.2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;

  text-align: center;

  color: #ffffff;
`

export const FooterInfosContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  gap: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const FooterButton = styled.button`
  font-size: 1.6rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;

  width: 100%;

  padding: 1.5rem 0;

  background: #ffffff;

  color: #25d366;

  border: none;
  outline: none;

  border-radius: 30px;

  transition: all 0.3s ease;

  cursor: pointer;

  &:hover {
    filter: brightness(0.8);

    transform: translateY(-5px);
  }
`
export const FooterInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  flex-direction: column;

  gap: 2rem;

  width: 100%;
`

export const FooterInfoTitle = styled.h2`
  font-size: 2.4rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;

  color: #ffffff;
`

export const FooterInfoText = styled.p`
  font-size: 1.6rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;

  color: #ffffff;
`

export const FooterInfoLinks = styled.menu`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  gap: 1rem;
`

export const FooterLink = styled(Link)`
  font-size: 2rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 500;

  color: #ffffff;

  transition: filter 0.4s ease;

  position: relative;

  padding-left: 8px;

  &::before {
    content: '';

    position: absolute;

    left: 0;
    top: 10px;

    width: 4px;
    height: 2px;

    background: #ffffff;
  }

  &:hover {
    filter: brightness(0.8);
  }
`

export const TextCopy = styled.p`
  font-size: 1.4rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;

  text-align: center;

  color: #ffffff;
`
