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
  background: rgb(138, 207, 49);
  background: linear-gradient(
    90deg,
    rgba(138, 207, 49, 0.6951155462184874) 0%,
    rgba(17, 161, 224, 0.7147233893557423) 100%
  );
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

export const BtnPrimarySmall = styled.button`
  ${btnPrimarySmall}
`;

export const BtnPrimaryMedium = styled.button`
  ${btnPrimaryMedium}
`;

export const BtnPrimaryLarge = styled.button`
  ${btnPrimaryLarge}
`;

export const BtnSecondarySmall = styled.button`
  ${btnSecondarySmall}
`;

export const BtnSecondaryMedium = styled.button`
  ${btnSecondaryMedium}
`;

export const BtnSecondaryLarge = styled.button`
  ${btnSecondaryLarge}
`;

export const BtnTertiarySmall = styled.button`
  ${btnTertiarySmall}
`;

export const BtnTertiaryMedium = styled.button`
  ${btnTertiaryMedium}
`;

export const BtnTertiaryLarge = styled.button`
  ${btnTertiaryLarge}
`;

export const BtnFourthSmall = styled.button`
  ${btnFourthSmall}
`;

export const BtnFourthMedium = styled.button`
  ${btnFourthMedium}
`;

export const BtnFourthLarge = styled.button`
  ${btnFourthLarge}
`;
