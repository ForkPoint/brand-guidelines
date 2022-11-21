import React from "react";
import Heading from "../components/Layout/Heading";
import List from "../components/Layout/List";
import LogosContainer from "../components/LogosPage/LogosContainer";

const text = {
  label: "This section contains the ForkPoint logo",
  heading: "Logo guidelines",
  listItem1: "Place the logo on white background",
  listItem2: "Never place the logo on images",
};

const LogosPage = () => {
  return (
    <div>
        <Heading text="Logos" label={text.label} />
        <List heading={text.heading} item1={text.listItem1} item2={text.listItem2} />
        <LogosContainer />
    </div>
  );
};

export default LogosPage;
