import React from "react";
import { UserContext } from "./contexts/UserContext";
import { PyramidGraph } from "./PyramidGraph";
import styled from "styled-components";

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomePage = () => {
  const { userLoggedIn } = React.useContext(UserContext);
  if (!userLoggedIn) {
    return <></>;
  }
  return (
    <Home>

      <PyramidGraph />
    </Home>
  );
};
