import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";

export  const router = createBrowserRouter([
    {

        element:<Layout/>,
        children : [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/login',
                element: <Login/> ,
            },
            {
                path: '/Register',
                element: <Register/> ,
            },
            {
                path: '/stagaire/dashboard',
                element: <h1> Hi Stagaire </h1>,
            },
            {
                path: '*',
                element: <NotFound/>,
            }
        ]
    },

]);
