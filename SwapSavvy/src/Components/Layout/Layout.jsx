import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar";
import Fotter from "../Pages/Shared/Fotter";

const Layout = () => {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f9fafb',

        }}>
            <div style={{
                maxWidth: '80rem',
                margin: '0 auto',

                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',

            }}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Fotter></Fotter>
            </div>
        </div>
    );
};

export default Layout;