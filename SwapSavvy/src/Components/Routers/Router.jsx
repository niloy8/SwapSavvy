import { createBrowserRouter } from "react-router";
import App from "../../App";
import Layout from "../Layout/Layout";
import Home from "../Pages/HomePage/Home";
import Login from "../Authectication/Login";
import Signup from "../Authectication/Signup";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            }
        ]
    },

]);



export default router;