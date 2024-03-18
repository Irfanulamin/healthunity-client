import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/public/Home";
import AllSupplies from "../pages/public/AllSupplies";
import SupplyDetail from "../pages/public/SupplyDetail";
import { routesGenerator } from "../utils/routesGenerator";
import { dashboardPath } from "./dashboardPath";
import Dashboard from "../pages/private/Dashboard";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import ProtectedLayer from "../components/ui/ProtectedLayer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "supplies",
        element: <AllSupplies />,
      },
      {
        path: "supplies/:id",
        element: <SupplyDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedLayer>
        <Dashboard />
      </ProtectedLayer>
    ),
    children: routesGenerator(dashboardPath),
  },
]);
