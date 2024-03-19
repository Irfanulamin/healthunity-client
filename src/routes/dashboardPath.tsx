import AddSupply from "../pages/private/AddSupply";
import CreateTestimonial from "../pages/private/CreateTestimonial";
import Dashboard from "../pages/private/Dashboard";

import Supplies from "../pages/private/Supplies";

export const dashboardPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },

  {
    name: "Admin Operations",
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
      {
        name: "Create Testimonial",
        path: "create-testimonial",
        element: <CreateTestimonial />,
      },
    ],
  },
];
