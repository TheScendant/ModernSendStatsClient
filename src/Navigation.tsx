import styled from "styled-components"
import { Link } from "wouter"

const NavigationWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  padding: 1rem;
  border-radius: 2  px;
  background: rgb(133, 226, 255);
  &:hover {
    background: rgb(98, 233, 255);
  }
`

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <StyledLink to="/timeline" >Timeline</StyledLink>
      <StyledLink to="/pyramid">Pyramid</StyledLink>
      <StyledLink to="/table">Table</StyledLink>
    </NavigationWrapper>
  )
}