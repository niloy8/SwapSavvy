import { Outlet } from "react-router";
import Navbar from "../Pages/Shared/Navbar";
import Fotter from "../Pages/Shared/Fotter";

const Layout = () => {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f0f4f8', // Light gray background
        }}>
            <div style={{
                maxWidth: '100vw',
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