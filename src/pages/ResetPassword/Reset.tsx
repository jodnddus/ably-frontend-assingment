import { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "components";

function Reset() {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  return (
    <ResetContainer>
      <h1>비밀번호 변경</h1>
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
      <Button type="button" name="다음" isDisable={false} onClick={() => {}} />
    </ResetContainer>
  );
}

const ResetContainer = styled.div``;

export default Reset;
