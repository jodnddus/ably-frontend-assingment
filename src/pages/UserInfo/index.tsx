import { useEffect } from "react";
import styled from "styled-components";

import { Button, UserInfoCard } from "components";

import { setUserInfo } from "reducers/user";

import { useAppDispatch, useAppSelector } from "hooks";

import { getUserInfo } from "lib/services/auth";

function UserInfo() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUserInfo(user.accessToken)
      .then((res) => dispatch(setUserInfo(res)))
      .catch((e) => console.log(e.response));
  }, [user.accessToken, dispatch]);

  if (!user.userInfo) {
    return null;
  }

  return (
    <UserInfoContainer>
      <UserInfoCard
        name={user.userInfo.name}
        email={user.userInfo.email}
        profileImg={user.userInfo.profileImage}
      />
      <Button
        type="button"
        name="로그아웃"
        isDisable={false}
        onClick={() => {
          console.log("로그아웃");
        }}
      />
    </UserInfoContainer>
  );
}

const UserInfoContainer = styled.div``;

export default UserInfo;
