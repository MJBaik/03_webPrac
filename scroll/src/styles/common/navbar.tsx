import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  color: ${(props) => props.theme.sub.fontColor};
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: 999;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.env.fontColor};
  font-weight: 100;
  margin: 0 10px;
`;
