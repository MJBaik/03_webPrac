import React from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../styles/Main/Components";
import { UserInterface } from "../../interfaces/UserInterfce";
import { getFullUrl } from "../../util/common";
import { useLogout } from "../../hooks/auth";
import TodoForm from "./TodoForm";

type Props = {
  profile: UserInterface;
};

export default function Menu({ profile }: Props) {
  const { nickname, profile_image } = profile;
  const { mutate: logout } = useLogout();
  const navigate = useNavigate();

  return (
    <Sidebar>
      <div className="title">
        <button className="name" onClick={() => navigate("/profile")}>
          @ {nickname}
        </button>
        <button className="logout" onClick={() => logout()}>
          로그아웃
        </button>
      </div>
      <img className="profile_image" src={getFullUrl(profile_image)} alt="" />
      <TodoForm />
    </Sidebar>
  );
}
