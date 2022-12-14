import styled from "styled-components";

export const Textarea = styled.div`
  width: 100%;
  text-align: left;
  padding: 30px 0;

`;

export const PhotographyLayoutsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const PhotographyLayoutsColumn = styled.div`
  flex: 1 20%;
  width: 100%;
  height: 100%;
  margin-bottom: 80px;

  img {
    width: 85%;
    height: 100%;
    margin-bottom: 20px;
  }
`;

export const GreenBox = styled.div`
  width: 40px;
  height: 14px;
  background-color: #8acf31;
  display: inline-block;
  margin-right: 10px;
  align-items: baseline;
`;

export const BlueBox = styled.div`
  width: 40px;
  height: 14px;
  background-color: #11a1e0;
  display: inline-block;
  margin-right: 10px;
  align-items: baseline;
`;

export const YellowBox = styled.div`
  width: 40px;
  height: 14px;
  background-color: #fdfd96;
  display: inline-block;
  margin-right: 10px;
  align-items: baseline;
`;
