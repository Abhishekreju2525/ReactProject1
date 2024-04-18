import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
  loggedinUser: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});
export const fetchUsers = createAsyncThunk("users/getAll", async () => {
  const res = await fetch(
    "https://66209a873bf790e070b0175d.mockapi.io/api/v1/user"
  );
  const data = await res.json();
  return data;
});


export default userSlice.reducer;
