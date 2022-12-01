import React from "react";
import { Container } from "../Layout/styles";
import {
  ColorBright,
  ColorColumn,
  ColorGrid,
  ColorPale,
  ColorSaturade,
  ColorDescription,
  ColorSaturadeSecondary,
  ColorPaleSecondary,
  ColorBrightSecondary,
} from "./stylesPrimary";

const PrimaryColorCard = ({}) => {
  return (
    <Container>
      <ColorGrid>
        <ColorColumn>
          <ColorBright>
            <ColorPale>
              <ColorSaturade />
            </ColorPale>
          </ColorBright>
          <ColorDescription>
            <p>
              <strong>RGB:</strong> 138 207 490
            </p>
            <p>
              <strong>CMYK:</strong> 60 0 100 0
            </p>
            <p>
              <strong>HEX:</strong> 8acf31
            </p>
          </ColorDescription>
        </ColorColumn>
        <ColorColumn>
          <ColorBrightSecondary>
            <ColorPaleSecondary>
              <ColorSaturadeSecondary />
            </ColorPaleSecondary>
          </ColorBrightSecondary>
          <ColorDescription>
            <p>
              <strong>RGB:</strong> 87 87 87
            </p>
            <p>
              <strong>CMYK:</strong> 0 0 0 80
            </p>
            <p>
              <strong>HEX:</strong> 575757
            </p>
          </ColorDescription>
        </ColorColumn>
      </ColorGrid>
    </Container>
  );
};

export default PrimaryColorCard;
