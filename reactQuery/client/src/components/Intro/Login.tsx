import React, { useState } from "react";
import { useLogin } from "../../hooks/auth";
import { AuthForm } from "../../styles/common/UI";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: loginMutate } = useLogin();

  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutate({ username, password });
  };

  return (
    <AuthForm onSubmit={loginHandler}>
      <label htmlFor="username">아이디</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="아이디"
      />
      <label htmlFor="password">비밀번호</label>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
        style={{ marginBottom: "210px", borderBottomWidth: "2px" }}
      />
      <button>로그인</button>
    </AuthForm>
  );
}

export default Login;
