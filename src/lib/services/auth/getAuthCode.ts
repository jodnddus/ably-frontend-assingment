import { auth } from "lib/apis";

import { GetAuthCodeResponseType } from "lib/types/auth.types";

const getAuthCode = async (email: string) => {
  const { data } = await auth.get<GetAuthCodeResponseType>(
    `/api/reset-password?email=${email}`
  );

  return data;
};

export default getAuthCode;
