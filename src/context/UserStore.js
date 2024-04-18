import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";

export default function UserStore({ children }) {
  const [user, setUser] = useState(null);
  const [apiUserData, setapiUserData] = useState([]);
  const userApiUrl = "https://66209a873bf790e070b0175d.mockapi.io/api/v1/user";
  const userToAdd = {
    name : "Test",
    email:'test@gmail.com',
    avatar:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1070.jpg"
}

  function loginUser(email, password) {
    const foundUser = apiUserData.find(
      (item) => item.email === email && item.password === password
    );
    if (foundUser) {
      setUser({
        name: foundUser.name,
        email: foundUser.email,
      });
      return true; // Or set some state indicating successful login
    } else {
      return false; // Or set some state indicating failed login
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
    return true
  }

  async function userApiCall() {
    const res = await fetch(userApiUrl);
    const data = await res.json();
    console.log(data);
    setapiUserData(data);
  }
  useEffect(() => {
    userApiCall();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loginUser,addUser }}>
      {children}
    </UserContext.Provider>
  );
}
