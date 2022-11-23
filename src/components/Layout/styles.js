import styled from "styled-components";

import { v } from "../../styles/variables";

export const SLayout = styled.div`
    display: flex;
`;

export const SMain = styled.main`
    padding: calc(${v.smSpacing} * 2);

    h1 {
        font-size: 36px;
        margin: 7px 0px;
    }

    h2 {
        font-size: 24px;
        margin: 7px 0px;
    }

    p {
        font-size: 18px;
        margin: 5px 0;
    }

    ul {
        font-size: 18px;
        margin: 10px 0;
    }

    li {
        margin-bottom: 10px;
    }
`;
