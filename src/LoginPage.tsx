import { useContext } from "react"
import styled from "styled-components"
import { UserContext } from "./contexts/UserContext"

const Wrapper = styled.div`
  background-color: rgba(64, 87, 109, .07);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const LoginPage = () => {
  const { setUserLoggedIn } = useContext(UserContext)
  return (
    <Wrapper>
      Welcome to SendStats
      <button onClick={() => setUserLoggedIn(true)}>Continue</button>
    </Wrapper>
  )
}