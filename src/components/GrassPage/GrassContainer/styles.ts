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

export const GrassInfoContainer = styled.section`
  width: 100%;
  height: 100%;

  padding: 12rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 4rem;

  background-color: #f0f9ff;

  @media (min-width: 900px) {
    padding: 12rem 9rem;
  }
`

export const GrassCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  flex: 1 1 360px;

  max-height: 90rem;
  max-width: 38rem;

  gap: 1rem;

  @media (min-width: 900px) {
    flex-direction: row;
    max-width: 100%;
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
  border-radius: 12px;

  position: relative;

  width: 100%;
  height: 100%;
  max-height: 30rem;

  overflow: hidden;

  &::before {
    content: '';

    background: #48cfb0;

    opacity: 0;

    position: absolute;

    width: 100%;
    height: 100%;

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

      animation: ${fade} 0.4s forwards;
    }
  }

  @media (min-width: 900px) {
    max-width: 72rem;
    height: 100%;
    max-height: 52.5rem;
  }
`

export const GrassCardInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  height: 100%;

  gap: 3rem;

  @media (min-width: 900px) {
    width: 40%;
  }
`

export const GrassCardInfoTitle = styled.h2`
  color: #25d366;

  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 2.8rem;

  text-transform: capitalize;
`

export const GrassCardInfoText = styled.p`
  color: #7cb798;

  font-weight: 400;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 1.6rem;
`

export const GrassCardInfoFeatures = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  gap: 1rem;
`

export const GrassCardInfoFeature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`

export const GrassCardInfoFeatureText = styled.div`
  color: #54595f;

  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
`

export const GrassCardButton = styled.button`
  font-size: 1.6rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;

  width: 100%;

  padding: 1.5rem 0;

  background: #25d366;

  color: #ffffff;

  border: none;
  outline: none;

  border-radius: 30px;

  transition: all 0.3s ease;

  cursor: pointer;

  &:hover {
    filter: brightness(0.8);

    transform: translateY(-5px);
  }

  @media (min-width: 900px) {
    width: 50%;

    align-self: center;

    margin-top: auto;
  }
`
