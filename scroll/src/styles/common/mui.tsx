import styled from "styled-components";
import { Button } from "@mui/material";

export const MyButton = styled(Button)`
  background-color: ${(props) => props.theme.color.main} !important;
  color: white;
  border: none;
  margin: 0 10px;
`;
