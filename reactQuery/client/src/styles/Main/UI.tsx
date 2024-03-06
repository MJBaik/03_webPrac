import styled from "styled-components";

export const AddTodoForm = styled.form`
  width: 100%;
  font-family: "SUITE-Regular";

  .title {
    background-color: var(--fontColor);
    color: var(--bgColor);
  }

  label {
    font-size: 10pt;
    margin-left: 3px;
  }

  input[type="text"] {
    margin: 0;
    width: 100%;
    height: 50px;
    border: 1px solid var(--fontColor);
    border-left: 0;
    border-right: 0;
    background-color: transparent;
    padding: 5px;
    font-size: 20pt;
    outline: none;
    color: var(--fontColor);

    &::placeholder {
      color: var(--grey);
    }
  }

  input[type="date"] {
    font-family: "SUITE-Regular";
    color: var(--fontColor);
    margin: 0;
    width: 100%;
    height: 50px;
    border: 1px solid var(--fontColor);
    border-left: 0;
    border-right: 0;
    background-color: transparent;
    padding: 5px;
    font-size: 20pt;
    outline: none;
  }

  .flex {
    display: flex;
  }

  .label {
    font-size: 10pt;
    border-bottom: 1px solid var(--fontColor);
    padding-left: 3px;
  }

  .options {
    width: 100%;
    height: 150px;
    border-bottom: 2px solid var(--fontColor);
    display: flex;
    flex-direction: column;

    .priority {
      width: 100%;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid var(--fontColor);

      .priorityButton {
        flex-grow: 1;
        cursor: pointer;
        height: 40px;
        border-right: 1px solid var(--fontColor);
        font-family: "LOTTERIADDAG";
        font-size: 24pt;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background-color: var(--main);
          color: var(--bgColor);
        }

        &.selected {
          background-color: var(--fontColor);
          color: var(--bgColor);
        }
      }
    }

    .repeat {
      margin-top: 5px;
      cursor: pointer;
      flex-grow: 1;
      border-top: 1px solid var(--fontColor);
      border-right: 2px solid var(--fontColor);
      font-family: "LOTTERIADDAG";
      font-size: 24pt;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: var(--grey);
        color: var(--bgColor);
      }

      &.active {
        background-color: var(--main);
        color: var(--bgColor);
      }
    }

    .submit {
      flex-grow: 5;
      margin-top: 5px;
      border: none;
      border-top: 1px solid var(--fontColor);
      outline: none;
      cursor: pointer;
      font-family: "LOTTERIADDAG";
      font-size: 24pt;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--fontColor);
      color: var(--bgColor);
    }
  }
`;
