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
    margin-right: 10px;
    border-radius: 6px;
    padding: 20px 40px;
    background-color: #ffffff;
`;

export const LogoColumnNegative = styled.div`
    flex: 1 22%;
    text-align: left;
    margin-right: 10px;
    border-radius: 6px;
    padding: 20px 40px;
    color: #ffffff;
    background-color: #000000;
`;

export const BtnPrimarySmall = styled.button`
    ${btnSecondaryMedium}
`;