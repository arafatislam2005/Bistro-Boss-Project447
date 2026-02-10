import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from '../pages/SignUp/SignUp';
// UNCOMMENT THIS LINE:
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Home/Home/Shared/Secret/Secret";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/DashBoard/Cart/Cart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'menu', element: <Menu /> },
      { path: 'order/:category', element: <Order /> },
      { path: 'login', element: <Login /> },
      { path: 'signUp', element: <SignUp /> },
      {
        path: 'secret',
        // Wrap this with PrivateRoute if needed
        element: <PrivateRoute><Secret /></PrivateRoute>
      }
    ]
  },
  {
    path: 'dashboard',
    // This will now work because the import is uncommented
    element: <PrivateRoute><DashBoard /></PrivateRoute>,
    children: [
      {
        path: 'cart',
        element: <Cart />
      },
      // Admin Pannel
      {
        path: 'users',
        element: <AllUsers />
      }
    ]
  }
]);