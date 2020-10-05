import { FETCH_USERS } from "../actions/users";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      console.log(action);
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
