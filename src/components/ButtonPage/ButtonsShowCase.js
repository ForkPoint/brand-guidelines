import React from "react";
import { buttonPaddings, buttonSizes } from "../../assets";
import { Container } from "../Layout/styles";
import {
  ContentWrapper,
  Content,
  ButtonPresentation,
  BtnPrimarySmall,
  BtnPrimaryMedium,
  BtnPrimaryLarge,
  BtnSecondarySmall,
  BtnSecondaryMedium,
  BtnSecondaryLarge,
  BtnTertiarySmall,
  BtnTertiaryMedium,
  BtnTertiaryLarge,
  BtnFourthSmall,
  BtnFourthMedium,
  BtnFourthLarge,
  Showcase,
  BtnPrimaryGhostSmall,
  BtnPrimaryGhostMedium,
  BtnPrimaryGhostLarge,
  BtnSecondaryGhostSmall,
  BtnSecondaryGhostMedium,
  BtnSecondaryGhostLarge,
  BtnTertiaryGhostSmall,
  BtnTertiaryGhostMedium,
  BtnTertiaryGhostLarge,
  BtnFourthGhostSmall,
  BtnFourthGhostMedium,
  BtnFourthGhostLarge,
  DarkScreenContainer,
  BrightScreenContainer,
  BtnPrimaryTextSmall,
  BtnPrimaryTextMedium,
  BtnPrimaryTextLarge,
  BtnSecondaryTextSmall,
  BtnSecondaryTextMedium,
  BtnSecondaryTextLarge,
  BtnTertiaryTextSmall,
  BtnTertiaryTextMedium,
  BtnTertiaryTextLarge,
  BtnFourthTextSmall,
  BtnFourthTextMedium,
  BtnFourthTextLarge,
} from "./styles";

const ButtonsShowCase = ({}) => {
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
            <img src={buttonSizes}></img>
          </ButtonPresentation>
        </ContentWrapper>
        <Showcase>
          <div>
            <h5>Primary Buttons</h5>
            <h6>S</h6>
            <BtnPrimarySmall>Button</BtnPrimarySmall>
            <h6>M</h6>
            <BtnPrimaryMedium>Button Text</BtnPrimaryMedium>
            <h6>L</h6>
            <BtnPrimaryLarge>Button Text</BtnPrimaryLarge>
          </div>
          <div>
            <h5>Secondary Buttons</h5>
            <h6>S</h6>
            <BtnSecondarySmall>Button</BtnSecondarySmall>
            <h6>M</h6>
            <BtnSecondaryMedium>Button Text</BtnSecondaryMedium>
            <h6>L</h6>
            <BtnSecondaryLarge>Button Text</BtnSecondaryLarge>
          </div>
          <div>
            <h5>Tertiary Buttons</h5>
            <h6>S</h6>
            <BtnTertiarySmall>Button</BtnTertiarySmall>
            <h6>M</h6>
            <BtnTertiaryMedium>Button Text</BtnTertiaryMedium>
            <h6>L</h6>
            <BtnTertiaryLarge>Button Text</BtnTertiaryLarge>
          </div>
          <div>
            <h5>Fourth Buttons</h5>
            <h6>S</h6>
            <BtnFourthSmall>Button</BtnFourthSmall>
            <h6>M</h6>
            <BtnFourthMedium>Button Text</BtnFourthMedium>
            <h6>L</h6>
            <BtnFourthLarge>Button Text</BtnFourthLarge>
          </div>
        </Showcase>
      </Container>
      <DarkScreenContainer>
        <div>
          <h5>Primary Ghost Buttons</h5>
          <h6>S</h6>
          <BtnPrimaryGhostSmall>Button</BtnPrimaryGhostSmall>
          <h6>M</h6>
          <BtnPrimaryGhostMedium>Button</BtnPrimaryGhostMedium>
          <h6>L</h6>
          <BtnPrimaryGhostLarge>Button</BtnPrimaryGhostLarge>
          <div>
            <h5>Primary Text Buttons</h5>
            <h6>S</h6>
            <BtnPrimaryTextSmall>Button</BtnPrimaryTextSmall>
            <h6>M</h6>
            <BtnPrimaryTextMedium>Button</BtnPrimaryTextMedium>
            <h6>L</h6>
            <BtnPrimaryTextLarge>Button</BtnPrimaryTextLarge>
          </div>
        </div>
        <BrightScreenContainer>
          <h5>Secondary Ghost Buttons</h5>
          <h6>S</h6>
          <BtnSecondaryGhostSmall>Button</BtnSecondaryGhostSmall>
          <h6>M</h6>
          <BtnSecondaryGhostMedium>Buttton</BtnSecondaryGhostMedium>
          <h6>L</h6>
          <BtnSecondaryGhostLarge>Button</BtnSecondaryGhostLarge>
          <h5>Secondary Text Buttons</h5>
          <h6>S</h6>
          <BtnSecondaryTextSmall>Button</BtnSecondaryTextSmall>
          <h6>M</h6>
          <BtnSecondaryTextMedium>Buttton</BtnSecondaryTextMedium>
          <h6>L</h6>
          <BtnSecondaryTextLarge>Button</BtnSecondaryTextLarge>
        </BrightScreenContainer>
        <div>
          <h5>Tertiary Ghost Buttons</h5>
          <h6>S</h6>
          <BtnTertiaryGhostSmall>Button</BtnTertiaryGhostSmall>
          <h6>M</h6>
          <BtnTertiaryGhostMedium>Button</BtnTertiaryGhostMedium>
          <h6>L</h6>
          <BtnTertiaryGhostLarge>Button</BtnTertiaryGhostLarge>
          <h5>Tertiary Text Buttons</h5>
          <h6>S</h6>
          <BtnTertiaryTextSmall>Button</BtnTertiaryTextSmall>
          <h6>M</h6>
          <BtnTertiaryTextMedium>Button</BtnTertiaryTextMedium>
          <h6>L</h6>
          <BtnTertiaryTextLarge>Button</BtnTertiaryTextLarge>
        </div>
        <div>
          <h5>Fourth Ghost Buttons</h5>
          <h6>S</h6>
          <BtnFourthGhostSmall>Button</BtnFourthGhostSmall>
          <h6>M</h6>
          <BtnFourthGhostMedium>Button</BtnFourthGhostMedium>
          <h6>L</h6>
          <BtnFourthGhostLarge>Button</BtnFourthGhostLarge>
          <h5>Fourth Text Buttons</h5>
          <h6>S</h6>
          <BtnFourthTextSmall>Button</BtnFourthTextSmall>
          <h6>M</h6>
          <BtnFourthTextMedium>Button</BtnFourthTextMedium>
          <h6>L</h6>
          <BtnFourthTextLarge>Button</BtnFourthTextLarge>
        </div>
      </DarkScreenContainer>
    </>
  );
};

export default ButtonsShowCase;
