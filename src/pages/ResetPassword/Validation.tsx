import { useState } from "react";
import styled from "styled-components";

import { Button, Input, Timer } from "components";

import { useAppSelector } from "hooks";

function Validation() {
  const auth = useAppSelector((state) => state.auth);

  const [authCode, setAuthCode] = useState("");

  if (!auth.remainMillisecond) {
    return null;
  }

  return (
    <ValidationContainer>
      <h1>인증 코드 검증</h1>
      <Timer second={auth.remainMillisecond} />
      <Input
        type="text"
        value={authCode}
        onChange={(value) => setAuthCode(value)}
        isError={false}
      />
      <Button type="button" name="다음" isDisable={false} onClick={() => {}} />
    </ValidationContainer>
  );
}

const ValidationContainer = styled.div``;

export default Validation;
