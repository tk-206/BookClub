import type { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "./LoadingSpinner";

export default function ProtectedRoute() {
    const { isLoggedIn, isInitializing } = useAuth()
    const location = useLocation()

    if (isInitializing) return <LoadingSpinner/>
    
    if (!isLoggedIn) {
        return <Navigate to='/로그인' state={{ from : location }} replace />
    }

    return <Outlet />
}