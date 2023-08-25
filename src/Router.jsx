import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Landing from "./pages/landing";
import Live from "./pages/live";
import Layout from "./components/Layout";
import Admin from "./pages/admin";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Landing />
      </Layout>
    ),
  },
  {
    path: "/live",
    element: (
      <Layout>
        <Live />
      </Layout>
    ),
  },
  {
    path: "/admin",
    element: (
      <Layout>
        <Admin />
      </Layout>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
