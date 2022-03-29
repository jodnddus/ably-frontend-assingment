interface LoginResponseType {
  accessToken: string;
}

interface LogoutResponseType {
  lastConnectedAt: Date;
}

interface UserInfoType {
  name: string; // 이름
  email: string; // 이메일
  profileImage: string; // 프로필 사진 URL
  lastConnectedAt: Date; // 마지막 접속 일자
}

interface GetAuthCodeResponseType {
  issueToken: string; // 인증 코드 발급 요청 토큰
  remainMillisecond: number; // 인증 코드 확인 남은 시간
}

interface AuthCodeValidationTokenType {
  confirmToken: string; // 인증 코드 검증 토큰
}

interface ResetPasswordResponseType {
  email: string; // 이메일
}

interface ServerErrorReponseType {
  error: {
    message: string;
  };
}

export type {
  LoginResponseType,
  LogoutResponseType,
  UserInfoType,
  GetAuthCodeResponseType,
  AuthCodeValidationTokenType,
  ResetPasswordResponseType,
  ServerErrorReponseType,
};
