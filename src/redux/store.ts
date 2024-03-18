import { configureStore } from "@reduxjs/toolkit";
import { suppliesApi } from "./feature/suppliesApi";
import { registerApi } from "./feature/registerApi";
import { loginApi } from "./feature/loginApi";
import authReducer from "./feature/authSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConifg = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConifg, authReducer);

const store = configureStore({
  reducer: {
    [suppliesApi.reducerPath]: suppliesApi.reducer,
    [registerApi.reducerPath]: registerApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      suppliesApi.middleware,
      registerApi.middleware,
      loginApi.middleware
    ),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
