import React from "react";
import {
  iconClearspaceVector,
  logoClearspaceVector,
  logoVector1,
  logoVector2,
  logoVector3,
  logoVector4,
} from "../../assets";
import {
  LogoRow,
  LogoColumnPositive,
  LogoColumnNegative,
  BtnPrimaryMedium,
  BtnSecondaryMedium,
  BackgroundDark,
  BackgroundBright,
} from "./styles";
import { Container } from "../Layout/styles";
import Heading from "../Layout/Heading";
import List from "../Layout/List";

const text = {
  label: "This section contains the ForkPoint logo",
  heading: "Logo guidelines",
  listItem1: "Place the logo on white background",
  listItem2: "Never place the logo on images",
};

const LogosContainer = ({}) => {
  return (
    <div>
        <Container>
      <BackgroundBright>
          <Heading text="Logos" label={text.label} />
          <List
            heading={text.heading}
            item1={text.listItem1}
            item2={text.listItem2}
          />
          <LogoRow>
            <LogoColumnPositive>
              <img src={logoClearspaceVector} width="100%" height="150" />
              <a
                href={logoClearspaceVector}
                download="Logo Clearspace Vector"
                target="_blank"
              >
                <BtnSecondaryMedium>Download SVG</BtnSecondaryMedium>
              </a>
            </LogoColumnPositive>
            <LogoColumnPositive>
              <img src={iconClearspaceVector} width="100%" height="150" />
              <a
                href={iconClearspaceVector}
                download="Logo Clearspace Vector"
                target="_blank"
              >
                <BtnSecondaryMedium>Download SVG</BtnSecondaryMedium>
              </a>
            </LogoColumnPositive>
          </LogoRow>
          <LogoRow>
            <LogoColumnPositive>
              <p>Full color positive version</p>
              <img src={logoVector4} width="100%" height="150" />
              <a href={logoVector4} download="Logo" target="_blank">
                <BtnSecondaryMedium>Download SVG</BtnSecondaryMedium>
              </a>
            </LogoColumnPositive>
            <LogoColumnPositive>
              <p>Mono color positive version</p>
              <img src={logoVector3} width="100%" height="150" />
              <a href={logoVector3} download="Logo" target="_blank">
                <BtnSecondaryMedium>Download SVG</BtnSecondaryMedium>
              </a>
            </LogoColumnPositive>
          </LogoRow>
      </BackgroundBright>
        </Container>
      <BackgroundDark>
        <Container>
          <LogoRow>
            <LogoColumnNegative>
              <p>Full color negative version</p>
              <img src={logoVector1} width="100%" height="150" />
              <a href={logoVector1} download="Logo" target="_blank">
                <BtnPrimaryMedium>Download SVG</BtnPrimaryMedium>
              </a>
            </LogoColumnNegative>
            <LogoColumnNegative>
              <p>Mono color negative version</p>
              <img src={logoVector2} width="100%" height="150" />
              <a href={logoVector2} download="Logo" target="_blank">
                <BtnPrimaryMedium>Download SVG</BtnPrimaryMedium>
              </a>
            </LogoColumnNegative>
          </LogoRow>
        </Container>
      </BackgroundDark>
    </div>
  );
};

export default LogosContainer;
