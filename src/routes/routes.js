import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const Users = lazy(() => import("../pages/users"));
const User = lazy(() => import("../pages/user"));
const ErrorPage = lazy(() => import("../pages/404"));

function RouteApp() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />}>
          <Route path="user" element={<User />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  );
}
export default RouteApp;
