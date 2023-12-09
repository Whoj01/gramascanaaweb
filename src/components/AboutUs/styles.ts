import styled from 'styled-components'

export const AboutUsContainer = styled.section`
  width: 100%;
  height: 100%;

  padding: 12rem 1rem;

  display: flex;
  flex-direction: column;

  gap: 4rem;

  background-color: #141414;

  @media (min-width: 768px) {
    padding: 12rem 9rem;
  }
`

export const AboutUsTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;

  text-align: center;

  color: #ffffff;
`

export const AboutUsSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2rem;
`

export const AboutUsSectionRigth = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  gap: 2rem;
`

export const AboutUsSectionTitle = styled.h3`
  position: relative;

  font-size: 2rem;
  font-weight: 500;
  font-family: 'Nunito Sans', sans-serif;

  color: #ffffff;

  padding-left: 30px;

  &::before {
    content: '';

    position: absolute;

    width: 20px;
    height: 2px;

    background: #ffffff;

    left: 6px;
    top: 50%;
  }
`

export const AboutUsSectionTitleRigth = styled.h3`
  position: relative;

  font-size: 2rem;
  font-weight: 500;
  font-family: 'Nunito Sans', sans-serif;

  color: #ffffff;

  padding-right: 30px;

  &::after {
    content: '';

    position: absolute;

    width: 20px;
    height: 2px;

    background: #ffffff;

    right: 6px;
    top: 50%;
  }
`

export const AboutUsSectionText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  font-family: 'Nunito Sans', sans-serif;

  line-height: 3rem;

  max-width: 29rem;

  color: #ffffff;

  @media (min-width: 768px) {
    max-width: 50rem;
  }
`

export const AboutUsSectionTextRigth = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  font-family: 'Nunito Sans', sans-serif;

  line-height: 3rem;

  max-width: 29rem;

  text-align: end;

  color: #ffffff;

  @media (min-width: 768px) {
    max-width: 50rem;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 60rem;
    align-self: center;
  }
`
