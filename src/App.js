import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./Users";
import Post from "./Post";
import Nav from "./Nav";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

export default function App() {
  const users = useSelector((state) => state.users);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  return (
    <Router>
      <div className="App-header">
        {posts}
        {users}
        <Nav className="App" />
        <Route path="/users" component={Users}></Route>
        <Route path="/posts" component={Post}></Route>
      </div>
    </Router>
  );
}
