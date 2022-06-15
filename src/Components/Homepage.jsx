import React from "react";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();
  const move = () => {
    navigate("/todo");
  };
  return (
    <div>
      <button onClick={move}>GOTO Todo's</button>
    </div>
  );
};
