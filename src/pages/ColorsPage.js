import React from "react";
import Heading from "../components/Layout/Heading";
import PrimaryColorCard from "../components/ColorsPage/PrimaryColorCard";
import SecondaryColorCard from "../components/ColorsPage/SecondaryColorCard";

const text = {
  label:
    "The ForkPoint colour palette aims at providing an organised approach to apply colour to the UI of your apps.",
};
const ColorsPage = () => {
  return (
    <div>
      <Heading text="Colors" label={text.label} />
      <Heading text="Primary colors"/>
      <PrimaryColorCard />
      <Heading text="Secondary colors"/>
      <SecondaryColorCard />
    </div>
  );
};

export default ColorsPage;
