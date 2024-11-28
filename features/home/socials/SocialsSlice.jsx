import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socials: null,
};
const SocialsSlice = createSlice({
  name: "socials",
  initialState,
  reducers: {
    setSocials: (state, action) => {
      state.socials = state.socials ? {...state.socials ,...action.payload}: action.payload;
    },
  },
});

export const { setSocials } = SocialsSlice.actions;
export default SocialsSlice.reducer;
