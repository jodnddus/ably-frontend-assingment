import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Button, UserInfoCard } from "components";

import { resetData, setLastConnectedAt, setUserInfo } from "reducers/user";

import { useAppDispatch, useAppSelector } from "hooks";

import { getUserInfo, logout } from "lib/services/auth";

function UserInfo() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onLogout = () => {
    logout(user.accessToken)
      .then((res) => {
        dispatch(setLastConnectedAt(res.lastConnectedAt));
        dispatch(resetData());
        navigate("/");
      })
      .catch((e) => {
        window.alert(e.response.data.error.message);
      });
  };

  useEffect(() => {
    if (!user.userInfo && user.accessToken) {
      getUserInfo(user.accessToken)
        .then((res) => dispatch(setUserInfo(res)))
        .catch(() => {
          dispatch(resetData());
          navigate("/");
        });
    }
  }, [user.accessToken, user.userInfo, dispatch, navigate]);

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
        name="๋ก๊ทธ์์"
        isDisable={false}
        onClick={onLogout}
      />
    </UserInfoContainer>
  );
}

const UserInfoContainer = styled.div``;

export default UserInfo;
