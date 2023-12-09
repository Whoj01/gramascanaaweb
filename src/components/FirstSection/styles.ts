import styled from 'styled-components'

export const FirstSection = styled.section`
  position: relative;

  padding-top: 110px;

  min-height: 80vh;

  width: 100%;
  height: 100%;

  background-image: url('/sectionTransciton.webp');

  z-index: 4;

  background-size: cover;
  background-position: center;

  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 50vh;
  }
`

export const BackgroundImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  height: 100%;

  padding: 8rem 2.4rem 0 2.4rem;

  position: absolute;

  inset: 0;

  z-index: -1;

  width: 100%;
  height: 100%;

  gap: 1.4rem;

  background-color: rgba(0, 18, 11, 0.7);

  overflow: hidden;

  @media (min-width: 768px) {
    padding: 12rem 8rem;
  }
`

export const FirstSectionTitle = styled.h2`
  font-size: 4.8rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;

  text-align: left;

  color: #fff;
`

export const Divisor = styled.div`
  width: 32px;
  height: 4px;

  background-color: #25d366;
`

export const FirstSectionText = styled.p`
  font-size: 1.6rem;
  font-weight: 500;

  color: #fff;

  max-width: 23rem;

  line-height: 2.4rem;

  @media (min-width: 768px) {
    max-width: 50rem;
  }
`
