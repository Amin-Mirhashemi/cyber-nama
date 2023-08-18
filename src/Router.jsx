import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Landing from "./pages/landing";
import Live from "./pages/live";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/live",
    element: <Live />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
