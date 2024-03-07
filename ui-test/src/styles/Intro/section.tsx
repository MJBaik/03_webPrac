import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0 3vw;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.point};
  overflow-x: hidden;

  .title {
    margin: 50px 0 150px 0;
    width: 100%;
    text-align: end;
    font-family: ${(props) => props.theme.font.krtitle};
    font-size: 100pt;
    align-self: flex-end;
    color: ${(props) => props.theme.color.sub1};
    word-break: keep-all;

    @media screen and (max-width: 500px) {
      margin-top: 0;
      font-size: 72pt;
    }
  }
`;

// 소개문에 들어가는 카드
export const Card = styled.div`
  align-self: flex-end;
  width: 65vw;
  height: 80vh;
  margin: 80px 0;
  overflow: hidden;
  border-radius: 25px;
  background-color: ${(props) => props.theme.color.bgColor};
  padding: 20px 30px;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    margin: 10px 0;
    width: 80vw;
    height: 80vh;
    align-self: center;
  }

  h1 {
    font-family: ${(props) => props.theme.font.krbold};
    color: ${(props) => props.theme.color.text};
    font-size: 2.8rem;
  }

  img {
    height: 50%;
    object-position: bottom;
  }

  div {
    margin: 3% 0;
    font-family: ${(props) => props.theme.font.kr};
    color: ${(props) => props.theme.color.text};
  }
`;

// 소개문섹션
export const Section1 = styled(Wrapper)`
  height: 500vh;
  padding-top: 20vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;

  @media screen and (max-width: 500px) {
    padding-top: 0;
    height: 250vh;
  }

  .coma {
    width: 300px;
    height: 180px;
    position: fixed;
    word-break: keep-all;
    left: 5vw;
    font-family: ${(props) => props.theme.font.kr};
    font-size: 24pt;
    display: none;
    justify-content: start;
    align-items: end;
    z-index: 1;
  }

  .character {
    width: 40vw;
    aspect-ratio: 1;
    min-width: 400px;
    min-height: 400px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.main};
    position: absolute;
    top: 41vh;
    left: -50px;
    z-index: 2;

    &.fixed {
      position: fixed;
      top: auto;
      bottom: -20vw;
      left: -50px;
    }

    div {
      position: relative;
      width: 100%;
      height: 100%;

      .eye {
        width: 80px;
        height: 80px;
        background-color: white;
        position: absolute;
        border-radius: 50%;

        div {
          position: relative;

          .eyeball {
            position: absolute;
            width: 40px;
            height: 40px;
            background-color: black;
            border-radius: 50%;
          }
        }

        &.left {
          left: 50%;
          top: 8%;
        }

        &.right {
          left: calc(50% + 80px);
          top: 12%;
        }
      }
    }
  }

  &.active {
    .coma {
      display: flex;

      @media screen and (max-width: 500px) {
        display: none;
      }
    }
  }
`;

export const Section2 = styled(Wrapper)`
  height: 90vh;
  position: relative;
  background-color: ${(props) => props.theme.color.main};
`;
