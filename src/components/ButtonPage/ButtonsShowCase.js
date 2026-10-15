import React from "react";
import { buttonSizes } from "../../assets";
import { Container } from "../Layout/styles";
import {
  ContentWrapper,
  Content,
  ButtonPresentation,
  BtnPrimarySmall,
  BtnSecondarySmall,
  BtnTertiarySmall,
  BtnFourthSmall,
  BtnPrimaryGhostSmall,
  BtnSecondaryGhostSmall,
  BtnTertiaryGhostSmall,
  BtnFourthGhostSmall,
  DarkScreenContainer,
  BrightScreenContainer,
  BtnPrimaryTextSmall,
  BtnSecondaryTextSmall,
  BtnTertiaryTextSmall,
  BtnFourthTextSmall,
  ButtonsGrid,
} from "./styles";

const ButtonsShowCase = () => {
  return (
    <>
      <Container>
        <h3>Sizes and tap areas</h3>
        <ContentWrapper>
          <Content>
            <p>
              The size of buttons depends on the base font size used which can
              be adapted to the viewport width.
            </p>
            <ul>
              <li>
                Small button at a base font size of 16 px, e.g. in a smartphone
                app.
              </li>
              <li>
                Medium sized button at a base font size of 18 px, e.g. in a
                tablet app.
              </li>
              <li>
                Large button at a base font size of 20 px, e.g. on a website
                which is rendered in a wide viewport.
              </li>
            </ul>
            <p>
              For small viewports, the font size and padding for the label can
              be adjusted on the left and right.
            </p>
          </Content>
          <ButtonPresentation>
            <img src={buttonSizes} alt="Forkpoint button sizes and tap area guidelines" />
          </ButtonPresentation>
        </ContentWrapper>
        <ButtonsGrid>
          {/* Row 1: Solid Buttons */}
          <BrightScreenContainer>
            <BtnPrimarySmall>Action</BtnPrimarySmall>
            <p><strong>Primary Solid</strong></p>
            <span style={{ fontSize: "13px", opacity: 0.7 }}>Forkpoint Green</span>
          </BrightScreenContainer>
          <BrightScreenContainer>
            <BtnSecondarySmall>Action</BtnSecondarySmall>
            <p><strong>Secondary Solid</strong></p>
            <span style={{ fontSize: "13px", opacity: 0.7 }}>Dark Space</span>
          </BrightScreenContainer>
          <BrightScreenContainer>
            <BtnTertiarySmall>Action</BtnTertiarySmall>
            <p><strong>Neutral Solid</strong></p>
            <span style={{ fontSize: "13px", opacity: 0.7 }}>Pure Black</span>
          </BrightScreenContainer>
          <DarkScreenContainer>
            <BtnFourthSmall>Action</BtnFourthSmall>
            <p><strong>Inverted Solid</strong></p>
            <span style={{ fontSize: "13px", opacity: 0.85 }}>White on Dark</span>
          </DarkScreenContainer>

          {/* Row 2: Outlined / Ghost Buttons */}
          <BrightScreenContainer>
            <BtnPrimaryGhostSmall>Action</BtnPrimaryGhostSmall>
            <p><strong>Primary Outlined</strong></p>
            <span style={{ fontSize: "13px", opacity: 0.7 }}>Green Border</span>
          </BrightScreenContainer>
          <BrightScreenContainer>
            <BtnSecondaryGhostSmall>Action</BtnSecondaryGhostSmall>
            <p><strong>Secondary Outlined</strong></p>
            <span style={{ fontSize: "13px", opacity: 0.7 }}>Dark Space Border</span>
          </BrightScreenContainer>
          <BrightScreenContainer>
            <BtnTertiaryGhostSmall>Action</BtnTertiaryGhostSmall>
            <p><strong>Neutral Outlined</strong></p>
            <span style={{ fontSize: "13px", opacity: 0.7 }}>Black Border</span>
          </BrightScreenContainer>
          <DarkScreenContainer>
            <BtnFourthGhostSmall>Action</BtnFourthGhostSmall>
            <p><strong>Inverted Outlined</strong></p>
            <span style={{ fontSize: "13px", opacity: 0.85 }}>White Border on Dark</span>
          </DarkScreenContainer>

          {/* Row 3: Text Link Buttons */}
          <BrightScreenContainer>
            <BtnPrimaryTextSmall>Action Link →</BtnPrimaryTextSmall>
            <p><strong>Primary Text</strong></p>
            <span style={{ fontSize: "13px", opacity: 0.7 }}>Green Link</span>
          </BrightScreenContainer>
          <BrightScreenContainer>
            <BtnSecondaryTextSmall>Action Link →</BtnSecondaryTextSmall>
            <p><strong>Secondary Text</strong></p>
            <span style={{ fontSize: "13px", opacity: 0.7 }}>Dark Space Link</span>
          </BrightScreenContainer>
          <BrightScreenContainer>
            <BtnTertiaryTextSmall>Action Link →</BtnTertiaryTextSmall>
            <p><strong>Neutral Text</strong></p>
            <span style={{ fontSize: "13px", opacity: 0.7 }}>Black Link</span>
          </BrightScreenContainer>
          <DarkScreenContainer>
            <BtnFourthTextSmall>Action Link →</BtnFourthTextSmall>
            <p><strong>Inverted Text</strong></p>
            <span style={{ fontSize: "13px", opacity: 0.85 }}>White Link on Dark</span>
          </DarkScreenContainer>
        </ButtonsGrid>
      </Container>
    </>
  );
};

export default ButtonsShowCase;
