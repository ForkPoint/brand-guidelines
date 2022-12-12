import styled from "styled-components";
import {
  btnPrimarySmall,
  btnPrimaryMedium,
  btnPrimaryLarge,
  btnSecondarySmall,
  btnSecondaryMedium,
  btnSecondaryLarge,
  btnTertiarySmall,
  btnTertiaryMedium,
  btnTertiaryLarge,
  btnFourthSmall,
  btnFourthMedium,
  btnFourthLarge,
  btnPrimaryGhostSmall,
  btnPrimaryGhostMedium,
  btnPrimaryGhostLarge,
  btnSecondaryGhostSmall,
  btnSecondaryGhostMedium,
  btnSecondaryGhostLarge,
  btnTertiaryGhostSmall,
  btnTertiaryGhostMedium,
  btnTertiaryGhostLarge,
  btnFourthGhostSmall,
  btnFourthGhostMedium,
  btnFourthGhostLarge,
  btnPrimaryTextSmall,
  btnPrimaryTextMedium,
  btnPrimaryTextLarge,
  btnSecondaryTextSmall,
  btnSecondaryTextMedium,
  btnSecondaryTextLarge,
  btnTertiaryTextSmall,
  btnTertiaryTextMedium,
  btnTertiaryTextLarge,
  btnFourthTextSmall,
  btnFourthTextMedium,
  btnFourthTextLarge,
} from "../../styles/variables";

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  flex: 1 20%;
  text-align: left;
  padding: 20px 10px 0 0;
`;

export const ButtonPresentation = styled.div`
  flex: 1 20%;
  width: 100%;
  padding: 20px 40px;
  text-align: center;
  border-radius: 6px;

  div {
    margin-bottom: 20px;
  }
`;

export const BtnSmallPresent = styled.button`
  font-size: 16px;
  padding: 10px 35px;
  background-color: #575757;
  color: #ffffff;
  border: none;
  border-radius: 1px;
  margin: 15px 0;
  width: 135px;
  height: 35px;
`;

export const BtnMediumPresent = styled.button`
  font-size: 18px;
  padding: 15px 45px;
  background-color: #575757;
  color: #ffffff;
  border: none;
  border-radius: 1px;
  margin: 15px 0;
  width: 245px;
  height: 45px;
`;

export const BtnLargePresent = styled.button`
  font-size: 20px;
  padding: 15px 60px;
  background-color: #575757;
  color: #ffffff;
  border: none;
  border-radius: 1px;
  margin: 15px 0;
  width: 285px;
  height: 55px;
`;

export const Showcase = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
`;

export const DarkScreenContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #ffffff;
  justify-content: space-evenly;
  text-align: center;
  background-color: #575757;
  max-width: 1360px;
  margin: 0 auto;
`;

export const BrightScreenContainer = styled.div`
  background-color: #ffffff;
  color: #575757;
  padding: 0px 8px;
`;

export const BtnPrimarySmall = styled.button`
  ${btnPrimarySmall}
`;

export const BtnPrimaryGhostSmall = styled.button`
  ${btnPrimaryGhostSmall}
`;

export const BtnPrimaryTextSmall = styled.a`
  ${btnPrimaryTextSmall}
`;

export const BtnPrimaryMedium = styled.button`
  ${btnPrimaryMedium}
`;

export const BtnPrimaryTextMedium = styled.a`
  ${btnPrimaryTextMedium}
`;

export const BtnPrimaryGhostMedium = styled.button`
  ${btnPrimaryGhostMedium}
`;

export const BtnPrimaryLarge = styled.button`
  ${btnPrimaryLarge}
`;

export const BtnPrimaryGhostLarge = styled.button`
  ${btnPrimaryGhostLarge}
`;

export const BtnPrimaryTextLarge = styled.a `
  ${btnPrimaryTextLarge}
`;

export const BtnSecondarySmall = styled.button`
  ${btnSecondarySmall}
`;

export const BtnSecondaryGhostSmall = styled.button`
  ${btnSecondaryGhostSmall}
`;

export const BtnSecondaryTextSmall = styled.a `
  ${btnSecondaryTextSmall}
`;

export const BtnSecondaryMedium = styled.button`
  ${btnSecondaryMedium}
`;

export const BtnSecondaryGhostMedium = styled.button`
  ${btnSecondaryGhostMedium}
`;

export const BtnSecondaryTextMedium = styled.a `
  ${btnSecondaryTextMedium}
`;

export const BtnSecondaryLarge = styled.button`
  ${btnSecondaryLarge}
`;

export const BtnSecondaryGhostLarge = styled.button`
  ${btnSecondaryGhostLarge}
`;

export const BtnSecondaryTextLarge = styled.a `
  ${btnSecondaryTextLarge}
`;

export const BtnTertiarySmall = styled.button`
  ${btnTertiarySmall}
`;

export const BtnTertiaryGhostSmall = styled.button`
  ${btnTertiaryGhostSmall}
`;

export const BtnTertiaryTextSmall = styled.a`
  ${btnTertiaryTextSmall}
`;

export const BtnTertiaryMedium = styled.button`
  ${btnTertiaryMedium}
`;

export const BtnTertiaryGhostMedium = styled.button`
  ${btnTertiaryGhostMedium}
`;

export const BtnTertiaryTextMedium = styled.a`
  ${btnTertiaryTextMedium}
`;

export const BtnTertiaryLarge = styled.button`
  ${btnTertiaryLarge}
`;

export const BtnTertiaryGhostLarge = styled.button`
  ${btnTertiaryGhostLarge}
`;

export const BtnTertiaryTextLarge = styled.a`
  ${btnTertiaryTextLarge}
`;

export const BtnFourthSmall = styled.button`
  ${btnFourthSmall}
`;

export const BtnFourthGhostSmall = styled.button`
  ${btnFourthGhostSmall}
`;

export const BtnFourthTextSmall = styled.a`
  ${btnFourthTextSmall}
`;

export const BtnFourthMedium = styled.button`
  ${btnFourthMedium}
`;

export const BtnFourthGhostMedium = styled.button`
  ${btnFourthGhostMedium}
`;

export const BtnFourthTextMedium = styled.a`
  ${btnFourthTextMedium}
`;

export const BtnFourthLarge = styled.button`
  ${btnFourthLarge}
`;

export const BtnFourthGhostLarge = styled.button`
  ${btnFourthGhostLarge}
`;

export const BtnFourthTextLarge = styled.a`
  ${btnFourthTextLarge}
`;