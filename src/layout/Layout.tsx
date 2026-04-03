import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Layout() {
    return (
        <div>
            <Navbar />
            <main>
                <ScrollToTop/>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}