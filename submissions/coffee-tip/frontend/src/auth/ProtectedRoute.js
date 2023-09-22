import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const ProtectedRoutes = ({ redirectPath = "/login", children }) => {
  // get cookie from browser if logged in
  const token = cookies.get("TOKEN");
  // return route if there is a valid token set in the cookie
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoutes;
