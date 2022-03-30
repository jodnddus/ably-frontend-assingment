import { useEffect } from "react";
import styled from "styled-components";

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

  return <UserInfoContainer></UserInfoContainer>;
}

const UserInfoContainer = styled.div``;

export default UserInfo;
