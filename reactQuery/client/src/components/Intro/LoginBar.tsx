import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../styles/Intro/Grid";
import Login from "./Login";
import Signup from "./Signup";
import { useIsSignup, useSetisSignup } from "../../stores/AuthStore";

type Props = {
  isSideOpen: boolean;
};

function LoginBar({ isSideOpen }: Props) {
  const isSignup = useIsSignup();
  const setIsSignup = useSetisSignup();

  return (
    <Sidebar className={isSideOpen ? "open" : undefined}>
      <div className="inner">
        <div className="title">
          <div
            className={isSignup ? "login" : "login now"}
            onClick={() => setIsSignup(false)}
          >
            로그인
          </div>
          <div
            className={isSignup ? "signup now" : "signup"}
            onClick={() => setIsSignup(true)}
          >
            회원가입
          </div>
        </div>
        {isSignup ? <Signup /> : <Login />}
        {/* 로그인 폼~버튼 사이 padding  */}
        <div className={isSignup ? "padding" : "padding none"}></div>
      </div>
    </Sidebar>
  );
}

export default LoginBar;
