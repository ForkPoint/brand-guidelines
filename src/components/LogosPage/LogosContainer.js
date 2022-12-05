import React from "react";
import {
  iconClearspaceVector,
  logoClearspaceVector,
  logoVector1,
  logoVector2,
  logoVector3,
  logoVector4,
} from "../../assets";
import { LogoRow, LogoColumn, BtnPrimarySmall } from "./styles";
import { Container } from "../Layout/styles";

const LogosContainer = ({}) => {
  return (
    <Container>
      <LogoRow>
        <LogoRow>
          <LogoColumn>
            <img src={logoClearspaceVector} width="100%" height="150" />
            <a
              href={logoClearspaceVector}
              download="Logo Clearspace Vector"
              target="_blank"
            >
              <BtnPrimarySmall>Download SVG</BtnPrimarySmall>
            </a>
          </LogoColumn>
          <LogoColumn>
            <img src={iconClearspaceVector} width="100%" height="150" />
            <a
              href={iconClearspaceVector}
              download="Logo Clearspace Vector"
              target="_blank"
            >
              <BtnPrimarySmall>Download SVG</BtnPrimarySmall>
            </a>
          </LogoColumn>
        </LogoRow>
      </LogoRow>
      <LogoRow>
        <LogoColumn>
          <p>Full color positive version</p>
          <img src={logoVector1} width="100%" height="150" />
          <a
              href={logoVector1}
              download="Logo"
              target="_blank"
            >
              <BtnPrimarySmall>Download SVG</BtnPrimarySmall>
            </a>
        </LogoColumn>
        <LogoColumn>
          <p>Full color negative version</p>
          <img src={logoVector2} width="100%" height="150" />
          <a
              href={logoVector2}
              download="Logo"
              target="_blank"
            >
              <BtnPrimarySmall>Download SVG</BtnPrimarySmall>
            </a>
        </LogoColumn>
      </LogoRow>
      <LogoRow>
        <LogoColumn>
          <p>Mono color negative version</p>
          <img src={logoVector4} width="100%" height="150" />
          <a
              href={logoVector4}
              download="Logo"
              target="_blank"
            >
              <BtnPrimarySmall>Download SVG</BtnPrimarySmall>
            </a>
        </LogoColumn>
        <LogoColumn>
          <p>Mono color positive version</p>
          <img src={logoVector3} width="100%" height="150" />
          <a
              href={logoVector3}
              download="Logo"
              target="_blank"
            >
              <BtnPrimarySmall>Download SVG</BtnPrimarySmall>
            </a>
        </LogoColumn>
      </LogoRow>
    </Container>
  );
};

export default LogosContainer;
