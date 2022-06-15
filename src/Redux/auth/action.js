import * as types from "./actionTypes";

export const authRequest = (payload) => ({
  type: types.AUTH_REQUEST,
  payload,
});
export const authSuccess = (payload) => ({
  type: types.AUTH_SUCCESS,
  payload,
});
export const authFailure = (payload) => ({
  type: types.AUTH_FAILURE,
  payload,
});
