import { auth } from "lib/apis";

const logout = async (accessToken: string) => {
  const { data } = await auth.post("/api/logout", null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export default logout;
