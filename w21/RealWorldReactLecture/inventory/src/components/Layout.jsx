import { Outlet } from "react-router-dom";
import { favMessageProvider } from "../contexts/favIconContext";
import Navbar from "./Navbar";

function Layout() {
return(
    <>
    <favMessageProvider>

        {/* Navbar */}
        <Navbar/>
        <Outlet />
        {/* Footer */}
    </favMessageProvider>
    </>
);
}

export default Layout;