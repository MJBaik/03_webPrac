import React, { useState } from "react";
import { useSignup } from "../../hooks/auth";
import { AuthForm } from "../../styles/common/UI";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const { mutate: signupMutate } = useSignup();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signupMutate({ username, email, nickname, password1, password2 });
  };

  return (
    <AuthForm onSubmit={handleSubmit}>
      <label htmlFor="username">아이디</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="아이디"
      />
      <label htmlFor="password1">비밀번호</label>
      <input
        type="password"
        id="password1"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
        placeholder="비밀번호"
      />
      <label htmlFor="password2">비밀번호 확인</label>
      <input
        type="password"
        id="password2"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        placeholder="비밀번호 확인"
      />
      <label htmlFor="email">이메일</label>

      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="eamil@example.com"
      />
      <label htmlFor="nickname">닉네임</label>

      <input
        type="text"
        id="nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="닉네임"
      />
      <button>가입하기</button>
    </AuthForm>
  );
}

export default Signup;
