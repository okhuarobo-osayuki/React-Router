import { NavLink } from "react-router-dom";
import "../style.css";


function Navigation() {
  return (
    <div className="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
}

export default Navigation;
