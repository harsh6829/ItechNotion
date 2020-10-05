import usersReducer from "./usersReducers";
import postsReducer from "./postsReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  users: usersReducer,
  posts: postsReducer,
});

export default allReducers;
