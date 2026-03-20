import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout/Layout'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Library from "../pages/Library";
import AuthLayout from "../layout/AuthLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "내 서재", element: <Library/>},
        ]
    },
    {
        path: "/로그인",
        element: <AuthLayout />,
        children: [
            { index: true, element: <Login />},
        ]
    }
])