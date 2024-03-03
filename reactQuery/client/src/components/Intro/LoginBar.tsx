import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../styles/Intro/Grid";
import Login from "./Login";
import Signup from "./Signup";

type Props = {
  isSideOpen: boolean;
};

function LoginBar({ isSideOpen }: Props) {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <Sidebar className={isSideOpen ? "open" : undefined}>
      <div className="inner">
        <div className="title">
          <div
            className={isSignup ? "login" : "login now"}
            onClick={() => setIsSignup((prev) => false)}
          >
            로그인
          </div>
          <div
            className={isSignup ? "signup now" : "signup"}
            onClick={() => setIsSignup((prev) => true)}
          >
            회원가입
          </div>
        </div>
        {isSignup ? <Signup /> : <Login />}
        <div className={isSignup ? "padding" : "padding none"}></div>
      </div>
    </Sidebar>
  );
}

export default LoginBar;
