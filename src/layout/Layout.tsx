import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Layout() {
    return (
        <div>
            <Navbar />
            <main>
                <ScrollToTop/>
                <Suspense fallback={<LoadingSpinner />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </div>
    )
}