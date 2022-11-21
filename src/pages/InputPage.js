import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import InputShowCase from "../components/InputPage/InputShowCase";
import Heading from "../components/Layout/Heading";

const InputPage = () => {
    return <Fragment>
        <Heading text="Input" label="The Input component allows the user to enter characters" />
        <InputShowCase />
    </Fragment>;
};

export default InputPage;