import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const indexSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    setIndex: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setIndex } = indexSlice.actions;
export default indexSlice.reducer;
