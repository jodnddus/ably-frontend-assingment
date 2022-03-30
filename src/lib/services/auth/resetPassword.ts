import { auth } from "lib/apis";

import { ResetPasswordResponseType } from "lib/types/auth";

const resetPassword = async (
  email: string,
  confirmToken: string,
  newPassword: string,
  newPasswordConfirm: string
) => {
  const { data } = await auth.patch<ResetPasswordResponseType>(
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
