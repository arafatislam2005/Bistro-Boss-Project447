import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoute from "./PrivateRoute";

// FIX 1: Added the extra /Home/ in the path
import Secret from "../pages/Home/Home/Shared/Secret/Secret";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'menu',
        element: <Menu />
      },
      {

        path: 'order/:category',
        element: <Order />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signUp',
        element: <SignUp />
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret /></PrivateRoute>
      }
    ]
  },
]);