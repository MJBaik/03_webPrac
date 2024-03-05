import { createGlobalStyle } from "styled-components";
import CoperateLogoRoundedBold from "../assets/font/CoperateLogoRoundedBold.woff";

export const Global = createGlobalStyle`
  @font-face {
      font-family: 'CoperateLogoRoundedBold';
      font-weight: 700;
      src: local('CoperateLogoRoundedBold'), url(${CoperateLogoRoundedBold}) format('woff');
    }

    @font-face {
    font-family: 'PartialSansKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/PartialSansKR-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    }

    @font-face {
    font-family: 'SokchoBadaDotum';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/SokchoBadaDotum.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

@font-face {
    font-family: 'NPSfontBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/NPSfontBold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  div {
    box-sizing: border-box;
    color: ${(props) => props.theme.color.text};
  }

`;

export const light = {
  color: {
    bgColor: "#f5f2ea",
    text: "#000",
    main: "#289049",
    sub1: "#773920",
    sub2: "#ed683f",
    point: "#d2cf0e",
  },
  font: {
    krtitle: "PartialSansKR-Regular",
    jptitle: "CoperateLogoRoundedBold",
    krbold: "SokchoBadaDotum",
    kr: "NPSfontBold",
  },
};

export const dark = {
  color: {
    bgColor: "#1b1b2e",
    text: "#ffffff",
    main: "#15874a",
    sub1: "#dc910f",
    sub2: "#d2562d",
    point: "#2e1670",
  },
  font: {
    krtitle: "PartialSansKR-Regular",
    jptitle: "CoperateLogoRoundedBold",
    krbold: "SokchoBadaDotum",
    kr: "NPSfontBold",
  },
};
