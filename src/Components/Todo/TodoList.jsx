import React from "react";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const loading = useSelector((state) => state.todoReducer.loading);
  //   console.log("response", todos);
  return (
    <div>
      <h1>Todos</h1>
      {loading && <div>LOADING</div>}
      {todos.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};
