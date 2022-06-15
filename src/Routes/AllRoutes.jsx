import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../Components/Homepage";
import { Login } from "../Components/Login";
import { PrivateRoute } from "../Components/PrivateRoute";
import { Todo } from "../Components/Todo/Todo";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/todo"
        element={
          <PrivateRoute>
            <Todo />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
