import React from "react";
import Heading from "../components/Layout/Heading";
import IconsTable from "../components/IconPage/IconsTable";

const text = {
    label:
      "Icons are usually displayed in 3 different sizes (always multiples of 8px): small (16x16px), medium (24x24px) and large (32x32px).",
  };
const IconPage = () => {
    return <div>
    <Heading text="Icons" label={text.label} />
    <IconsTable />
  </div>;
};

export default IconPage;