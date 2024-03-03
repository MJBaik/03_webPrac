import styled from "styled-components";

export const LetterBox = styled.div`
  font-size: 26pt;
  font-weight: 700;
  color: ${(props) => props.theme.env.fontColor};

  & > span.read {
    color: ${(props) => props.theme.color.main};
  }
`;
