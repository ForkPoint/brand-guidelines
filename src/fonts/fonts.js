import { createGlobalStyle } from "styled-components";

import Muli from "./Muli.woff";
import Roboto from "./Roboto-Black.woff";
import Oswald from "./Oswald-Regular.woff";
import PublicSans from "./PublicSans-Regular.woff";
import SaintGeorge from "./Saint-George.woff";
import ArkibalSerif from "./ArkibalSerif-Regular.woff";

export default createGlobalStyle `
    @font-face {
        font-family: 'Muli';
        src: local('Muli'),
        url(${Muli}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'),
        url(${Roboto}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Oswald';
        src: local('Oswald'),
        url(${Oswald}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Public Sans';
        src: local('Public Sans'),
        url(${PublicSans}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Saint George';
        src: local('Saint George'),
        url(${SaintGeorge}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Arkibal Serif';
        src: local('Arkibal Serif'),
        url(${ArkibalSerif}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;