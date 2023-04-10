import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { isLogged } = useContext(LoginContext);

  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
