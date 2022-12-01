import React from "react";
import { fullNegativeLogo, fullPositiveLogo, MonoNegativeLogo, MonoPositiveLogo } from "../../assets";
import { LogoRow, LogoColumn } from "./styles";
import { Container } from "../Layout/styles";

const LogosContainer = ({}) => {
  return (
    <Container>
      <LogoRow>
        <LogoColumn>
          <p>Full color positive version</p>
          <img src={fullNegativeLogo} width="auto" height="150"/>
        </LogoColumn>
        <LogoColumn>
          <p>Full color negative version</p>
          <img src={fullPositiveLogo} width="auto" height="150" />
        </LogoColumn>
      </LogoRow>
      <LogoRow>
        <LogoColumn>
          <p>Mono color positive version</p>
          <img src={MonoNegativeLogo} width="auto" height="150" />
        </LogoColumn>
        <LogoColumn>
          <p>Mono color negative version</p>
          <img src={MonoPositiveLogo} width="auto" height="150" />
        </LogoColumn>
      </LogoRow>
    </Container>
  );
};

export default LogosContainer;
