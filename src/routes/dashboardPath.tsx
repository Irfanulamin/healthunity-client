import AddSupply from "../pages/private/AddSupply";
import Dashboard from "../pages/private/Dashboard";

import Supplies from "../pages/private/Supplies";

export const dashboardPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "CURD Operations",
    children: [
      {
        name: "Supplies",
        path: "supplies",
        element: <Supplies />,
      },
      {
        name: "Add Supply Post",
        path: "create-supply",
        element: <AddSupply />,
      },
    ],
  },
];
