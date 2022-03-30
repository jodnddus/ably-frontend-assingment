import { auth } from "lib/apis";

import { LogoutResponseType } from "lib/types/auth";

const logout = async (accessToken: string) => {
  const { data } = await auth.post<LogoutResponseType>("/api/logout", null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export default logout;
