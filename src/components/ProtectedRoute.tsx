import type { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "./LoadingSpinner";
import { useMe } from "../api/useMe";

export default function ProtectedRoute() {
    const { isLoggedIn, isInitializing } = useAuth()
    const location = useLocation()
    const { isLoading, isError } = useMe()

    if (isInitializing) return <LoadingSpinner/>

    if (isLoading) return <LoadingSpinner/>

    if (isError) return <Navigate to='/로그인' state={{ from: location }} replace />
    
    if (!isLoggedIn) return <Navigate to='/로그인' state={{ from : location }} replace />
    

    return <Outlet />
}