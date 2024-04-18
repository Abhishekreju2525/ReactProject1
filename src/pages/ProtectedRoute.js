import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute() {
  const userContext = useContext(UserContext);
  console.log(userContext);
  if (!userContext.user) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      ProtectedRoute <br />
      {userContext.user.name}
      {userContext.user.email}
    </div>
  );
}

export default ProtectedRoute;
