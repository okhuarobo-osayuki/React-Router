import React from "react";
import "../style.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="main">
      <div className="navigation">
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
          to="/"
        >
          Home
        </NavLink>
        <NavLink to="/users">Users</NavLink>
      </div>
      <h1>Home</h1>
      <section>
        <img src="https://placedog.net/350/380?id=22" alt="random dog" />
      </section>
    </div>
  );
}

export default Home;
