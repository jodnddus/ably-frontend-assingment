import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GetAuthCodeResponseType } from "lib/types/auth";

interface InitialStateType {
  email: string;
  issueToken: string;
  remainMillisecond: number | null;
  confirmToken: string;
}

const initialState: InitialStateType = {
  email: "",
  issueToken: "",
  remainMillisecond: null,
  confirmToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setAuthCode(state, action: PayloadAction<GetAuthCodeResponseType>) {
      state.issueToken = action.payload.issueToken;
      state.remainMillisecond = action.payload.remainMillisecond;
    },
    setConfirmToken(state, action: PayloadAction<string>) {
      state.confirmToken = action.payload;
    },
  },
});

export const { setEmail, setAuthCode, setConfirmToken } = authSlice.actions;

export default authSlice.reducer;
