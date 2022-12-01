import React from "react";
import { Container } from "./styles";


const Heading = ({text, label, heading}) => {

  return (
    <Container>
        <h1>{text}</h1>
        <p>{label}</p>
    </Container>
  );
};

export default Heading;