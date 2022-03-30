import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { login } from "lib/services/auth";

import { Button, Input } from "components";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(id, password)
      .then((res) => {
        localStorage.setItem("accessToken", res.accessToken);
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
      </form>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
`;

export default Login;
