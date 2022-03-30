import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Button, Input, Timer } from "components";

import { setConfirmToken } from "reducers/auth";

import { useAppDispatch, useAppSelector } from "hooks";

import { validationAuthCode } from "lib/services/auth";

function Validation() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [authCode, setAuthCode] = useState("");

  const onClickNext = () => {
    validationAuthCode(auth.email, authCode, auth.issueToken)
      .then((res) => {
        dispatch(setConfirmToken(res.confirmToken));
        navigate("/resetPassword/reset");
      })
      .catch((e) => window.alert(e.response.data.error.message));
  };

  if (!auth.remainMillisecond) {
    return null;
  }

  return (
    <ValidationContainer>
      <h1>인증 코드 검증</h1>
      <ElementsContainer>
        <Timer second={auth.remainMillisecond} />
        <Input
          type="text"
          value={authCode}
          onChange={(value) => setAuthCode(value)}
          isError={false}
        />
        <Button
          type="button"
          name="다음"
          isDisable={false}
          onClick={onClickNext}
        />
      </ElementsContainer>
    </ValidationContainer>
  );
}

const ValidationContainer = styled.div``;
const ElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Validation;
