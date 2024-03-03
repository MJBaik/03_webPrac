import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  position: relative;
  clip-path: ellipse(100% 90% at top);

  video {
    width: 100%;
    height: 100dvh;
    object-fit: cover;
    z-index: 0;
  }

  .title {
    z-index: 1;
    width: 400px;
    text-align: center;
    position: absolute;
    color: white;
    top: calc(50% - 100px);
    left: calc(50% - 200px);
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 96pt;
    font-weight: 700;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Section = styled.div`
  width: 100%;
  height: 100dvh;
  padding: 10dvh 10dvw;
  text-align: justify;

  span.word {
    font-size: 20pt;
    color: ${(props) => props.theme.env.fontColor};
    opacity: 0.1;

    &.colored {
      opacity: 1;
    }
  }
`;

export const Section5 = styled.section`
  width: 100%;
  height: 500vh;
  font-size: 98pt;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .circle {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: fixed;
    top: calc(50vh - 150px);
    left: calc(50% - 150px);
    display: none;
    backdrop-filter: invert(80%);
  }

  .text {
    white-space: nowrap;
    position: fixed;
    display: none;
    z-index: 1;

    &.RtoL {
      top: 350px;
    }
    &.LtoR {
      top: 150px;
    }
  }

  &.active {
    .circle {
      display: block;
    }
    .text {
      display: block;
    }

    img.movingImg {
      width: 250px;
      height: 500px;
      object-fit: cover;
      position: fixed;
      left: calc(50% - 125px);
      top: calc(50dvh - 250px);
      z-index: 0;
    }
  }
`;
