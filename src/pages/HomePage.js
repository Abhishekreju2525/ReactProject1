import React, { useContext, useEffect, useState } from "react";
import AddProject from "../components/AddProject";
import ProjectList from "../components/ProjectList";
import ProjectContext from "../context/ProjectContext";

function HomePage() {
  const projectContext = useContext(ProjectContext);
  
  return (
    <div>
      <AddProject></AddProject>
      <ProjectList></ProjectList>
    </div>
  );
}

export default HomePage;
