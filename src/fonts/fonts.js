import { createGlobalStyle } from "styled-components";
import Muli from "../fonts/Muli.ttf";

export default createGlobalStyle `
    @font-face {
        font-family: 'Muli';
        src: local('Muli'),
        url (${Muli}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;