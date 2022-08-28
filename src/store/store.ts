import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "./features/auth-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
// Export a hook that can be reused to resolve types
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export default store;
