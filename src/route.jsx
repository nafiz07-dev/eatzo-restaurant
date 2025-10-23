import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
