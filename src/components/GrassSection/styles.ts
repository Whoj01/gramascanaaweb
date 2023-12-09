import Link from 'next/link'
import styled, { keyframes } from 'styled-components'

const fadeOut = keyframes`
0% {
  opacity: .6;
  visibility: visible;
  display: initial;
 }

 100% {
  opacity: 0;
  visibility: hidden;
  display: none;
 }
`

const fadeLinkOut = keyframes`
  0% {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: visible;
  display: initial;
 }

 100% {
  top: 50%;
  left: 0;
  transform: translate(0%, -50%);
  visibility: hidden;
  display: none;
 }
`

const fade = keyframes`
 0% {
  opacity: 0;
 }

 100% {
  opacity: .6;
 }
`

const fadeLink = keyframes`
  0% {
  top: 50%;
 }

 100% {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 }
`

export const GrassSectionContainer = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #f0f9ff;

  padding: 12rem 1rem;

  gap: 2rem;

  @media (min-width: 768px) {
    padding: 12rem 9rem;
  }
`

export const GrassSectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`

export const GrassSectionTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;

  text-align: center;

  color: #25d366;
`

export const GrassSectionSubTittle = styled.h3`
  font-size: 2rem;

  font-weight: 500;
  font-family: 'Poppins', sans-serif;

  text-align: center;

  color: #7cb798;
`

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  gap: 6rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    width: 100%;
  }
`

export const GrassCard = styled.div`
  max-width: 34rem;
  max-height: 42rem;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #ffffff;

  border-radius: 10px 10px 6px 6px;

  overflow: hidden;

  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    flex: 1 1 320px;

    min-height: 41.2rem;
    height: 100%;

    justify-content: flex-start;
  }
`

export const GrassCardViewMore = styled(Link)`
  position: absolute;

  top: 0;
  left: 0;
  transform: translate(-50%, -50%);

  width: 18rem;

  border: 2px solid #ffff;

  padding: 0.8rem 2rem;

  background-color: transparent;
  color: #fff;

  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.6rem;

  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;

  visibility: hidden;
  opacity: 0;
  display: none;

  transition: all 0.3s ease-out;

  z-index: 2;

  animation: ${fadeLinkOut} 0.4s forwards;

  &:hover {
    background-color: #ffff;

    color: #48cfb0;
  }
`

export const GrassCardImage = styled.div`
  width: 100%;
  height: 100%;

  transition: all 0.4s ease;

  position: relative;

  cursor: pointer;

  &::before {
    content: '';

    background: #48cfb0;

    opacity: 0;

    position: absolute;

    width: 100%;
    height: 18.1rem;

    top: 0;
    bottom: 0;

    transition: all 0.4s ease;

    overflow: hidden;

    visibility: hidden;
    opacity: 0;
    display: none;

    animation: ${fadeOut} 0.4s forwards;
  }

  &:hover {
    ${GrassCardViewMore} {
      visibility: visible;
      display: initial;
      opacity: 1;

      animation: ${fadeLink} 0.4s forwards;
    }

    &::before {
      visibility: visible;
      display: initial;
      opacity: 0.4;

      animation: ${fade} 0.4s forwards;
    }
  }
`

export const GrassCardTextContainer = styled.div`
  padding: 1.61rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 1.5rem;
`

export const GrassCardTextTitle = styled.h4`
  font-size: 2rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;

  line-height: 3rem;

  text-align: center;

  cursor: pointer;

  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.6);
  }
`

export const GrassCardTextLink = styled(Link)`
  color: #25d366;
`

export const GrassCardText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  font-family: 'Nunito Sans', sans-serif;

  text-align: center;

  color: #7cb798;
`

export const GrassCardSeeMoreButton = styled.button`
  font-size: 1.6rem;
  font-weight: 500;
  font-family: 'Nunito Sans', sans-serif;

  padding: 1rem 3rem;

  color: #ffffff;

  background-color: #25d366;

  border: none;
  outline: none;

  border: 1px solid #25d366;

  text-align: center;

  border-radius: 8px;

  cursor: pointer;

  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(1.3);
  }
`
