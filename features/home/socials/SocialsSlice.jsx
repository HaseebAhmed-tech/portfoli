import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socials: null,
};
const SocialsSlice = createSlice({
  name: "socials",
  initialState,
  reducers: {
    setSocials: (state, action) => {
      state.socials = action.payload;
    },
  },
});

export const { setSocials } = SocialsSlice.actions;
export default SocialsSlice.reducer;
