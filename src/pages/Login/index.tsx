import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Button, Input } from "components";

import { setAccessToken } from "reducers/user";

import { useAppDispatch } from "hooks";

import { login } from "lib/services/auth";

function Login() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(id, password)
      .then((res) => {
        dispatch(setAccessToken(res.accessToken));
        navigate("/userInfo");
      })
      .catch((e) => window.alert(e.response.data.error.message));
  };

  return (
    <LoginContainer>
      <h1>로그인</h1>
      <form onSubmit={handleOnSubmit}>
        <InputContainer>
          <Input
            type="text"
            value={id}
            isError={false}
            onChange={(value) => setId(value)}
            placeholder={"아이디"}
          />
          <Input
            type="password"
            value={password}
            isError={false}
            onChange={(value) => setPassword(value)}
            placeholder={"패스워드"}
          />
        </InputContainer>
        <ButtonContainer>
          <Button type={"submit"} name="로그인" isDisable={false} />
          <Button
            type={"button"}
            name="비밀번호 재설정"
            isDisable={false}
            onClick={() => {
              navigate("/resetPassword");
            }}
          />
        </ButtonContainer>
      </form>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  form {
    width: 100%;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  gap: 1rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export default Login;
