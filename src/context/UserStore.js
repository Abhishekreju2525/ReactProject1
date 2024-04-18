import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/userSlice";

export default function UserStore({ children }) {
  const dispatch = useDispatch();

  const [userObj, setUserObj] = useState(null);
  const [apiUserData, setapiUserData] = useState([]);
  const userApiUrl = "https://66209a873bf790e070b0175d.mockapi.io/api/v1/user";

  function loginUser(email, password) {
    const foundUser = apiUserData.find(
      (item) => item.email === email && item.password === password
    );
    if (foundUser) {
      setUserObj(foundUser);
      return true;
    } else {
      return false;
    }
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
    <UserContext.Provider value={{ userObj, setUserObj, loginUser, addUser }}>
      {children}
    </UserContext.Provider>
  );
}
