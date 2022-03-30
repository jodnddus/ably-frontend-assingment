import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Button, Input } from "components";

import { useAppSelector } from "hooks";

import { resetPassword } from "lib/services/auth";

function Reset() {
  const auth = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  const onClickNext = () => {
    resetPassword(
      auth.email,
      auth.confirmToken,
      newPassword,
      newPasswordConfirm
    )
      .then(() => {
        navigate("/");
      })
      .catch((e) => window.alert(e.response.data.error.message));
  };

  return (
    <ResetContainer>
      <h1>비밀번호 변경</h1>
      <ElementsContainer>
        <Input
          type="password"
          value={newPassword}
          isError={false}
          onChange={(value) => setNewPassword(value)}
        />
        <Input
          type="password"
          value={newPasswordConfirm}
          isError={false}
          onChange={(value) => setNewPasswordConfirm(value)}
        />
        <Button
          type="button"
          name="비밀번호 변경하기"
          isDisable={false}
          onClick={onClickNext}
        />
      </ElementsContainer>
    </ResetContainer>
  );
}

const ResetContainer = styled.div``;
const ElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Reset;
