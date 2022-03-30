import { auth } from "lib/apis";
import { UserInfoType } from "lib/types/auth";

const getUserInfo = async (accessToken: string) => {
  const { data } = await auth.get<UserInfoType>("/api/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export default getUserInfo;
