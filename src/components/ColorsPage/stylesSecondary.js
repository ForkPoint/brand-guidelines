import styled from "styled-components";

// Black Swatch
export const ColorBright = styled.div`
  height: 300px;
  width: 300px;
  background-color: #333333;
  margin: 0 auto;
  border-radius: 160px;
  position: relative;
`;

export const ColorPale = styled.div`
  height: 250px;
  width: 250px;
  left: 25px;
  top: 25px;
  background-color: #1a1a1a;
  margin: 0 auto;
  border-radius: 160px;
  position: absolute;
`;

export const ColorSaturade = styled.div`
  height: 200px;
  width: 200px;
  left: 25px;
  top: 25px;
  background-color: #000000;
  margin: 0 auto;
  border-radius: 160px;
  position: absolute;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.08);
  }
`;

// Neutral Gray Swatch
export const ColorBrightSecondary = styled.div`
  height: 300px;
  width: 300px;
  background-color: #e5e5e5;
  margin: 0 auto;
  border-radius: 160px;
  position: relative;
`;

export const ColorPaleSecondary = styled.div`
  height: 250px;
  width: 250px;
  left: 25px;
  top: 25px;
  background-color: #ababab;
  margin: 0 auto;
  border-radius: 160px;
  position: absolute;
`;

export const ColorSaturadeSecondary = styled.div`
  height: 200px;
  width: 200px;
  left: 25px;
  top: 25px;
  background-color: #818181;
  margin: 0 auto;
  border-radius: 160px;
  position: absolute;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.08);
  }
`;

// Pure White Swatch (with border/shadow for visibility)
export const ColorBrightTertiary = styled.div`
  height: 300px;
  width: 300px;
  background-color: #f0f2f5;
  border: 1px solid #e1e4e8;
  margin: 0 auto;
  border-radius: 160px;
  position: relative;
`;

export const ColorPaleTertiary = styled.div`
  height: 250px;
  width: 250px;
  left: 25px;
  top: 25px;
  background-color: #fafbfc;
  margin: 0 auto;
  border-radius: 160px;
  position: absolute;
`;

export const ColorSaturadeTertiary = styled.div`
  height: 200px;
  width: 200px;
  left: 25px;
  top: 25px;
  background-color: #ffffff;
  border: 1px solid #d0d7de;
  margin: 0 auto;
  border-radius: 160px;
  position: absolute;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.08);
  }
`;