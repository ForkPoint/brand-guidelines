import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogosPage from "./pages/LogosPage";
import ColorsPage from "./pages/ColorsPage";
import IconPage from "./pages/IconPage";
import TypographyPage from "./pages/TypographyPage";
import ButtonPage from "./pages/ButtonPage";
import GridPage from "./pages/GridPage";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/brand-guidelines/">
                <HomePage />
            </Route>
            <HashRouter exact path="/brand-guidelines/logos">
                <LogosPage />
            </HashRouter>
            <Route exact path="/brand-guidelines/colors">
                <ColorsPage />
            </Route>
            <Route exact path="/brand-guidelines/icon">
                <IconPage />
            </Route>
            <Route exact path="/brand-guidelines/typography">
                <TypographyPage />
            </Route>
            <Route exact path="/brand-guidelines/button">
                <ButtonPage />
            </Route>
            <Route exact path="/brand-guidelines/grid">
                <GridPage />
            </Route>
        </Switch>
    );
};

export default Routes;
