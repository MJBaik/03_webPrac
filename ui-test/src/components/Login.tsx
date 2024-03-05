import React, { useState } from "react";
import { memberLoginApi } from "../api/memberApi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await memberLoginApi({ email, password });
    console.log(res);
  };

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={loginHandler}
    >
      <h1>로그인</h1>
      <input
        type="text"
        value={email}
        placeholder="이메일"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="비밀번호"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;
