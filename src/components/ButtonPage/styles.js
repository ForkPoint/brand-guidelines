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

export const DarkScreenContainer = styled.div`
  padding: 15px 10px;
  border: 0.5px inset #ffffff;
  color: #ffffff;
  height: 100%;
  text-align: center;
  background-color: #575757;
`;

export const BrightScreenContainer = styled.div`
  border: 0.5px inset #c5c5c5;
  height: 100%;
  padding: 15px 10px;
  text-align: center;
`;

export const ButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(20%, 1fr));
  grid-template-rows: repeat(3, 130px);
  align-items: center;
  @media only screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
    grid-template-rows: repeat(6, 200px);
  }
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