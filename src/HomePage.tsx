import React, { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import styled from "styled-components";
import { PyramidGraph } from "./PyramidGraph";
import { TimelineGraph } from "./TimelineGraph";
import { Redirect, Route, Switch } from "wouter";
import { Navigation } from "./Navigation";
import { Table } from "./Table";
import { LoginPage } from "./LoginPage";

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: rgba(64, 87, 109, .07);
`;
export const HomePage = () => {
  const { userLoggedIn } = useContext(UserContext);
  if (!userLoggedIn) {
    return <LoginPage />;
  }
  return (
    <Home>
      <Navigation />
      <Switch>
        <Route path="/timeline" component={TimelineGraph} />
        <Route path="/table" component={Table} />
        <Route path="/pyramid" component={PyramidGraph} />
        <Redirect to="/timeline" />
      </Switch>
    </Home>
  );
};
