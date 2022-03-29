import { auth } from "lib/apis";

const getAuthCodeForResetPassword = async (email: string) => {
  const { data } = await auth.get(`/api/reset-password?email=${email}`);

  return data;
};

export default getAuthCodeForResetPassword;
