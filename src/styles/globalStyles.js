import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.text};
        font-family: 'Open Sans', sans-serif;
        letter-spacing: 1.1px;
        line-height: 1.3;
        word-spacing: 0.01mm;
    }
`;
