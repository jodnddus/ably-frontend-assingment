import { auth } from "lib/apis";

const validationAuthCode = async (
  email: string,
  authCode: string,
  issueToken: string
) => {
  const { data } = await auth.post("/api/reset-password", {
    email,
    authCode,
    issueToken,
  });

  return data;
};

export default validationAuthCode;
