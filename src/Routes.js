import React from "react";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogosPage from "./pages/LogosPage";
import ColorsPage from "./pages/ColorsPage";
import TypographyPage from "./pages/TypographyPage";
import ButtonPage from "./pages/ButtonPage";
import GridPage from "./pages/GridPage";
import PhotographyPage from "./pages/PhotographyPage";

const Routes = () => {
  return (
    <HashRouter>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/logos">
        <LogosPage />
      </Route>
      <Route exact path="/colors">
        <ColorsPage />
      </Route>
      <Route exact path="/typography">
        <TypographyPage />
      </Route>
      <Route exact path={["/buttons", "/button"]}>
        <ButtonPage />
      </Route>
      <Route exact path="/grid">
        <GridPage />
      </Route>
      <Route exact path="/photography">
        <PhotographyPage />
      </Route>
    </HashRouter>
  );
};

export default Routes;
