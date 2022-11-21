import React from "react";
import Heading from "../components/Layout/Heading";
import AvatarShowCase from "../components/AvatarPage/AvatarShowCase";
import { Fragment } from "react/cjs/react.production.min";

const AvatarPage = () => {
  return (
    <Fragment>
      <Heading
        text="Avatars"
        label="Avatars are found in every app. We use them to represent users.
         If a user profile image is not provider, it would default to their name initials"
      />
      <AvatarShowCase />
    </Fragment>
  );
};

export default AvatarPage;
