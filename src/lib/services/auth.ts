import { auth } from "lib/apis";

import {
  AuthCodeValidationTokenType,
  GetAuthCodeResponseType,
  LoginResponseType,
  LogoutResponseType,
  ResetPasswordResponseType,
  UserInfoType,
} from "lib/types/auth";

const login = async (email: string, password: string) => {
  const { data } = await auth.post<LoginResponseType>("/api/login", {
    email,
    password,
  });

  return data;
};

const logout = async (accessToken: string) => {
  const { data } = await auth.post<LogoutResponseType>("/api/logout", null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

const getUserInfo = async (accessToken: string) => {
  const { data } = await auth.get<UserInfoType>("/api/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

const getAuthCode = async (email: string) => {
  const { data } = await auth.get<GetAuthCodeResponseType>(
    `/api/reset-password?email=${email}`
  );

  return data;
};

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

export {
  login,
  logout,
  getUserInfo,
  getAuthCode,
  validationAuthCode,
  resetPassword,
};
