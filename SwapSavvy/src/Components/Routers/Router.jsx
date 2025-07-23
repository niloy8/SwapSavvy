import { createBrowserRouter } from "react-router";
import App from "../../App";
import Layout from "../Layout/Layout";
import Home from "../Pages/HomePage/Home";
import Login from "../Authectication/Login";
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
            }
        ]
    },

]);



export default router;