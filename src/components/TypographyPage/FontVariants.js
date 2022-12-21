import React from "react";
import useTextChange from "../../hooks/change-typography-text";
import { Container } from "../Layout/styles";
import { RiLineHeight } from "react-icons/ri";
import { CgFontSpacing } from "react-icons/cg";
import { RiTextSpacing } from "react-icons/ri";
import {
  TypeStyle,
  PublicSansFont,
  MuliFont,
  RobotoFont,
  OswaldFont,
  ArkibalFont,
  SaintGeorgeFont,
  Row,
  FontDeclaration,
  ContentExample,
  FontShowcase,
  AlphabetIntro,
  FontDivider,
  BoldType,
  RegularType,
  LightType,
  Montserrat,
  Spacing,
  TextInput,
} from "./styles";
import {
  BtnSecondaryMedium,
  BtnSecondaryTextLarge,
} from "../ButtonPage/styles";

const FontVariants = ({}) => {
  const { value: enteredValue, inputChangeHandler: handleChange } =
    useTextChange((value) => value);
  return (
    <Container>
      <h5>Type styles</h5>
      <TypeStyle>
        <div>
          <spam>H1 (36px)</spam>
        </div>
        <div>
          <spam>H2 (32px)</spam>
        </div>
        <div>
          <spam>H3 (28px)</spam>
        </div>
        <div>
          <spam>H4 (24px)</spam>
        </div>
        <div>
          <spam>H5 (22px)</spam>
        </div>
        <div>
          <spam>H6 (20px)</spam>
        </div>
        <div>
          <spam>Body (18px)</spam>
        </div>
        <div>
          <spam>Footnote (16px)</spam>
        </div>
      </TypeStyle>
      <Spacing>
        <div>
          <RiLineHeight />
          <p>line-height: 1.3</p>
        </div>
        <div>
          <RiTextSpacing />
          <p>letter-spacing: 1.1</p>
        </div>
        <div>
          <CgFontSpacing />
          <p>word-spacing: 0.01mm</p>
        </div>
      </Spacing>
      <TextInput>
        <h4>Check your text</h4>
        <textarea placeholder="Start typing..." onChange={handleChange} />
      </TextInput>
      <div>
        <Row>
          <FontDeclaration>
            <h1>Open Sans</h1>
            <BoldType>Bold</BoldType>
            <RegularType>Regular</RegularType>
            <LightType>Light</LightType>
          </FontDeclaration>
          <ContentExample>
            <p>
              {enteredValue
                ? enteredValue
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </p>
            <a href="https://fonts.google.com/download?family=Open%20Sans">
              <BtnSecondaryMedium>Download Font</BtnSecondaryMedium>
            </a>
            <BtnSecondaryTextLarge href="https://fonts.google.com/specimen/Open+Sans?query=open+sans">
              Font info
            </BtnSecondaryTextLarge>
          </ContentExample>
        </Row>
        <Row>
          <AlphabetIntro>
            <span>Aa</span>
          </AlphabetIntro>
          <FontShowcase>
            <span>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
              Ww Xx Yy Zz
            </span>
            <p>01 02 03 04 05 06 07 08 09</p>
          </FontShowcase>
        </Row>
        <FontDivider />
      </div>
      <PublicSansFont>
        <Row>
          <FontDeclaration>
            <h1>Public Sans</h1>
            <BoldType>Bold</BoldType>
            <RegularType>Regular</RegularType>
            <LightType>Light</LightType>
          </FontDeclaration>
          <ContentExample>
            <p>
              {enteredValue ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </p>
            <a href="https://fonts.google.com/download?family=Public%20Sans">
              <BtnSecondaryMedium>Download Font</BtnSecondaryMedium>
            </a>
            <BtnSecondaryTextLarge href="https://fonts.google.com/specimen/Public+Sans?query=public+sans">
              Font Info
            </BtnSecondaryTextLarge>
          </ContentExample>
        </Row>
        <Row>
          <AlphabetIntro>
            <span>Aa</span>
          </AlphabetIntro>
          <FontShowcase>
            <span>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
              Ww Xx Yy Zz
            </span>
            <p>01 02 03 04 05 06 07 08 09</p>
          </FontShowcase>
        </Row>
        <FontDivider />
      </PublicSansFont>
      <MuliFont>
        <Row>
          <FontDeclaration>
            <h1>Muli</h1>
            <BoldType>Bold</BoldType>
            <RegularType>Regular</RegularType>
            <LightType>Light</LightType>
          </FontDeclaration>
          <ContentExample>
            <p>
              {enteredValue
                ? enteredValue
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </p>
            <a href="https://www.fontsquirrel.com/fonts/download/muli">
              <BtnSecondaryMedium>Download Font</BtnSecondaryMedium>
            </a>
            <BtnSecondaryTextLarge href="https://fonts.adobe.com/fonts/muli">
              Font Info
            </BtnSecondaryTextLarge>
          </ContentExample>
        </Row>
        <Row>
          <AlphabetIntro>
            <span>Aa</span>
          </AlphabetIntro>
          <FontShowcase>
            <span>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
              Ww Xx Yy Zz
            </span>
            <p>01 02 03 04 05 06 07 08 09</p>
          </FontShowcase>
        </Row>
        <FontDivider />
      </MuliFont>
      <RobotoFont>
        <Row>
          <FontDeclaration>
            <h1>Roboto</h1>
            <BoldType>Bold</BoldType>
            <RegularType>Regular</RegularType>
            <LightType>Light</LightType>
          </FontDeclaration>
          <ContentExample>
            <p>
              {enteredValue
                ? enteredValue
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </p>
            <a href="https://fonts.google.com/download?family=Roboto">
              <BtnSecondaryMedium>Download Font</BtnSecondaryMedium>
            </a>
            <BtnSecondaryTextLarge href="https://fonts.google.com/specimen/Roboto?preview.text=Qkokookokk&preview.text_type=custom&query=roboto">
              Font Info
            </BtnSecondaryTextLarge>
          </ContentExample>
        </Row>
        <Row>
          <AlphabetIntro>
            <span>Aa</span>
          </AlphabetIntro>
          <FontShowcase>
            <span>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
              Ww Xx Yy Zz
            </span>
            <p>01 02 03 04 05 06 07 08 09</p>
          </FontShowcase>
        </Row>
        <FontDivider />
      </RobotoFont>
      <OswaldFont>
        <Row>
          <FontDeclaration>
            <h1>Oswald</h1>
            <BoldType>Bold</BoldType>
            <RegularType>Regular</RegularType>
            <LightType>Light</LightType>
          </FontDeclaration>
          <ContentExample>
            <p>
              {enteredValue
                ? enteredValue
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </p>
            <a href="https://fonts.google.com/download?family=Oswald">
              <BtnSecondaryMedium>Download Font</BtnSecondaryMedium>
            </a>
            <BtnSecondaryTextLarge href="https://fonts.google.com/specimen/Oswald?preview.text=Qkokookokk&preview.text_type=custom&query=oswald">
              Font Info
            </BtnSecondaryTextLarge>
          </ContentExample>
        </Row>
        <Row>
          <AlphabetIntro>
            <span>Aa</span>
          </AlphabetIntro>
          <FontShowcase>
            <span>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
              Ww Xx Yy Zz
            </span>
            <p>01 02 03 04 05 06 07 08 09</p>
          </FontShowcase>
        </Row>
        <FontDivider />
      </OswaldFont>
      <Montserrat>
        <Row>
          <FontDeclaration>
            <h1>Montserrat</h1>
            <BoldType>Bold</BoldType>
            <RegularType>Regular</RegularType>
            <LightType>Light</LightType>
          </FontDeclaration>
          <ContentExample>
            <p>
              {enteredValue
                ? enteredValue
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </p>
            <a href="https://fonts.google.com/download?family=Montserrat">
              <BtnSecondaryMedium>Download Font</BtnSecondaryMedium>
            </a>
            <BtnSecondaryTextLarge href="https://fonts.google.com/specimen/Montserrat?preview.text=Qkokookokk&preview.text_type=custom&query=montserrat">
              Font Info
            </BtnSecondaryTextLarge>
          </ContentExample>
        </Row>
        <Row>
          <AlphabetIntro>
            <span>Aa</span>
          </AlphabetIntro>
          <FontShowcase>
            <span>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
              Ww Xx Yy Zz
            </span>
            <p>01 02 03 04 05 06 07 08 09</p>
          </FontShowcase>
        </Row>
        <FontDivider />
      </Montserrat>
      <ArkibalFont>
        <Row>
          <FontDeclaration>
            <h1>Arkibal</h1>
            <BoldType>Bold</BoldType>
            <RegularType>Regular</RegularType>
            <LightType>Light</LightType>
          </FontDeclaration>
          <ContentExample>
            <p>
              {enteredValue
                ? enteredValue
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </p>
            <a href="https://allbestfonts.com/wp-content/uploads/2017/12/elements-arkibal-serif-58UCG6-2017-03-03.zip">
              <BtnSecondaryMedium>Download Font</BtnSecondaryMedium>
            </a>
            <BtnSecondaryTextLarge href="https://allbestfonts.com/arkibal-serif/">
              Font Info
            </BtnSecondaryTextLarge>
          </ContentExample>
        </Row>
        <Row>
          <AlphabetIntro>
            <span>Aa</span>
          </AlphabetIntro>
          <FontShowcase>
            <span>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
              Ww Xx Yy Zz
            </span>
            <p>01 02 03 04 05 06 07 08 09</p>
          </FontShowcase>
        </Row>
        <FontDivider />
      </ArkibalFont>
      <SaintGeorgeFont>
        <Row>
          <FontDeclaration>
            <h1>Saint George</h1>
            <BoldType>Bold</BoldType>
            <RegularType>Regular</RegularType>
            <LightType>Light</LightType>
          </FontDeclaration>
          <ContentExample>
            <p>
              {enteredValue
                ? enteredValue
                : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            </p>
            <a href="https://www.fontmirror.com/app_public/files/t/1/family_zip/2022/11/Saint_George_Font_Family_(Fontmirror).zip">
              <BtnSecondaryMedium>Download Font</BtnSecondaryMedium>
            </a>
            <BtnSecondaryTextLarge href="https://www.dafontfree.co/saint-george-typeface-free/">
              Font Info
            </BtnSecondaryTextLarge>
          </ContentExample>
        </Row>
        <Row>
          <AlphabetIntro>
            <span>Aa</span>
          </AlphabetIntro>
          <FontShowcase>
            <span>
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv
              Ww Xx Yy Zz
            </span>
            <p>01 02 03 04 05 06 07 08 09</p>
          </FontShowcase>
        </Row>
      </SaintGeorgeFont>
    </Container>
  );
};

export default FontVariants;
