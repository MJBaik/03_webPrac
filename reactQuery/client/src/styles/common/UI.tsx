import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export const AuthForm = styled.form`
  width: 100%;

  * {
    font-family: "SUITE-Regular";
  }

  label {
    font-size: 10pt;
    margin-left: 3px;
  }

  input {
    margin: 0;
    width: 100%;
    height: 50px;
    border: 1px solid var(--fontColor);
    border-bottom-width: 2px;
    border-left: 0;
    border-right: 0;
    background-color: transparent;
    padding: 5px;
    font-size: 20pt;
    outline: none;

    &::placeholder {
      color: var(--grey);
    }
  }

  button {
    width: 100%;
    height: 50px;
    border: none;
    background-color: var(--fontColor);
    color: var(--bgColor);
    font-size: 24pt;
    font-family: "LOTTERIADDAG";
    cursor: pointer;

    &:hover {
      background-color: var(--main);
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  position: fixed;
  background-color: var(--bgColor);
  z-index: 1;

  @media screen and (min-width: 601px) {
    height: 100vh;
    width: 50px;
    border-right: 1px solid var(--fontColor);
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
  }

  @media screen and (max-width: 600px) {
    width: 100vw;
    padding-right: 5px;
    border-bottom: 1px solid var(--fontColor);
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    height: fit-content;
    aspect-ratio: 1;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;

    &.open {
      transform: rotate(180deg);
    }
  }
`;
