import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GetAuthCodeResponseType } from "lib/types/auth.types";

interface InitialStateType {
  issueToken: string | null;
  remainMillisecond: number | null;
}

const initialState: InitialStateType = {
  issueToken: null,
  remainMillisecond: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthCode(state, action: PayloadAction<GetAuthCodeResponseType>) {
      state.issueToken = action.payload.issueToken;
      state.remainMillisecond = action.payload.remainMillisecond;
    },
  },
});

export const { setAuthCode } = authSlice.actions;

export default authSlice.reducer;
