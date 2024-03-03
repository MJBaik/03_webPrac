import styled from "styled-components";

export const Sidebar = styled.div`
  background-color: var(--bgColor);
  z-index: 1;

  @media screen and (min-width: 601px) {
    margin-left: 50px;
    width: 300px;
    height: 100vh;
    border-right: 2px solid var(--fontColor);
  }

  @media screen and (max-width: 600px) {
    top: 51px;
    width: 100vw;
    height: 100vh;
    transition: max-height 0.3s ease;
  }

  div.title {
    display: flex;
    width: 100%;
    font-size: 18pt;
    font-family: "LOTTERIADDAG";
    border-bottom: 2px solid var(--fontColor);

    button {
      font-family: "LOTTERIADDAG";
      cursor: pointer;
      border: none;
      outline: none;
      font-size: 18pt;
    }
    .name {
      padding-left: 5pt;
      text-align: start;
      border-right: 1px solid var(--fontColor);
      width: 70%;
      padding-left: 5pt;
      background-color: var(--bgColor);
      color: var(--fontColor);

      &:hover {
        color: var(--main);
      }
    }

    .logout {
      text-align: end;
      width: 50%;
      padding-right: 5pt;
      background-color: var(--fontColor);
      color: var(--bgColor);

      &:hover {
        background-color: var(--main);
      }
    }

    .now {
      width: 200%;
      transition: width 0.3s linear;
      background-color: var(--fontColor);
      color: var(--bgColor);
    }
  }

  img.profile_image {
    height: 300px;
    width: 100%;
    /* width: 300px; */
    aspect-ratio: 1;
    object-fit: cover;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  @media screen and (min-width: 601px) {
    width: calc(100% - 350px);
  }

  @media screen and (max-width: 600px) {
    height: calc(100vh - 50px);
    margin-top: 50px;
  }
`;

export const TodoWrapper = styled.div`
  width: 300px;
  height: 100vh;
  border-right: 2px solid var(--fontColor);
`;

export const TodoListWrapper = styled.div`
  width: 300px;
  .title {
    width: 100%;
    background-color: var(--fontColor);
    color: var(--bgColor);
    font-family: "SUITE-Regular";
    font-size: 18pt;
    padding-left: 3px;
  }

  .todo {
    margin-top: 3px;
    width: 100%;
    display: flex;
    height: 40px;
    border-top: 1px solid var(--fontColor);
    border-bottom: 1px solid var(--fontColor);

    .delete,
    .done {
      width: 40px;
      aspect-ratio: 1;
      border: none;
      background-color: transparent;
      cursor: pointer;
      border: 1px solid var(--fontColor);
      position: relative;
    }

    .delete {
      &:before,
      &:after {
        left: 0;
        position: absolute;
        content: " ";
        width: 100%;
        height: 2px;
        background-color: var(--fontColor);
      }

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }

      &:hover {
        background-color: crimson;
      }
    }

    .done {
      &:before,
      &:after {
        left: 0;
        position: absolute;
        content: " ";
        height: 2px;
        background-color: var(--fontColor);
      }

      &:before {
        left: 10%;
        top: 70%;
        width: 50%;
        transform: rotate(45deg);
      }

      &:after {
        left: 25%;
        top: 50%;
        width: 85%;
        transform: rotate(-60deg);
      }

      &:hover {
        background-color: #2a862f;
      }
    }

    .content {
      width: calc(100% - 80px);
      display: flex;
      flex-direction: column;
      border: 1px solid var(--fontColor);
      border-right: none;
      padding-left: 3px;

      .duedate {
        height: 14px;
        color: var(--grey);
        font-size: 9pt;
      }

      .todoitem {
        font-size: 14pt;
      }
    }
  }
`;

export const DoneList = styled.div`
  width: 100%;
  border: 1px solid var(--fontColor);
  height: 35vh;

  .title {
    font-family: "LOTTERIADDAG";
    font-size: 18pt;
    width: 100%;
    border-bottom: 2px solid var(--fontColor);
    background-color: var(--fontColor);
    color: var(--bgColor);
  }

  .item {
    margin: 5pt;
    font-family: "SUITE-Regular";
    font-size: 16pt;
    cursor: pointer;

    &:hover {
      text-decoration: line-through;
    }
  }
`;
