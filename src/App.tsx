import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { routerPaths } from "./router.model";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routerPaths
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
