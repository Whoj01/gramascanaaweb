import styled from 'styled-components'

export const SlideContainer = styled.section`
  width: 100%;
  height: calc(100vh - var(--header-heigth));
`

export const SlideItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;

  flex-direction: column;

  background: rgba(0, 0, 0, 0.6);

  gap: 2rem;

  padding: 3rem;
`

export const SlideItemTitle = styled.h2`
  text-align: center;

  font-size: 2.8rem;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;

  color: #e6e7e5;
`

export const SlideItemText = styled.p`
  text-align: center;

  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  max-width: 28rem;

  color: #e6e7e5;
`
export const SlideButton = styled.button`
  text-align: center;

  padding: 1rem 3rem;

  border: none;
  outline: none;

  border: none;
  border-radius: 16px;

  color: #fff;
  background: #48b55a;

  font-size: 2.4rem;
  font-weight: 700;

  cursor: pointer;

  transition: all 0.3s ease;

  cursor: pointer;

  &:hover {
    filter: brightness(0.8);

    transform: translateY(-5px);
  }
`
