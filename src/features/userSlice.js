import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload;
    },
    logout: (state) => {
      state.name = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.name;

export default userSlice.reducer;
