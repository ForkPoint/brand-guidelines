import React, { useState } from "react";
import { Container } from "../Layout/styles";
import {CopyToClipboard} from 'react-copy-to-clipboard';
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
import {  BtnSecondarySmall } from "../ButtonPage/styles";

const PrimaryColorCard = ({}) => {
  const colors = {
    firstColor: "#8acf31",
    secondaryColor: "#575757"
  }
  const [copiedPrimary, setCopiedPrimary] = useState(false);
  const [copiedSecondary, setCopiedSecondary] = useState(false);

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
            <CopyToClipboard text={colors.firstColor} onCopy={() => setCopiedPrimary(true)}><BtnSecondarySmall>{copiedPrimary ? <span>Copied!</span> : 'Copy'}</BtnSecondarySmall></CopyToClipboard>
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
            <CopyToClipboard text={colors.secondaryColor} onCopy={() => setCopiedSecondary(true)}><BtnSecondarySmall>{copiedSecondary ? <span>Copied!</span> : 'Copy'}</BtnSecondarySmall></CopyToClipboard>
          </ColorDescription>
        </ColorColumn>
      </ColorGrid>
    </Container>
  );
};

export default PrimaryColorCard;
