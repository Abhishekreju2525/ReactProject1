import React, { useContext, useEffect, useState } from "react";
import ProjectContext from "./ProjectContext";
import { useDispatch } from "react-redux";
import { fetchProjects } from "../store/projectSlice";
import UserContext from "./UserContext";
export default function ProjectStore({ children }) {
  const dispatch = useDispatch();
  const [project, setproject] = useState(null);
  const [apiprojectData, setapiprojectData] = useState([]);
  const userContext=useContext(UserContext)
  const projectApiUrl =
    "https://66209a873bf790e070b0175d.mockapi.io/api/v1/project";
  const projectToAdd = {
    name: "project sample",
    details:
      "sample test data lorem ipsumsample test data lorem ipsumsample test data lorem ipsum",
    userId: "19",
  };

  async function addProject() {
    let res = await fetch(projectApiUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(projectToAdd),
    });

    let newData = await res.json();
    console.log("Data from api", newData);
    return true;
  }

  useEffect(() => {
    async function fetchprojData() {
      const projData = await dispatch(fetchProjects(userContext.userObj.id));
      console.log("projdata", projData.payload);
      setapiprojectData(projData.payload);
    }
    if(userContext.userObj){
      fetchprojData();
    }
  }, [userContext.userObj]);

  return (
    <ProjectContext.Provider value={{ project, setproject, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
}
