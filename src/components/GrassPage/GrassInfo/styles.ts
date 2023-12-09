import styled from 'styled-components'

export const FirstSection = styled.section`
  position: relative;

  padding-top: 110px;

  min-height: 80vh;

  width: 100%;
  height: 100%;

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
  align-items: center;
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
`

export const TextSpan = styled.span`
  font-size: 2.4rem;
  font-weight: 500;

  text-transform: capitalize;

  color: #fff;

  line-height: 2.4rem;
`

export const FirstSectionTitle = styled.h2`
  font-size: 6.4rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;

  text-align: center;

  text-transform: capitalize;

  color: #fff;
`

export const Divisor = styled.div`
  width: 32px;
  height: 4px;

  background-color: #25d366;
`

export const FirstSectionText = styled.p`
  font-size: 2.4rem;
  font-weight: 500;

  text-align: center;

  color: #fff;

  line-height: 2.4rem;
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

  gap: 4rem;

  @media (min-width: 768px) {
    padding: 12rem 9rem;
  }
`

export const SlideContainer = styled.section`
  width: 100%;
  height: 38.2rem;

  align-self: center;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  gap: 2rem;
`

export const InfoContainerTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.4rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;

  color: #25d366;

  text-align: center;

  gap: 2rem;
`

export const InfoContainerDivisor = styled.div`
  width: 100%;
  height: 2px;

  background-color: #7cb798;
`

export const InfoContainerText = styled.p`
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Nunito Sans', sans-serif;

  text-align: left;
  color: #7cb798;
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

export const WhereGrassCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  gap: 5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const IconGrassBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1.5rem;

  @media (min-width: 768px) {
    max-width: 30rem;
  }
`

export const IconGrassText = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  font-family: 'Nunito Sans', sans-serif;

  text-align: center;

  color: #096906;
`

export const SlideItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 100%;
  width: 100%;

  flex-direction: column;

  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);

  gap: 2rem;

  padding: 4rem 0;
`

export const SlideItemTitle = styled.h2`
  text-align: center;

  font-size: 2.8rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;

  text-transform: capitalize;

  color: #e6e7e5;
`

export const GrassCardButton = styled.button`
  font-size: 1.6rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;

  width: 50%;

  padding: 1rem 0;

  background: #25d366;

  color: #ffffff;

  border: none;
  outline: none;

  border-radius: 30px;

  transition: all 0.3s ease;

  cursor: pointer;

  align-self: center;

  &:hover {
    filter: brightness(0.8);

    transform: translateY(-5px);
  }
`
