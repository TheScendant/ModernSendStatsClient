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
  gap: 1rem;
`
export const LoginPage = () => {
  const { setUserLoggedIn } = useContext(UserContext)
  return (
    <Wrapper>
      <h2>Welcome to SendStats!</h2>
      <div>This details the boulders that I have finished during my short tenure as a boulderer.</div>
      <button style={{ cursor: "pointer" }} onClick={() => setUserLoggedIn(true)}>See the Stats!</button>
    </Wrapper >
  )
}