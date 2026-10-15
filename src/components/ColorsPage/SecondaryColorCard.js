import React, { useState } from "react";
import { BtnSecondarySmall } from "../ButtonPage/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
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

const SecondaryColorCard = () => {
  const colors = {
    black: "#000000",
    gray: "#818181",
    white: "#ffffff",
  };
  const [copiedBlack, setCopiedBlack] = useState(false);
  const [copiedGray, setCopiedGray] = useState(false);
  const [copiedWhite, setCopiedWhite] = useState(false);

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
            <h4 style={{ margin: "10px 0 5px" }}>Pure Black</h4>
            <p>
              <strong>RGB:</strong> 0 0 0
            </p>
            <p>
              <strong>CMYK:</strong> 0 0 0 100
            </p>
            <p>
              <strong>HEX:</strong> #000000
            </p>
            <CopyToClipboard text={colors.black} onCopy={() => setCopiedBlack(true)}>
              <BtnSecondarySmall>{copiedBlack ? <span>Copied!</span> : "Copy HEX"}</BtnSecondarySmall>
            </CopyToClipboard>
          </ColorDescription>
        </ColorColumn>

        <ColorColumn>
          <ColorBrightSecondary>
            <ColorPaleSecondary>
              <ColorSaturadeSecondary />
            </ColorPaleSecondary>
          </ColorBrightSecondary>
          <ColorDescription>
            <h4 style={{ margin: "10px 0 5px" }}>Neutral Gray (50%)</h4>
            <p>
              <strong>RGB:</strong> 129 129 129
            </p>
            <p>
              <strong>CMYK:</strong> 0 0 0 50
            </p>
            <p>
              <strong>HEX:</strong> #818181
            </p>
            <CopyToClipboard text={colors.gray} onCopy={() => setCopiedGray(true)}>
              <BtnSecondarySmall>{copiedGray ? <span>Copied!</span> : "Copy HEX"}</BtnSecondarySmall>
            </CopyToClipboard>
          </ColorDescription>
        </ColorColumn>

        <ColorColumn>
          <ColorBrightTertiary>
            <ColorPaleTertiary>
              <ColorSaturadeTertiary />
            </ColorPaleTertiary>
          </ColorBrightTertiary>
          <ColorDescription>
            <h4 style={{ margin: "10px 0 5px" }}>Pure White</h4>
            <p>
              <strong>RGB:</strong> 255 255 255
            </p>
            <p>
              <strong>CMYK:</strong> 0 0 0 0
            </p>
            <p>
              <strong>HEX:</strong> #ffffff
            </p>
            <CopyToClipboard text={colors.white} onCopy={() => setCopiedWhite(true)}>
              <BtnSecondarySmall>{copiedWhite ? <span>Copied!</span> : "Copy HEX"}</BtnSecondarySmall>
            </CopyToClipboard>
          </ColorDescription>
        </ColorColumn>
      </ColorGrid>
    </Container>
  );
};

export default SecondaryColorCard;

