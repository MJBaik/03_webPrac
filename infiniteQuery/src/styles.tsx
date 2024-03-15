import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body, html {
    margin: 0
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Target = styled.div`
  width: 100%;
  height: 150px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
`;

export const MovieCard = styled.div<{ $bgUrl?: string }>`
  background-image: ${(props) => `url(${props.$bgUrl})`};
  background-size: cover;
  margin: 1vw;
  width: 22vw;
  min-width: 250px;
  min-height: 375px;
  height: calc(22vw * 1.5);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
