import { createGlobalStyle, DefaultTheme } from "styled-components";
import styled from "styled-components";

export const Global = createGlobalStyle`
  body, html {
    margin: 0;
    background-color: ${(props) => props.theme.env.bgColor};
    color: ${(props) => props.theme.env.fontColor};

    &::-webkit-scrollbar {
      display: none;
    }

  }

  div {
    box-sizing: border-box;
  }

  h1 {
  font-size: 72pt;
  line-height: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 50px;
`;

export const light: DefaultTheme = {
  color: {
    main: "#74a426",
  },
  env: {
    bgColor: "#d7d3cd",
    fontColor: "#000",
    border: "#c1c1c1",
  },
  sub: {
    bgColor: "#FFF",
    fontColor: "#000",
  },
};

export const dark: DefaultTheme = {
  color: {
    main: "#7070ff",
  },
  env: {
    bgColor: "#202531",
    fontColor: "#FFF",
    border: "#554e64",
  },
  sub: {
    bgColor: "#343c4f",
    fontColor: "#FFF",
  },
};
