import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Heading from "../components/Layout/Heading";
import GridLayout from "../components/Grid/GridLayout";

const GridPage = () => {
  return (
    <Fragment>
      <Heading
        text="Layout Structure"
        label="The flexible layout structure enables content to be conveyed clearly and precisely. Whether filling the entire space or subdivided into several spaces: the division of the layout is geared towards the content of the message to be conveyed.
For this purpose it is also possible to combine several layout elements by means of the rings."
      />
      <GridLayout />
    </Fragment>
  );
};

export default GridPage;
