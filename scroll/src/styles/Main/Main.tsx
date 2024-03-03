import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  &.wVideo {
    padding: 0;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      z-index: 1;
      color: white;
      margin-left: 100px;
    }

    div {
      text-align: justify;
      width: 40%;
      z-index: 1;
      color: white;
      font-weight: 100;
      font-size: 10pt;
      line-height: 0.9;
      clip-path: circle(200px);
      transform: translateY(0);

      span {
        color: ${(props) => props.theme.color.main};
        font-weight: bold;
      }
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
      filter: brightness(50%);
      position: absolute;
    }
  }
`;

export const Card = styled.div`
  width: 85%;
  height: 80%;
  background-color: ${(props) => props.theme.sub.bgColor};
  margin-top: 50px;
  padding: 30px 80px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 30px 0px rgb(0, 0, 0, 0.3);

  h1 {
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
    transition-delay: 0.3s;
  }
  div {
    opacity: 0;
    transition: transform 1s ease, opacity 1s ease;
    transition-duration: 1s;
    transform: translateY(100px);
    transition-delay: 0.5s;
    text-align: justify;
  }

  &.active {
    h1 {
      opacity: 1;
    }
    div {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Sidebar = styled.div`
  width: 30px;
  height: 100px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.sub.bgColor};
  position: fixed;
  right: 30px;
  top: calc(50% - 50px);
  z-index: 2;

  & > div.circle {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.color.main};
    border-radius: 50%;
    left: 5px;
    transition: top 0.2s ease;
  }
`;
