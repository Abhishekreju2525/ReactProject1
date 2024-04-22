import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import ProjectContext from "../context/ProjectContext";
import { useDispatch, useSelector } from "react-redux";
import { deleteProj, deleteProject } from "../store/projectSlice";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  const userContext = useContext(UserContext);
  const projectContext = useContext(ProjectContext);
  const dispatch = useDispatch();
  const projectLs = useSelector((state) => state.project);
  console.log("projectLS",projectLs);
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
   <div className="p-8 text-center"> <hr />
    <h2 className="my-8 text-3xl">Your projects</h2>
   
     <div className=" grid max-sm:grid-cols-1 max-md:grid-cols-3 max-2xl:grid-cols-4 gap-4 mt-3 text-left">
      {projectLs.projects !== "Not found" ? (
        <>
          {projectLs.projects.map((item) => {
            return (
              <>
               <ProjectCard key={item.id} item={item} handleDelete={handleDelete}></ProjectCard>
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
   </div>
  );
}

export default ProjectList;
