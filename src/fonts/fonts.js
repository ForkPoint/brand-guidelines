import { createGlobalStyle } from "styled-components";

import Muli from "./Muli.woff";
import MuliLight from "./Muli-Light.woff";
import MuliBold from "./Muli-Bold.woff";
import Roboto from "./Roboto-Black.woff";
import RobotoLight from "./Roboto-Light.woff";
import Oswald from "./Oswald-Regular.woff";
import OswaldBold from "./Oswald-Bold.woff";
import OswaldLight from "./Oswald-Light.woff";
import PublicSans from "./PublicSans-Regular.woff";
import PublicSansBold from "./PublicSans-Bold.woff";
import PublicSansLight from "./PublicSans-Light.woff";
import SaintGeorge from "./Saint-George.woff";
import ArkibalSerif from "./ArkibalSerif-Regular.woff";
import ArkibalSerifBold from "./ArkibalSerif-Medium.woff";
import ArkibalSerifLight from "./ArkibalSerif-Light.woff";
import Montserrat from "./Montserrat-Regular.woff";
import MontserratBold from "./Montserrat-Bold.woff";
import MontserratLight from "./Montserrat-Light.woff";

export default createGlobalStyle `
    @font-face {
        font-family: 'Muli';
        src: local('Muli'), local('Muli'),
        url(${Muli}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Muli Bold';
        src: local('Muli'), local('Muli'),
        url(${MuliBold}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Muli Light';
        src: local('Muli'), local('Muli'),
        url(${MuliLight}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'),
        url(${Roboto}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Roboto Light';
        src: local('Roboto'),
        url(${RobotoLight}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Oswald';
        src: local('Oswald'),
        url(${Oswald}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Oswald Bold';
        src: local('Oswald'),
        url(${OswaldBold}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Oswald Light';
        src: local('Oswald'),
        url(${OswaldLight}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Public Sans';
        src: local('Public Sans'),
        url(${PublicSans}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Public Sans Bold';
        src: local('Public Sans'),
        url(${PublicSansBold}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Public Sans Light';
        src: local('Public Sans'),
        url(${PublicSansLight}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Saint George';
        src: local('Saint George'),
        url(${SaintGeorge}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Arkibal Serif';
        src: local('Arkibal Serif'),
        url(${ArkibalSerif}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Arkibal Serif Bold';
        src: local('Arkibal Serif'),
        url(${ArkibalSerifBold}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Arkibal Serif Light';
        src: local('Arkibal Serif'),
        url(${ArkibalSerifLight}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'),
        url(${Montserrat}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat Bold';
        src: local('Montserrat'),
        url(${MontserratBold}) format('woff');
        font-style: normal;
    }

    @font-face {
        font-family: 'Montserrat Light';
        src: local('Montserrat'),
        url(${MontserratLight}) format('woff');
        font-style: normal;
    }
`;