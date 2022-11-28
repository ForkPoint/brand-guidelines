import { createGlobalStyle } from "styled-components";
import muli from "../fonts/fonts";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.text};
        font-family: 'Muli', sans-serif;
        letter-spacing: 1.1px;
    }
`;
