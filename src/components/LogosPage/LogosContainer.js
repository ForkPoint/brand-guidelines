import React from "react";
import {
  iconClearspaceVector,
  logoClearspaceVector,
  logoVector1,
  logoVector2,
  logoVector3,
  logoVector4,
} from "../../assets";
import { LogoRow, LogoColumn } from "./styles";
import { Container } from "../Layout/styles";

const LogosContainer = ({}) => {
  return (
    <Container>
      <LogoRow>
        <LogoRow>
          <img src={logoClearspaceVector} width="100%" height="150" />
        </LogoRow>
        <LogoRow>
          <img src={iconClearspaceVector} width="100%" height="150" />
        </LogoRow>
      </LogoRow>
      <LogoRow>
        <LogoColumn>
          <p>Full color positive version</p>
          <img src={logoVector1} width="100%" height="150" />
        </LogoColumn>
        <LogoColumn>
          <p>Full color negative version</p>
          <img src={logoVector2} width="100%" height="150" />
        </LogoColumn>
      </LogoRow>
      <LogoRow>
        <LogoColumn>
          <p>Mono color positive version</p>
          <img src={logoVector3} width="100%" height="150" />
        </LogoColumn>
        <LogoColumn>
          <p>Mono color negative version</p>
          <img src={logoVector4} width="100%" height="150" />
        </LogoColumn>
      </LogoRow>
    </Container>
  );
};

export default LogosContainer;
