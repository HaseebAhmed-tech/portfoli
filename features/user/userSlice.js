import { createSlice } from "@reduxjs/toolkit";
import { set } from "zod";

const initialState = {
  userId: null,
  userData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserId, setUserData } = userSlice.actions;
export default userSlice.reducer;
