import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contacts/slice";
import filterReducer from "./filters/slice";
import authReducer from "./auth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedAuthReducer = persistReducer(
  {
    key: "user-token",
    storage,
    whitelist: ["token"],
  },
  authReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
