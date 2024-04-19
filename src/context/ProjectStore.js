import React, { useContext, useEffect, useState } from "react";
import ProjectContext from "./ProjectContext";
import { useDispatch } from "react-redux";
import { fetchProjects } from "../store/projectSlice";
import UserContext from "./UserContext";
export default function ProjectStore({ children }) {
  const dispatch = useDispatch();
  const [project, setproject] = useState(null);
  const [apiprojectData, setapiprojectData] = useState([]);
  const userContext = useContext(UserContext);


  async function fetchprojData() {
    const projData = await dispatch(fetchProjects(userContext.userObj.id));
    console.log("projdata", projData.payload);
    if(projData.payload==="Not found"){
      setapiprojectData([])
    }
    setapiprojectData([...projData.payload]); // Update state immutably
  }
  
  useEffect(() => {
    if (userContext.userObj) {
      fetchprojData();
    }
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        project,
        setproject,
        apiprojectData,
        setapiprojectData,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
