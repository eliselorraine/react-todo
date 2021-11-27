import { combineReducers } from "redux";
import { todoReducer, hideCompletedReducer } from "./todoReducer";

export const rootReducer = () => combineReducers({
  isHidden: hideCompletedReducer,
  list: todoReducer,
});