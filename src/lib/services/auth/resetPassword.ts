import { auth } from "lib/apis";

import { ResetPasswordResponseType } from "lib/types/auth.types";

const resetPassword = async (
  email: string,
  confirmToken: string,
  newPassword: string,
  newPasswordConfirm: string
) => {
  const { data } = await auth.post<ResetPasswordResponseType>(
    "/api/reset-password",
    {
      email,
      confirmToken,
      newPassword,
      newPasswordConfirm,
    }
  );

  return data;
};

export default resetPassword;
