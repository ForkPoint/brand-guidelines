import React from "react";
import Heading from "../components/Layout/Heading";
import ButtonsShowCase from "../components/ButtonPage/ButtonsShowCase";
import { Fragment } from "react/cjs/react.production.min";

const ButtonPage = () => {
  return (
    <Fragment>
      <Heading text="Buttons" label="Buttons allow users to take actions, and make choices, with a single tap." />
      <ButtonsShowCase />
    </Fragment>
  );
};

export default ButtonPage;
