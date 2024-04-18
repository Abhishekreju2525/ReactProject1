import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const initialState = {
  projects: [],
  loading: false,
  error: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addNewProject(state, action) {
      // Assuming payload is the new project data
      state.projects.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(createProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects.push(action.payload);
      })
      .addCase(createProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});
export const fetchProjects = createAsyncThunk("projects/getAll", async (userid) => {
  const res = await fetch(
    `https://66209a873bf790e070b0175d.mockapi.io/api/v1/user/${userid}/project`
  );
  const data = await res.json();
  return data;
});
export const createProject = createAsyncThunk(
  "projects/create",
  async (projectData) => {
    const res = await fetch(
      "https://66209a873bf790e070b0175d.mockapi.io/api/v1/project",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      }
    );
    const data = await res.json();
    console.log("data from api",data);
    return data;
  }
);
export const { addNewProject } = projectSlice.actions;
export default projectSlice.reducer;
