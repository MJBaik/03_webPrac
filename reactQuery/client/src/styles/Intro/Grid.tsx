import styled from "styled-components";

export const Sidebar = styled.div`
  position: fixed;
  overflow: hidden;
  background-color: var(--bgColor);
  z-index: 1;

  @media screen and (min-width: 801px) {
    left: 50px;
    width: 300px;
    height: 100vh;
    max-width: 0;
    transition: max-width 0.3s ease;
    border-right: 2px solid var(--fontColor);

    &.open {
      max-width: 300px;
    }
  }

  @media screen and (max-width: 800px) {
    top: 50px;
    width: 100vw;
    height: 100vh;
    max-height: 0;
    transition: max-height 0.3s ease;

    &.open {
      top: 51px;
      max-height: 100vh;
    }
  }

  .inner {
    position: relative;
    * {
      word-break: keep-all;
    }
  }

  div.title {
    display: flex;
    width: 100%;
    font-size: 18pt;
    font-family: "LOTTERIADDAG";
    cursor: pointer;
    border-bottom: 2px solid var(--fontColor);

    .login {
      border-right: 1px solid var(--fontColor);
      width: 100%;
      padding-left: 5pt;
    }

    .signup {
      text-align: end;
      width: 100%;
      padding-right: 5pt;
    }

    .now {
      width: 200%;
      transition: width 0.3s linear;
      background-color: var(--fontColor);
      color: var(--bgColor);
    }
  }

  .padding {
    height: 0px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 176px;
    transition: height 0.3s ease;

    &:before {
      content: " ";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      max-height: 0%;
      background-color: var(--bgColor);
      margin-top: 100%;
      transition: max-height 0.3s ease, margin-top 0.3s ease;
    }

    &.none {
      height: 209px;

      &:before {
        margin-top: 0;
        max-height: 100%;
      }
    }
  }
`;

export const GridCalendar = styled.div`
  display: grid;

  @media screen and (min-width: 801px) {
    width: calc(100% - 50px);
    margin-left: 52px;

    grid-template-columns: repeat(7, auto);
    grid-template-rows: repeat(5, auto);
  }

  @media screen and (max-width: 800px) {
    height: calc(100vh - 50px);
    margin-top: 50px;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(10, auto);
  }

  .item {
    border-right: 1px solid var(--grey);
    border-bottom: 1px solid var(--fontColor);
    padding: 5px;
    overflow: hidden;
    position: relative;
    z-index: 0;

    .date {
      position: absolute;
      left: 5px;
      top: 5px;
      width: 10%;
    }

    .word {
      position: absolute;
      width: 80%;
      right: 5px;
      bottom: 5px;
      text-align: right;
      word-break: break-all;
      color: ${(props) => props.theme.color.grey}A7;
    }

    &:hover {
      background-color: var(--grey);
    }

    &:nth-child(9),
    &:nth-child(10),
    &:nth-child(11) {
      .word {
        color: var(--fontColor);
      }
    }
  }
`;
