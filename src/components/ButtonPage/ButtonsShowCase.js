import React from "react";
import { Container } from "../Layout/styles";
import {
  ContentWrapper,
  Content,
  ButtonPresentation,
  BtnSmallPresent,
  BtnMediumPresent,
  BtnLargePresent,
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
  Showcase
} from "./styles";

const handleClick = () => {
  console.log('heheheh')
};

const ButtonsShowCase = ({}) => {
  return (
    <Container>
      <ContentWrapper>
        <Content>
          <p>
            The size of buttons depends on the base font size used which can be
            adapted to the viewport width.
          </p>
          <ul>
            <li>
              Small button at a base font size of 16 px, e.g. in a smartphone
              app.
            </li>
            <li>
              Medium sized button at a base font size of 18 px, e.g. in a tablet
              app.
            </li>
            <li>
              Large button at a base font size of 20 px, e.g. on a website which
              is rendered in a wide viewport.
            </li>
          </ul>
          <p>
            The minimum width of primary and secondary buttons is defined as
            nine times the base font size. Thus, with a base font size of 16 px,
            the minimum button width is 9 × 16 px = 144 px.
          </p>
          <p>
            For small viewports, the font size and padding for the label can be
            adjusted on the left and right.
          </p>
        </Content>
        <ButtonPresentation>
          <div>
            <p>S</p>
            <BtnSmallPresent type="button" onClick={handleClick}>Button</BtnSmallPresent>
          </div>
          <div>
            <p>M</p>
            <BtnMediumPresent>Button</BtnMediumPresent>
          </div>
          <div>
            <p>L</p>
            <BtnLargePresent>Button</BtnLargePresent>
          </div>
        </ButtonPresentation>
      </ContentWrapper>
      <Showcase>
        <div>
          <h5>Primary Buttons</h5>
          <h6>S</h6>
          <BtnPrimarySmall>#8acf31</BtnPrimarySmall>
          <h6>M</h6>
          <BtnPrimaryMedium>RGB: 138 207 490</BtnPrimaryMedium>
          <h6>L</h6>
          <BtnPrimaryLarge>CMYK: 60 0 100 0</BtnPrimaryLarge>
        </div>
        <div>
          <h5>Secondary Buttons</h5>
          <h6>S</h6>
          <BtnSecondarySmall>#575757</BtnSecondarySmall>
          <h6>M</h6>
          <BtnSecondaryMedium>RGB: 87 87 87</BtnSecondaryMedium>
          <h6>L</h6>
          <BtnSecondaryLarge>CMYK: 0 0 0 80</BtnSecondaryLarge>
        </div>
        <div>
          <h5>Tertiary Buttons</h5>
          <h6>S</h6>
          <BtnTertiarySmall>#11a1e0</BtnTertiarySmall>
          <h6>M</h6>
          <BtnTertiaryMedium>RGB: 17 161 224</BtnTertiaryMedium>
          <h6>L</h6>
          <BtnTertiaryLarge>CMYK: 92 28 0 12</BtnTertiaryLarge>
        </div>
        <div>
          <h5>Fourth Buttons</h5>
          <h6>S</h6>
          <BtnFourthSmall>#FDFD96</BtnFourthSmall>
          <h6>M</h6>
          <BtnFourthMedium>RGB: 0 0 0.41 0.01</BtnFourthMedium>
          <h6>L</h6>
          <BtnFourthLarge>CMYK: 92 28 0 12</BtnFourthLarge>
        </div>
      </Showcase>
    </Container>
  );
};

export default ButtonsShowCase;
