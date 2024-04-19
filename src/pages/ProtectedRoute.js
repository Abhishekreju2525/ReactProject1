import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";

function ProtectedRoute({children}) {
  const userContext = useContext(UserContext);

  console.log(userContext);
  
  if (!userContext.userObj) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
}

export default ProtectedRoute;
