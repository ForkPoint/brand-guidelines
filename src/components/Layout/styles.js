import styled from "styled-components";

import { v } from "../../styles/variables";

export const Container = styled.div`
    max-width: 1380px;
    margin: 0 auto;
    padding: 10px 10px;
`;

export const SMain = styled.main`
    padding: calc(${v.smSpacing} * 2);

    h1 {
        font-size: 36px;
        margin: 7px 0px 30px 0px;
        font-weight: 600;
    }

    h2 {
        font-size: 32px;
        margin: 7px 0px;
        font-weight: 500;
    }

    h3 {
        font-size: 28px;
        margin: 7px 0px;
        font-weight: 400;
    }

    h4 {
        font-size: 24px;
        margin: 7px 0px;
        font-weight: 300;
    }

    h5 {
        font-size: 22px;
        margin: 7px 0px;
        font-weight: 200;
    }

    h6 {
        font-size: 20px;
        margin: 7px 0px;
        font-weight: 100;
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
