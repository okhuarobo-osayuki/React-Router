import React from "react";
import "../style.css";
import { Link, NavLink, Outlet } from "react-router-dom";

function Users() {
  return (
    <div className="users">
      <h1>Users</h1>
      <div className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "white",
                  color: "black",
                  border: "0.5px solid black",
                }
              : { color: "white" }
          }
          to="/users"
        >
          Users
        </NavLink>
      </div>
      <Link to="/users/user">Our Users</Link>  
      <Outlet />
    </div>
  );
}

export default Users;
