import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.color.point};
  display: flex;
  justify-content: center;
  align-items: center;

  .clickEffect {
    font-family: ${(props) => props.theme.font.jptitle};
    font-size: 36pt;
    position: fixed;
    z-index: 5;
    -webkit-animation: delete 2s ease;
    opacity: 0;

    @-webkit-keyframes delete {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      70% {
        opacity: 0;
        transform: translateY(-30px);
      }
      100% {
        opacity: 0;
        transform: translateY(-50px);
      }
    }
  }
`;

export const HeaderBox = styled.div`
  width: 94vw;
  height: 87vh;
  margin-top: 7vh;
  background: ${(props) =>
    `linear-gradient(to bottom, transparent 38px, ${props.theme.color.main} 38px) 0 0 /
        100vw 40px repeat-y,
      linear-gradient(to right, transparent 38px, ${props.theme.color.main} 38px) 0 0 / 40px 100vh
        repeat-x ${props.theme.color.bgColor};`};
  border-radius: 25px;
  position: relative;
  overflow: hidden;

  div.coma {
    position: absolute;
    width: 100%;
    height: 100%;
    min-width: 700px;
    min-height: 500px;
    background-color: white;
    clip-path: ellipse(60% 70% at 10% 10%);
    z-index: 1;

    @media screen and (max-width: 500px) {
      clip-path: ellipse(50% 30% at 25% 10%);
    }

    .text {
      position: relative;
      width: 90vw;
      height: 40%;
      padding: 30px;

      @media screen and (max-width: 500px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  div.coma2 {
    position: absolute;
    width: 100%;
    height: 100%;
    min-width: 700px;
    min-height: 500px;
    background-color: orange;
    z-index: 0;
    clip-path: ellipse(61% 75% at 10% 10%);

    @media screen and (max-width: 500px) {
      clip-path: ellipse(50% 32% at 25% 10%);
    }
  }

  div.kr {
    font-family: ${(props) => props.theme.font.krtitle};
    font-size: 72pt;

    @media screen and (max-width: 1000px) {
      width: 300px;
      font-size: 48pt;
    }

    @media screen and (max-width: 500px) {
      width: 300px;
      font-size: 30pt;
      white-space: break-spaces;
      text-align: center;
    }

    span {
      color: ${(props) => props.theme.color.main};
    }

    &:before {
      content: "にほんごではなせる！";
      font-family: ${(props) => props.theme.font.jptitle};
      font-size: 48pt;
      font-weight: 700;
      color: ${(props) => props.theme.color.main};
      position: absolute;
      top: 70%;
      transform: rotate(10deg);
      background-color: black;
      display: none;
    }

    &:hover:before {
      display: block;
    }
  }
`;

export const Character = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: 0;

  div.inner {
    position: relative;
    width: 60vw;
    height: 60vh;
    min-width: 600px;
    min-height: 700px;

    div.body {
      width: 100%;
      height: 100%;
      clip-path: ellipse(71% 60% at 71% 100%);
      background-color: ${(props) => props.theme.color.point};
      position: absolute;
      right: 0;
      bottom: 0;
    }

    div.eye {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      position: absolute;
      z-index: 1;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      &.left {
        left: 50%;
        bottom: 40%;
      }

      &.right {
        left: calc(50% + 100px);
        bottom: 40%;
      }

      div.eyeball {
        position: relative;
        width: 80px;
        height: 80px;
        border-radius: 50%;

        .ball {
          width: 50px;
          height: 50px;
          background-color: black;
          border-radius: 50%;
          position: absolute;
          transition: all 0.3s ease;
        }
      }
    }

    div.mouth {
      background-color: #7c0000;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      position: absolute;
      left: -15px;
      top: 100px;
    }
  }
`;
