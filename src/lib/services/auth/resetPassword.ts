import { auth } from "lib/apis";

const resetPassword = async (
  email: string,
  confirmToken: string,
  newPassword: string,
  newPasswordConfirm: string
) => {
  const { data } = await auth.post("/api/reset-password", {
    email,
    confirmToken,
    newPassword,
    newPasswordConfirm,
  });

  return data;
};

export default resetPassword;
