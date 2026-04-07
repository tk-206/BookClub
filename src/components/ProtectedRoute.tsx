import type { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
    const { isLoggedIn } = useAuth()
    const location = useLocation()
    
    if (!isLoggedIn) {
        return <Navigate to='/로그인' state={{ from : location }} replace />
    }

    return <Outlet />
}