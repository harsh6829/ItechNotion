import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="Navstyle">
      <nav>
        <ul>
          <Link to="/users">
            <h2>Users Page</h2>
          </Link>

          <Link to="posts">
            <h2>Post Page</h2>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
