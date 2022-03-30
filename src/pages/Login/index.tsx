import { useState } from "react";
import styled from "styled-components";

import { Button, Input } from "components";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit: ", e);
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
