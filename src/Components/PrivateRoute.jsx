import React from "react";
import { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const state = useSelector((state) => state.auth);
  console.log(state);

  if (state.isAuth) {
    return children;
  }

  return <Navigate to="/login" />;
};
