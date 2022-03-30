import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GetAuthCodeResponseType } from "lib/types/auth.types";

interface InitialStateType {
  email: string;
  issueToken: string;
  remainMillisecond: number | null;
}

const initialState: InitialStateType = {
  email: "",
  issueToken: "",
  remainMillisecond: null,
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
  },
});

export const { setEmail, setAuthCode } = authSlice.actions;

export default authSlice.reducer;
