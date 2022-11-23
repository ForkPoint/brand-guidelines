import React from "react";
import Heading from "../components/Layout/Heading";
import ButtonsShowCase from "../components/ButtonPage/ButtonsShowCase";
import { Fragment } from "react/cjs/react.production.min";

const ButtonPage = () => {
  return (
    <Fragment>
      <Heading
        text="Buttons"
        label="Buttons can be used to show the user’s choice of options for actions and assign these to a clear hierarchy.
       The target page to be accessed or the action to be triggered is shown on the buttons by means of a label in ForkPoint Type Wide Normal or
        else by an icon, or by a combination of the two. Good button labels are formulated in a way that is brief and precise. They tell the
         user exactly what action will be taken when the button is clicked. Buttons provide visual feedback when clicked or tapped,
       in the form of a response effect, providing that the buttons are not deactivated."
      />
      <ButtonsShowCase />
    </Fragment>
  );
};

export default ButtonPage;
