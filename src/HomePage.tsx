import React from "react";
import { UserContext } from "./contexts/UserContext";
import styled from "styled-components";
import { PyramidGraph } from "./PyramidGraph";
import { TimelineGraph } from "./TimelineGraph";

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
      <TimelineGraph />
      <PyramidGraph />
    </Home>
  );
};
