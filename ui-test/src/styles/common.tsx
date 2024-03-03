import { createGlobalStyle } from "styled-components";
import CoperateLogoRoundedBold from "../assets/font/Corporate-Logo-Rounded-Bold-ver3.woff";

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

  html, body {
    margin: 0;
    padding: 0;
  }

  div {
    box-sizing: border-box;
  }

`;

export const light = {
  color: {
    bgColor: "#f7ebdc",
    text: "#000",
    main: "#f37500",
    sub1: "#773920",
    sub2: "#c53b31",
    point: "#1e964c",
  },
  font: {
    krtitle: "PartialSansKR-Regular",
    jptitle: "CoperateLogoRoundedBold",
  },
};
