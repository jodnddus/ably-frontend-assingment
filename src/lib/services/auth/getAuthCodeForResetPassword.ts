import { auth } from "lib/apis";

import { GetAuthCodeResponseType } from "lib/types/auth.types";

const getAuthCodeForResetPassword = async (email: string) => {
  const { data } = await auth.get<GetAuthCodeResponseType>(
    `/api/reset-password?email=${email}`
  );

  return data;
};

export default getAuthCodeForResetPassword;
