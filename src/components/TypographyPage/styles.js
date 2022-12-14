import styled from "styled-components";

export const TypeStyle = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(8, 1fr);
  margin: 20px 0;
  height: 50px;
  background-color: #fdfd96;
  text-align: center;
  @media only screen and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
    grid-template-rows: repeat(2, 50px);
    height: 100px;
  }
`;

export const TextInput = styled.div`
  font-size: 22px;
  text-align: center;
  color: #575757;

  span {
    margin-right: 10px;
  }

  textarea {
    width: 100%;
    padding: 7px;
    font-size: 24px;
    height: 80px;
    background-color: #f5f5f5;
    border-radius: 3px;
    border: 0.5px solid #c5c5c5;
  }
`;

export const Spacing = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
`;

export const PublicSansFont = styled.div`
  font-family: "Public Sans";
`;

export const MuliFont = styled.div`
  font-family: "Muli";
`;

export const RobotoFont = styled.div`
  font-family: "Roboto";
`;

export const OswaldFont = styled.div`
  font-family: "Oswald";
`;

export const Montserrat = styled.div`
  font-family: "Montserrat";
`;

export const ArkibalFont = styled.div`
  font-family: "Arkibal Serif";
`;

export const SaintGeorgeFont = styled.div`
  font-family: "Saint George";
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 15px 10px;
  align-items: baseline;
  justify-content: space-between;
`;

export const FontDeclaration = styled.div`
  flex: 1 20%;
  color: #587236;
`;

export const ContentExample = styled.div`
  flex: 1 70%;
`;

export const FontShowcase = styled.div`
  flex: 1 70%;
  font-size: 20px;
  text-align: left;
`;

export const AlphabetIntro = styled.div`
  flex: 1 20%;
  font-size: 60px;
  text-align: left;
`;

export const FontDivider = styled.hr`
  background-color: #587236;
  height: 5px;
  width: 100%;
`;

export const BoldType = styled.p`
  font-weight: 600;
`;

export const RegularType = styled.p`
  font-weight: 400;
`;

export const LightType = styled.p`
  font-weight: 100;
`;


