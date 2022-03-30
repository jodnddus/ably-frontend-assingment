import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import user from "./user";

export const rootReducer = combineReducers({
  user,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
