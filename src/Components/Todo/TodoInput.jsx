import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos, getTodos } from "../../Redux/todos/action";
import { authFailure } from "../../Redux/auth/action";

import { useNavigate } from "react-router-dom";

export const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAddTodo = () => {
    dispatch(
      addTodos({
        title: text,
      })
    ).then(() => {
      dispatch(getTodos());
    });
  };
  const logmeOut = () => {
    dispatch(authFailure());
    navigate("/");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add a task"
      />
      <br />
      <button onClick={handleAddTodo}>ADD</button>
      <br />
      <br />
      <button onClick={logmeOut}>Logout</button>
    </div>
  );
};
