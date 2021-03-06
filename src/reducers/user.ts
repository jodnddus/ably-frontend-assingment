import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserInfoType } from "lib/types/auth";

interface InitialStateType {
  accessToken: string;
  lastConnectedAt: number | null;
  userInfo: UserInfoType | null;
}

const initialState: InitialStateType = {
  accessToken: "",
  lastConnectedAt: null,
  userInfo: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    setLastConnectedAt(state, action: PayloadAction<number>) {
      state.lastConnectedAt = action.payload;
    },
    setUserInfo(state, action: PayloadAction<UserInfoType>) {
      state.userInfo = action.payload;
    },
    resetData(state) {
      state.accessToken = "";
      state.userInfo = null;
    },
  },
});

export const { setAccessToken, setLastConnectedAt, setUserInfo, resetData } =
  userSlice.actions;

export default userSlice.reducer;
