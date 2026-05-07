import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "./LoadingSpinner";
import { useMe } from "../hooks/useMe";

export default function ProtectedRoute() {
    const { isLoggedIn } = useAuth()
    const location = useLocation()
    const { isLoading, isError } = useMe()

    if (isLoading) return <LoadingSpinner/>

    if (isError) return <Navigate to='/로그인' state={{ from: location }} replace />
    
    if (!isLoggedIn) return <Navigate to='/로그인' state={{ from : location }} replace />
    

    return <Outlet />
}