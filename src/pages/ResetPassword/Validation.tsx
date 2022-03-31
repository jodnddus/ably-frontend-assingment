import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Button, Input, Timer } from "components";

import { setConfirmToken, setRemainMillisecond } from "reducers/auth";

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
        <Timer
          second={auth.remainMillisecond / 1000}
          setSecond={(second) => dispatch(setRemainMillisecond(second * 1000))}
          isLessThanNSeconds={(seconds) => {
            if (seconds > 60) {
              return false;
            } else {
              return true;
            }
          }}
          onTimeOver={() => {
            window.alert("인증 가능 시간이 초과되었습니다");
            navigate("/resetPassword");
          }}
        />
        <Input
          type="text"
          value={authCode}
          onChange={(value) => setAuthCode(value)}
          isError={false}
          placeholder={"인증 코드"}
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
