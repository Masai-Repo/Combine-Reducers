import React from "react";
import { todosAction } from "./action";

const initState = {
  loading: false,
  todos: [],
  error: false,
};

export const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case todosAction.GET_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case todosAction.GET_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    }
    case todosAction.GET_TODO_FAILURE: {
      return {
        ...state,
        laoding: false,
        error: true,
      };
    }
    case todosAction.ADD_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case todosAction.ADD_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case todosAction.ADD_TODO_FAILURE: {
      return {
        ...state,
        laoding: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
