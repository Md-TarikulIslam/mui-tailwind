import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./../layouts/DashboardLayout";
import Homepage from "../pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
