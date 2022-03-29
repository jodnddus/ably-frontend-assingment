import { auth } from "lib/apis";

const login = async (email: string, password: string) => {
  const { data } = await auth.post("/api/login", {
    email,
    password,
  });

  return data;
};

export default login;
