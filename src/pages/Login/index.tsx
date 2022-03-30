import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Button, Input } from "components";

import { setAccessToken } from "reducers/user";

import { useAppDispatch } from "hooks";

import { login } from "lib/services/auth";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

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
      <form onSubmit={handleOnSubmit}>
        <div>
          <Input
            type="text"
            value={id}
            isError={false}
            onChange={(value) => setId(value)}
          />
          <Input
            type="password"
            value={password}
            isError={false}
            onChange={(value) => setPassword(value)}
          />
        </div>
        <Button type={"submit"} name="버튼" isDisable={false} />
        <Button
          type={"button"}
          name="비밀번호 재설정"
          isDisable={false}
          onClick={() => {
            navigate("/resetPassword");
          }}
        />
      </form>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
`;

export default Login;
