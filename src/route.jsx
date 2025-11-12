import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Menu from "./pages/Menu";
import ManageOrders from "./pages/ManageOrders";
import OpenClose from "./pages/OpenClose";
import EditProfile from "./pages/EditProfile";
import PaymentHistory from "./pages/PaymentHistory";
import Withdraw from "./pages/Withdraw";
import PaymentStatus from "./pages/PaymentStatus";
import Reviews from "./pages/Reviews";
import OrderHistory from "./pages/OrderHistory";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import ProtectedRoute from "./Authentication/ProtectedRoute";
import OrderView from "./views/OrderView";

// routes.jsx
export const routes = [
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard />, title: "Dashboard" },
      { path: "/orders", element: <Orders />, title: "New Orders" },
      {
        path: "/order/:orderId",
        element: <OrderView />,
        title: "Order Details",
      },
      { path: "/menu", element: <Menu />, title: "Menu" },
      {
        path: "/manage-orders",
        element: <ManageOrders />,
        title: "Manage Orders",
      },
      {
        path: "/open-close",
        element: <OpenClose />,
        title: "Open & Closing Hour",
      },
      { path: "/profile", element: <EditProfile />, title: "Profile" },
      {
        path: "/payment-history",
        element: <PaymentHistory />,
        title: "Payment History",
      },
      { path: "/withdraw", element: <Withdraw />, title: "Withdraw" },
      {
        path: "/payment-status",
        element: <PaymentStatus />,
        title: "Payment Status",
      },
      { path: "/reviews", element: <Reviews />, title: "Reviews" },
      {
        path: "/order-history",
        element: <OrderHistory />,
        title: "Order History",
      },
      {
        path: "/setting",
        element: <Setting />,
        title: "Setting",
      },
    ],
  },
  { path: "/", element: <Login /> },
];

export const router = createBrowserRouter(routes);
