import React, { useRef, useState } from "react";
import { useSetUpdate } from "../../stores/ProfileStore";
import { UserInterface } from "../../interfaces/UserInterfce";
import { useUpdatProfile } from "../../hooks/profile";
import { fileExtensionValidator } from "../../util/fileValidator";

function UpdateInfo({ data }: { data: UserInterface }) {
  const { VITE_SERVER_URL } = import.meta.env;
  const setIsUpdating = useSetUpdate();
  const { mutate: updateProfile } = useUpdatProfile();
  const formData = useRef<FormData>(new FormData());
  const [profImage, setProfImage] = useState<string>(
    data.profile_image != undefined
      ? `${VITE_SERVER_URL}/${data.profile_image}`
      : ""
  );

  const handleProfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files[0] == null) return;
    const newImage = e.target.files[0];

    if (!fileExtensionValidator(newImage, "profImg")) {
      alert(`파일의 확장자를 확인해주세요.`);
    } else {
      formData.current.append("profile_image", newImage, newImage.name);
      setProfImage(URL.createObjectURL(newImage));
    }
  };

  return (
    <>
      <div>{data.nickname}</div>
      <div>{data.username}</div>
      <div>{data.email}</div>
      <div>{data.first_name}</div>
      <div>{data.last_name}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateProfile(formData.current);
        }}
      >
        <input type="file" onChange={handleProfChange} />
        <button
          type="reset"
          onClick={() => {
            formData.current.set("profile_image", "");
            setProfImage("");
          }}
        >
          삭제
        </button>
        <button type="submit">업데이트</button>
      </form>
      <img src={profImage} alt="" />
      <button
        onClick={() => {
          setIsUpdating(false);
        }}
      >
        취소
      </button>
    </>
  );
}

export default UpdateInfo;
