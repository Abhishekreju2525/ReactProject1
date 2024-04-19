import React, { useContext, useEffect, useState } from "react";
import AddProject from "../components/AddProject";
import ProjectList from "../components/ProjectList";
import ProjectContext from "../context/ProjectContext";
import AddModal from "../components/AddModal";
import UserCard from "../components/UserCard";
import { Footer } from "flowbite-react";

function HomePage() {
  const projectContext = useContext(ProjectContext);
  
  return (
    <div className="w-[100%] m-0 flex flex-col">
      <UserCard></UserCard>
      
      <ProjectList></ProjectList>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
