import styled from 'styled-components'

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 40px;
  }
`
export const SignInTitle = styled.h2`
  margin: 10px 0;
`
export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    flex-direction: column;
    justify-content: start;
    align-items: center;

    > button {
      width: 90%;
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 401px) and (max-width: 799px) {
    flex-direction: row;
    justify-content: space-around;
  }
`
