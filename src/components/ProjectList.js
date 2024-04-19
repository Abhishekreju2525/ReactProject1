import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import ProjectContext from "../context/ProjectContext";
import { useDispatch, useSelector } from "react-redux";
import { deleteProj, deleteProject } from "../store/projectSlice";
import { Link } from "react-router-dom";

function ProjectList() {
  const userContext = useContext(UserContext);
  const projectContext = useContext(ProjectContext);
  const dispatch = useDispatch();
  const projectLs = useSelector((state) => state.project);
  const handleDelete = (projectId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (confirmDelete) {
      // Dispatch the deleteProject thunk with the projectId
      dispatch(deleteProject(projectId));
    }
  };

  return (
    <div>
      {projectLs.projects !== "Not found" ? (
        <>
          {projectLs.projects.map((item) => {
            return (
              <>
                {item.name}{" "}
                <button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  Delete
                </button>
                <Link to={`/edit/${item.id}`}>Edit</Link>
                <br />
              </>
            );
          })}
        </>
      ) : (
        <>
          <p>No projects found</p>
        </>
      )}
    </div>
  );
}

export default ProjectList;
