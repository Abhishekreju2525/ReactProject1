import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  loading: false,
  error: null,
};
const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchprojects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchprojects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(fetchprojects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});
export const fetchprojects = createAsyncThunk("projects/getAll", async () => {
  const res = await fetch(
    "https://66209a873bf790e070b0175d.mockapi.io/api/v1/project"
  );
  const data = await res.json();
  return data;
});


export default projectSlice.reducer;
