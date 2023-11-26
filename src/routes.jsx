import { createBrowserRouter } from "react-router-dom";
import Users from "./pages/users/Users";
import Layout from "./components/Layout/Layout";
import User from "./pages/user/User";
import CRM from "./pages/CRM/CRM";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <CRM />,
      },
      {
        path: "users",
        element: <Users />,
      },

      {
        path: "users/:id",
        element: <User />,
      },

      {
        path: "crm",
        element: <CRM />,
      },
    ],
  },
]);

export default router;
