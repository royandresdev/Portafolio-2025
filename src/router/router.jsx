import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import { RouterProvider } from "react-router/dom";
import Login from "../Pages/Login";
import Admin from "../Pages/Admin/Admin";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    element: <ProtectedRoute />, // loader de protección
    children: [
      {
        path: "/admin",
        element: <Admin />
      }
    ]
  }
]);

export function MyRouterProvider() {
  return <RouterProvider router={router} />
}
