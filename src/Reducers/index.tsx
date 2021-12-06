import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import blogReducer from "./blogReducer";
export default combineReducers({
  userReducer,
  blogReducer,
});
