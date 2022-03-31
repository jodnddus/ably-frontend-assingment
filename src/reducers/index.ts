import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import user from "./user";
import auth from "./auth";

export const rootReducer = combineReducers({
  user,
  auth,
});

const persistConfig = {
  key: "root",
  storage: storage,
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
