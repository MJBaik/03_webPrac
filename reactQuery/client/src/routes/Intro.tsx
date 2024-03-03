import React, { useState } from "react";
import { Wrapper } from "../styles/common/UI";
import LoginBar from "../components/Intro/LoginBar";
import NavBar from "../components/NavBar";
import IntroContent from "../components/Intro/IntroContent";

function Intro() {
  const [isSideOpen, setIsSideOpen] = useState(false);

  return (
    <Wrapper>
      <NavBar isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
      <LoginBar isSideOpen={isSideOpen} />
      <IntroContent />
    </Wrapper>
  );
}

export default Intro;
