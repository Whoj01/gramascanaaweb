import styled from 'styled-components'

export const WhereGrassContainer = styled.section`
  width: 100%;
  height: 100%;

  padding: 12rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 4rem;

  background-color: #f0f9ff;

  @media (min-width: 768px) {
    padding: 12rem 9rem;
  }
`

export const WhereGrassTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;

  text-align: center;

  color: #25d366;
`

export const WhereGrassCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  gap: 9rem;

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

  cursor: pointer;

  color: #096906;

  transition: all 0.4s ease;

  &:hover {
    color: #25d366;
  }
`
