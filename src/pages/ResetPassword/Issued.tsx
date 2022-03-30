import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Button, Input } from "components";

import { setAuthCode } from "reducers/auth";

import { useAppDispatch } from "hooks";

import { getAuthCodeForResetPassword } from "lib/services/auth";

function Issued() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onClickNext = () => {
    getAuthCodeForResetPassword(email)
      .then((res) => {
        dispatch(setAuthCode(res));
        navigate("/resetPassword/validation");
      })
      .catch((e) => window.alert(e.response.data.error.message));
  };

  return (
    <IssuedContainer>
      <h1>인증 코드 발급 요청</h1>
      <Input
        type="text"
        value={email}
        onChange={(value) => setEmail(value)}
        isError={false}
      />
      <Button
        type="button"
        name="다음"
        isDisable={false}
        onClick={onClickNext}
      />
    </IssuedContainer>
  );
}

const IssuedContainer = styled.div``;

export default Issued;
