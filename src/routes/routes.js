import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Users from "../pages/users";
import User from "../pages/user";
import ErrorFallback from "../pages/404";

function RouteApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />}>
        <Route path="user" element={<User />} />
      </Route>
      <Route path="*" element={<ErrorFallback />} />
    </Routes>
  );
}
export default RouteApp;
