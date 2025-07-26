import { createBrowserRouter } from "react-router";
import App from "../../App";
import Layout from "../Layout/Layout";
import Home from "../Pages/HomePage/Home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },

]);



export default router;