import { auth } from "lib/apis";

import { LoginResponseType } from "lib/types/auth";

const login = async (email: string, password: string) => {
  const { data } = await auth.post<LoginResponseType>("/api/login", {
    email,
    password,
  });

  return data;
};

export default login;
