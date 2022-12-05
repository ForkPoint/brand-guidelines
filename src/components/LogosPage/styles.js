import styled from "styled-components";
import { btnSecondarySmall } from "../../styles/variables";

export const LogoRow = styled.div`
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
`;

export const LogoColumn = styled.div`
    flex: 1 22%;
    text-align: left;
    margin-right: 10px;
    border-radius: 6px;
    padding: 20px 40px;
`;

export const BtnPrimarySmall = styled.button`
    ${btnSecondarySmall}
`;