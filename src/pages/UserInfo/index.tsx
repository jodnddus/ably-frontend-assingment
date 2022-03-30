import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Button, UserInfoCard } from "components";

import { setLastConnectedAt, setUserInfo } from "reducers/user";

import { useAppDispatch, useAppSelector } from "hooks";

import { getUserInfo, logout } from "lib/services/auth";

function UserInfo() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo(user.accessToken)
      .then((res) => dispatch(setUserInfo(res)))
      .catch((e) => window.alert(e.response.data.error.message));
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
          logout(user.accessToken)
            .then((res) => {
              dispatch(setLastConnectedAt(res.lastConnectedAt));
              navigate("/");
            })
            .catch((e) => {
              window.alert(e.response.data.error.message);
            });
        }}
      />
    </UserInfoContainer>
  );
}

const UserInfoContainer = styled.div``;

export default UserInfo;
