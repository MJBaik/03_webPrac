import React from "react";
import Info from "../components/Profile/Info";
import { useIsUpdating } from "../stores/ProfileStore";
import UpdateInfo from "../components/Profile/UpdateInfo";
import { useGetProfile } from "../hooks/profile";

function Profile() {
  const { isLoading, data } = useGetProfile();
  const isUpdating = useIsUpdating();

  if (isLoading || data == undefined) return <div>로딩중...</div>;

  return (
    <div>{isUpdating ? <UpdateInfo data={data} /> : <Info data={data} />}</div>
  );
}

export default Profile;
