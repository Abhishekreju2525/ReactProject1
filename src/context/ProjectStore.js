import React, { useEffect, useState } from "react";
import ProjectContext from "./ProjectContext";
import { useDispatch } from "react-redux";
import { fetchprojects } from "../store/projectSlice";
export default function ProjectStore({ children }) {
  const dispatch= useDispatch()
  const [project, setproject] = useState(null);
  const [apiprojectData, setapiprojectData] = useState([]);
  const projectApiUrl = "https://66209a873bf790e070b0175d.mockapi.io/api/v1/project";
  const projectToAdd = {
    name : "project sample",
    details: "sample test data lorem ipsumsample test data lorem ipsumsample test data lorem ipsum",
    userId:"19"
}

  
  async function addProject() {
    let res = await fetch(projectApiUrl, {
      method: "POST",  
      headers: { "content-type": "application/json" },
      body: JSON.stringify(projectToAdd),
    });

    let newData = await res.json();
    console.log("Data from api", newData);
    return true
  }

  
  useEffect(async() => {
    const projData= await dispatch(fetchprojects())
    console.log("projdata",projData.payload );
    setapiprojectData(projData.payload)
  }, []);

  return (
    <ProjectContext.Provider value={{project,setproject, addProject} }>
      {children}
    </ProjectContext.Provider>
  );
}
