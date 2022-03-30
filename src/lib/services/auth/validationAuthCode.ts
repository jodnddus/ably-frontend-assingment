import { auth } from "lib/apis";

import { AuthCodeValidationTokenType } from "lib/types/auth.types";

const validationAuthCode = async (
  email: string,
  authCode: string,
  issueToken: string
) => {
  const { data } = await auth.post<AuthCodeValidationTokenType>(
    "/api/reset-password",
    {
      email,
      authCode,
      issueToken,
    }
  );

  return data;
};

export default validationAuthCode;
