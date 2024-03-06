import React from "react";
import { useSetUpdate } from "../../stores/ProfileStore";
import { UserInterface } from "../../interfaces/UserInterfce";

function Info({ data }: { data: UserInterface }) {
  const setIsUpdating = useSetUpdate();

  return (
    <>
      <p>수정예정</p>
      <p>프로필사진 수정 가능</p>
      <div>{data.nickname}</div>
      <div>{data.username}</div>
      <div>{data.email}</div>
      <div>{data.first_name}</div>
      <div>{data.last_name}</div>
      <div>{data.profile_image}</div>
      <button
        onClick={() => {
          setIsUpdating(true);
        }}
      >
        업데이트
      </button>
    </>
  );
}

export default Info;
