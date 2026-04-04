import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

export function MyRouterProvider() {
  return <RouterProvider router={router} />
}
