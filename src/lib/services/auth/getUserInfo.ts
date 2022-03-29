import { auth } from "lib/apis";

const getUserInfo = async (accessToken: string) => {
  const { data } = await auth.get("/api/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export default getUserInfo;
