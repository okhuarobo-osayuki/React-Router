import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Users from "../pages/users";

function RouteApp() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user" element={<Users />} />
  </Routes>;
}
export default RouteApp;
