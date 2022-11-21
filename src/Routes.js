import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogosPage from "./pages/LogosPage";
import ColorsPage from "./pages/ColorsPage";
import IconPage from "./pages/IconPage";
import TypographyPage from "./pages/TypographyPage";
import ButtonPage from "./pages/ButtonPage";
import AvatarPage from "./pages/AvatarPage";
import InputPage from "./pages/InputPage";
import GridPage from "./pages/GridPage";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/logos">
                <LogosPage />
            </Route>
            <Route exact path="/colors">
                <ColorsPage />
            </Route>
            <Route exact path="/icon">
                <IconPage />
            </Route>
            <Route exact path="/typography">
                <TypographyPage />
            </Route>
            <Route exact path="/button">
                <ButtonPage />
            </Route>
            <Route exact path="/avatar">
                <AvatarPage />
            </Route>
            <Route exact path="/input">
                <InputPage />
            </Route>
            <Route exact path="/grid">
                <GridPage />
            </Route>
        </Switch>
    );
};

export default Routes;
