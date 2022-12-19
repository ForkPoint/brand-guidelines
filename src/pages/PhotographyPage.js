import React from "react";
import Heading from "../components/Layout/Heading";
import Photography from "../components/PhotographyPage/Photography";


const PhotographyPage = () => {
  return (
    <div>
      <Heading
        text="Photography"
        label="Striking and loud. Or reduced and elegant – the ForkPoint Type font styles allow a wide variety of scenarios and moods. In this way,
         concrete applications can be geared even more consistently to the target group and the message being conveyed."
      />
      <Photography />
    </div>
  );
};

export default PhotographyPage;
