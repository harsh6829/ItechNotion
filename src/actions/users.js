import axios from "axios";
export const FETCH_USERS = "FETCH_POSTS";

export function getPosts() {
  const request = axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(request);
  return {
    type: FETCH_USERS,
    payload: request,
  };
}
