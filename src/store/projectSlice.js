import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

// const initialState = {
//   projects: [],
//   loading: false,
//   error: null,
// };

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
    loading: false,
    error: null,
  },
  reducers: {
    addNewProject(state, action) {
      state.projects.push(action.payload);
    },
    deleteProj(state, data) {
      const projectId = data.payload;
      state.projects = state.projects.filter(
        (project) => project.id !== projectId
      );
      deleteProject(projectId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload === "Not found") {
          state.projects = state.projects;
        }
        else{
          state.projects=action.payload
        }
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
        const newData = action.payload;
        state.projects = [...state.projects, newData];
      })
      .addCase(createProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        const projectId = action.payload;
        state.projects = state.projects.filter(
          (project) => project.id !== projectId
        );
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        const updatedProject = action.payload;
        const index = state.projects.findIndex(
          (project) => project.id === updatedProject.id
        );
        if (index !== -1) {
          state.projects[index] = updatedProject;
        }
      });
  },
});
export const fetchProjects = createAsyncThunk(
  "projects/getAll",
  async (userid) => {
    const res = await fetch(
      `https://66209a873bf790e070b0175d.mockapi.io/api/v1/user/${userid}/project`
    );
    const data = await res.json();
    return data;
  }
);
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
    console.log("data from api", data);
    return data;
  }
);
export const deleteProject = createAsyncThunk(
  "projects/delete",
  async (projectId) => {
    try {
      const response = await fetch(
        `https://66209a873bf790e070b0175d.mockapi.io//api/v1/user/1/project/${projectId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        return projectId;
      } else {
        throw new Error("Failed to delete project");
      }
    } catch (error) {
      throw new Error("Error deleting project: " + error.message);
    }
  }
);
export const updateProject = createAsyncThunk(
  "projects/update",
  async (updatedData) => {
    const res = await fetch(
      `https://66209a873bf790e070b0175d.mockapi.io/api/v1/project/${updatedData.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );
    const data = await res.json();
    console.log("data from api", data);
    return data;
  }
);
export const { addNewProject, deleteProj } = projectSlice.actions;
export default projectSlice.reducer;
