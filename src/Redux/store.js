import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import counterReducer from "./counter/reducer";
import reducer from "./counter/reducer";
import { todosReducer } from "./todos/reducer";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todoReducer: todosReducer,
  auth: authReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState());

export default store;
