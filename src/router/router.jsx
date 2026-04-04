import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import { RouterProvider } from "react-router/dom";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "admin/login",
    element: <Login />
  }
]);

export function MyRouterProvider() {
  return <RouterProvider router={router} />
}
