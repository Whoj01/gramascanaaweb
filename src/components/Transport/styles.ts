import styled from 'styled-components'

export const GrassCardImage = styled.div`
  width: 100%;
  height: 100%;
`

export const TransportContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 5rem;

    &:nth-child(even) {
      ${GrassCardImage} {
        order: -1;
      }
    }
  }
`
