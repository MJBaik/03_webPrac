import React from "react";
import { Wrapper, StyledLink } from "../styles/common/navbar";
import { MyButton } from "../styles/common/mui";

type Props = {
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ setIsDark }: Props) {
  return (
    <Wrapper>
      <StyledLink to="/">
        <h5>💌</h5>
      </StyledLink>

      <div>
        <StyledLink to="/">main</StyledLink>
        <StyledLink to="/main2">sub</StyledLink>
        <MyButton
          onClick={() => {
            setIsDark((prev) => !prev);
          }}
        >
          다크모드
        </MyButton>
      </div>
    </Wrapper>
  );
}

export default Navbar;
