import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authRequest, authSuccess, authFailure } from "../Redux/auth/action";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const stt = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = () => {
    dispatch(authSuccess());
    navigate("/todo");
  };
  console.log("stt", stt);

  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={loggedIn}>Login</button>
    </div>
  );
};
