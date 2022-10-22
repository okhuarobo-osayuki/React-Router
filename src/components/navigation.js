import "../style.css";
import { Navlink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <Navlink to="/">Home</Navlink>
      <Navlink to="/about">About</Navlink>
    </div>
  );
}

export default Navigation;
