import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./Users";
import Post from "./Post";
import Nav from "./Nav";
import "./App.css";
export default function App() {
  return (
    <Router>
      <div className="App-header">
        <Nav className="App" />
        <Route path="/users" component={Users}></Route>
        <Route path="/posts" component={Post}></Route>
      </div>
    </Router>
  );
}
