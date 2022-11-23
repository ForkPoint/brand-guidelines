import React from "react";
import Heading from "../components/Layout/Heading";
import FontVariants from "../components/TypographyPage/FontVariants";


const TypographyPage = () => {
  return (
    <div>
      <Heading
        text="Typography"
        label="Striking and loud. Or reduced and elegant – the ForkPoint Type font styles allow a wide variety of scenarios and moods. In this way,
         concrete applications can be geared even more consistently to the target group and the message being conveyed."
      />
      <FontVariants />
    </div>
  );
};

export default TypographyPage;
