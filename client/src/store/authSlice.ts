import { createSlice } from "@reduxjs/toolkit";

interface userType {
  id: string;
  name: string;
  email: string;
}

interface authStateType {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: null | userType;
}

const initialState:authStateType = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers: (builder) => {},
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
