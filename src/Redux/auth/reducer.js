import * as types from "./actionTypes";
const initState = {
  isAuth: false,
};

export const authReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.AUTH_REQUEST: {
      return {
        ...state,
        isAuth: false,
      };
    }
    case types.AUTH_SUCCESS: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case types.AUTH_FAILURE: {
      return {
        ...state,
        isAuth: false,
      };
    }
    default:
      return state;
  }
};
