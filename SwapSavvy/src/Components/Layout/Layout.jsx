import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar";
import Fotter from "../Pages/Shared/Fotter";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Layout;