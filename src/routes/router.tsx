import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout/Layout'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Library from "../pages/Library";
import AuthLayout from "../layout/AuthLayout";
import Community from "../pages/Community";
import Publisher from "../pages/Publisher";
import Author from "../pages/author/Author";
import AuthorMain from "../pages/author/components/AuthorMain";
import AuthorChannel from "../pages/author/components/AuthorChannel";
import AuthorLounge from "../pages/author/components/AuthorLounge";
import Festival from "../pages/event/festival";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "내 서재", element: <Library />},
            { path: "커뮤니티", element: <Community />},
            { path: "출판사", element: <Publisher />},
            { path: "작가", element: <Author />, children: [ { index: true, element: <AuthorMain />}, { path: '채널', element: <AuthorChannel />}, { path: '라운지', element: <AuthorLounge />} ]},
            { path: "행사", element: <Festival />,},
             
        ]
    },
    {
        path: "로그인",
        element: <AuthLayout />,
        children: [
            { index: true, element: <Login />},
        ]
    },
])