import axios from "axios";
export const todosAction = {
  GET_TODO_REQUEST: "GET_TODO_REQUEST",
  GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
  GET_TODO_FAILURE: "GET_TODO_FAILURE",
  ADD_TODO_REQUEST: "ADD_TODO_REQUEST",
  ADD_TODO_SUCCESS: "ADD_TODO_SUCCESS",
  ADD_TODO_FAILURE: "ADD_TODO_FAILURE",
};

// action creators

export const getTodoRequest = () => ({
  type: todosAction.GET_TODO_REQUEST,
});

export const getTodoSuccess = (data) => ({
  type: todosAction.GET_TODO_SUCCESS,
  payload: data,
});

export const getTodoFailure = () => ({
  type: todosAction.GET_TODO_FAILURE,
});

export const getTodos = () => (dispatch, getState) => {
  const todoRequestAction = getTodoRequest();
  dispatch(todoRequestAction);
  console.log(getState().auth.token);
  return axios({
    url: "https://json-server-mocker-masai.herokuapp.com/tasks",
    method: "GET",
  })
    .then((res) => {
      const todoSuccessAction = getTodoSuccess(res.data);
      dispatch(todoSuccessAction);
    })
    .catch((err) => {
      const todoFailureAction = getTodoFailure();
      dispatch(todoFailureAction);
    });
};

export const addTodoRequest = () => ({
  type: todosAction.ADD_TODO_REQUEST,
});

export const addTodoSuccess = (data) => ({
  type: todosAction.ADD_TODO_SUCCESS,
  payload: data,
});

export const addTodoFailure = () => ({
  type: todosAction.ADD_TODO_FAILURE,
});

export const addTodos =
  ({ title }) =>
  (dispatch) => {
    const todoRequestAction = addTodoRequest();
    dispatch(todoRequestAction);
    return axios({
      url: "https://json-server-mocker-masai.herokuapp.com/tasks",
      method: "POST",
      data: {
        title,
        status: false,
      },
    })
      .then((res) => {
        const todoSuccessAction = addTodoSuccess();
        dispatch(todoSuccessAction);
      })
      .catch((err) => {
        const todoFailureAction = addTodoFailure();
        dispatch(todoFailureAction);
      });
  };
