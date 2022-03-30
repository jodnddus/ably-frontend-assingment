import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import user from "./user";
import auth from "./auth";

export const rootReducer = combineReducers({
  user,
  auth,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
