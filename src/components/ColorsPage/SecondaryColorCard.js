import React, { useState } from "react";
import { BtnSecondarySmall } from "../ButtonPage/styles";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Container } from "../Layout/styles";
import { ColorColumn, ColorDescription, ColorGrid } from "./stylesPrimary";

import {
  ColorPaleSecondary,
  ColorSaturade,
  ColorSaturadeSecondary,
  ColorPale,
  ColorBright,
  ColorBrightSecondary,
  ColorSaturadeTertiary,
  ColorPaleTertiary,
  ColorBrightTertiary,
} from "./stylesSecondary";

const SecondaryColorCard = ({}) => {
  const colors = {
    firstColor: "#11a1e0",
    secondaryColor: "#587236",
    tertiaryColor: "#FDFD96"
  }
  const [copiedPrimary, setCopiedPrimary] = useState(false);
  const [copiedSecondary, setCopiedSecondary] = useState(false);
  const [copiedTertiary, setCopiedTertiary] = useState(false);

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
              <strong>RGB:</strong> 17 161 224
            </p>
            <p>
              <strong>CMYK:</strong> 92 28 0 12
            </p>
            <p>
              <strong>HEX:</strong> 11a1e0
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
              <strong>RGB:</strong> 88 114 54
            </p>
            <p>
              <strong>CMYK:</strong> 0.23 0 0.53 0.55
            </p>
            <p>
              <strong>HEX:</strong> 587236
            </p>
            <CopyToClipboard text={colors.secondaryColor} onCopy={() => setCopiedSecondary(true)}><BtnSecondarySmall>{copiedSecondary ? <span>Copied!</span> : 'Copy'}</BtnSecondarySmall></CopyToClipboard>
          </ColorDescription>
        </ColorColumn>
        <ColorColumn>
          <ColorBrightTertiary>
            <ColorPaleTertiary>
              <ColorSaturadeTertiary />
            </ColorPaleTertiary>
          </ColorBrightTertiary>
          <ColorDescription>
            <p>
              <strong>RGB:</strong> 253 253 150
            </p>
            <p>
              <strong>CMYK:</strong> 0 0 0.41 0.01
            </p>
            <p>
              <strong>HEX:</strong> FDFD96
            </p>
            <CopyToClipboard text={colors.tertiaryColor} onCopy={() => setCopiedTertiary(true)}><BtnSecondarySmall>{copiedTertiary ? <span>Copied!</span> : 'Copy'}</BtnSecondarySmall></CopyToClipboard>
          </ColorDescription>
        </ColorColumn>
      </ColorGrid>
    </Container>
  );
};

export default SecondaryColorCard;
