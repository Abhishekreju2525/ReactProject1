import React, { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/userSlice";
import { fetchProjects } from "../store/projectSlice";

export default function UserStore({ children }) {
  const dispatch = useDispatch();
  const projectStateData = useSelector((state) => state.project.projects);
  const [userObj, setUserObj] = useState(null);
  const [apiUserData, setapiUserData] = useState([]);
  const userApiUrl = "https://66209a873bf790e070b0175d.mockapi.io/api/v1/user";

  function loginUser(email, password) {
    const foundUser = apiUserData.find(
      (item) => item.email === email && item.password === password
    );
    if (foundUser) {
      setUserObj(foundUser);
      dispatch(fetchProjects(foundUser.id));
      return true;
    } else {
      return false;
    }
  }
  function logoutUser() {
    setUserObj(null);
    // projectStateData(null);
    console.log(userObj);
  }
  async function addUser(formData) {
    let res = await fetch(userApiUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    });
    let newData = await res.json();
    console.log("Data from api", newData);
    return true;
  }

  useEffect(() => {
    async function fetchUserdata() {
      const recData = await dispatch(fetchUsers());
      console.log("recdata", recData.payload);
      setapiUserData(recData.payload);
    }
    fetchUserdata();
  }, []);

  return (
    <UserContext.Provider
      value={{ userObj, setUserObj, loginUser, addUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
}
