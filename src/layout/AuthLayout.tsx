import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import LoadingSpinner from "../components/LoadingSpinner"

export default function AuthLayout() {
    return (
        <div>
            <Suspense fallback={<LoadingSpinner />}>
               <Outlet />
            </Suspense>
        </div>
    )
}