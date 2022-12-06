import styled from "styled-components";
import { btnSecondaryMedium } from "../../styles/variables";

export const LogoRow = styled.div`
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
`;

export const LogoColumnPositive = styled.div`
    flex: 1 22%;
    text-align: left;
    padding: 20px 0px;
`;

export const LogoColumnNegative = styled.div`
    flex: 1 22%;
    text-align: left;
    padding: 20px 0px;
`;

export const BackgroundDark = styled.div`
    background-color: #575757;
    padding: 10px 20px;
`;

export const BackgroundBright = styled.div`
    background-color: #ffffff;
    padding: 10px 20px;
`;

export const BtnPrimarySmall = styled.button`
    ${btnSecondaryMedium}
`;