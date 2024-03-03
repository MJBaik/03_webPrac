import React from "react";

import NavBar from "../components/NavBar";
import Menu from "../components/Main/Menu";
import MainContents from "../components/Main/MainContents";
import { Wrapper } from "../styles/common/UI";
import { useGetProfile } from "../hooks/profile";

function Main() {
  const { isLoading, data } = useGetProfile();

  if (isLoading || data == undefined) return <div>로딩중...</div>;

  return (
    <Wrapper>
      <NavBar />
      <Menu profile={data} />
      <MainContents />
    </Wrapper>
  );
}

export default Main;
