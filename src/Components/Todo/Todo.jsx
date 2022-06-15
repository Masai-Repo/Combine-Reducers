import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getTodoRequest,
  getTodos,
  getTodoSuccess,
} from "../../Redux/todos/action";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div>
      <TodoInput />
      <br />
      <TodoList />
    </div>
  );
};
