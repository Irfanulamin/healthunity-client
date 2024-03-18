import { createSlice } from "@reduxjs/toolkit";

type TAuthState = {
  email: null | string;
  token: null | string;
};

const initialState: TAuthState = {
  email: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { token, email } = action.payload;

      state.email = email;
      state.token = token;
    },
    logOut: (state) => {
      state.token = null;
      state.email = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const userCurrentToken = (state: any) => state.auth.token;
export const userCurrentEmail = (state: any) => state.auth.email;
