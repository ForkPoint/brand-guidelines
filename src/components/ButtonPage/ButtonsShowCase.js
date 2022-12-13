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
        <ButtonsGrid>
          <BrightScreenContainer>
            <BtnPrimarySmall>Button</BtnPrimarySmall>
            <p>Primary Button</p>
          </BrightScreenContainer>
          <BrightScreenContainer>
            <BtnSecondarySmall>Button</BtnSecondarySmall>
            <p>Secondary Button</p>
          </BrightScreenContainer>
          <BrightScreenContainer>
            <BtnTertiarySmall>Button</BtnTertiarySmall>
            <p>Tertiary Button</p>
          </BrightScreenContainer>
          <DarkScreenContainer>
            <BtnFourthSmall>Button</BtnFourthSmall>
            <p>Fourth Button</p>
          </DarkScreenContainer>
          <BrightScreenContainer>
            <BtnPrimaryGhostSmall>Button</BtnPrimaryGhostSmall>
            <p>Outlined/Ghost Button</p>
          </BrightScreenContainer>
          <BrightScreenContainer>
            <BtnSecondaryGhostSmall>Button</BtnSecondaryGhostSmall>
            <p>Outlined/Ghost Button</p>
          </BrightScreenContainer>
          <BrightScreenContainer>
            <BtnTertiaryGhostSmall>Button</BtnTertiaryGhostSmall>
            <p>Outlined/Ghost Button</p>
          </BrightScreenContainer>
          <DarkScreenContainer>
            <BtnFourthGhostSmall>Button</BtnFourthGhostSmall>
            <p>Outlined/Ghost Button</p>
          </DarkScreenContainer>
          <BrightScreenContainer>
            <BtnPrimaryTextSmall>Button</BtnPrimaryTextSmall>
            <p>Text Button</p>
          </BrightScreenContainer>
          <BrightScreenContainer>
            <BtnSecondaryTextSmall>Button</BtnSecondaryTextSmall>
            <p>Text Button</p>
          </BrightScreenContainer>
          <BrightScreenContainer>
            <BtnTertiaryTextSmall>Button</BtnTertiaryTextSmall>
            <p>Text Button</p>
          </BrightScreenContainer>
          <DarkScreenContainer>
            <BtnFourthTextSmall>Button</BtnFourthTextSmall>
            <p>Text Button</p>
          </DarkScreenContainer>
        </ButtonsGrid>
      </Container>
    </>
  );
};

export default ButtonsShowCase;
