import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

type Props = {};

function Main({}: Props) {
  return (
    <div>
      <Login />
      <Signup />
    </div>
  );
}

export default Main;
