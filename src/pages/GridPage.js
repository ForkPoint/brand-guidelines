import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Heading from "../components/Layout/Heading";
import GridLayout from "../components/Grid/GridLayout";

const GridPage = () => {
    return <Fragment>
        <Heading text="Layout Structure" />
        <GridLayout />
    </Fragment>;
};

export default GridPage;