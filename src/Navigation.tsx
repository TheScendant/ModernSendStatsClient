import styled from "styled-components"
import { Link } from "wouter"

const NavigationWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const StyledLink = styled(Link)`
  color: black;
  padding: 1rem;
  border-radius: 2  px;
  background: #ccc;
  &:hover {
    background: #ddd;
  }
  &:visited {
    color: black;
  }
  text-decoration: none;
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