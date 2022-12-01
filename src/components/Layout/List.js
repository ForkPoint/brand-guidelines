import React from "react";
import { Container } from "./styles";

const List = ({item1, item2, heading}) => {
  return (
    <Container>
      <h2>{heading}</h2>
      <ul>
        <li>{item1}</li>
        <li>{item2}</li>
      </ul>
    </Container>
  );
};

export default List;
