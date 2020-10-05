import { FETCH_POSTS } from "../actions/posts";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log(action);
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
