import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { useDispatch, useSelector,type TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;