import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';

export function getPosts() {

const request = axios.get('https://jsonplaceholder.typicode.com/posts');
console.log(request);
  return {
    type: FETCH_POSTS
    ,
    payload: request
    };
}