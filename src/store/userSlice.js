import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

  },
});
export const { } = counterSlice.actions;
export default userSlice.reducer;
