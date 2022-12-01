import React from "react";
import { penArt } from "../../assets";
import { Container } from "../Layout/styles";
import { ContentLayout, BubbleAnimation, Content } from "./styles";

const Brand = ({}) => {
  return (
    <Container>
      <ContentLayout>
        <BubbleAnimation />
        <Content>
          <h1>Brand Manual</h1>
          <p>It all starts here. Use this guide as a high-level overview
            of how the ForkPoint brand comes to life.
          </p>
          <img src={penArt} width="100%"></img>
        </Content>
      </ContentLayout>
    </Container>
  );
};

export default Brand;
