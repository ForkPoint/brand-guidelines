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
      <Heading text="Primary Brand Colors" label="The primary colors define Forkpoint's brand identity. Forkpoint Green is our signature accent and CTA color, balanced by Dark Space as our primary neutral." />
      <PrimaryColorCard />
      <Heading text="Supporting Neutrals & Monochrome" label="Black, neutral grays, and white provide contrast and hierarchy across backgrounds, cards, typography, and inverted UI states." />
      <SecondaryColorCard />
    </div>
  );
};

export default ColorsPage;
