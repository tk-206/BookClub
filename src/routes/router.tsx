import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Layout from '../layout/Layout'
import AuthLayout from "../layout/AuthLayout";
import ProtectedRoute from "../components/ProtectedRoute";

const Home = lazy(() => import("../pages/home/Home"));
const Library = lazy(() => import("../pages/library/Library"));
const Community = lazy(() => import("../pages/community/Community"));
const Publisher = lazy(() => import("../pages/publisher/Publisher"));
const Author = lazy(() => import("../pages/author/Author"));
const AuthorMain = lazy(() => import("../pages/author/components/AuthorMain"));
const AuthorChannel = lazy(() => import("../pages/author/components/AuthorChannel"));
const AuthorLounge = lazy(() => import("../pages/author/components/AuthorLounge"));
const Festival = lazy(() => import("../pages/event/Festival"));
const FestivalMain = lazy(() => import("../pages/event/components/FestivalMain"));
const FestivalDetail = lazy(() => import("../pages/event/components/FestivalDetail"));
const FestivalCalendar = lazy(() => import("../pages/event/components/FestivalCalendar"));
const Auth = lazy(() => import("../pages/login/Auth"));
const Recruiting = lazy(() => import("../pages/job/Recruiting"));
const PublisherMain = lazy(() => import("../pages/publisher/components/PublisherMain"));
const PublisherDetail = lazy(() => import("../pages/publisher/components/PublisherDetail/PublisherDetail"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "커뮤니티", element: <Community /> },
            {
                element: <ProtectedRoute />,
                children: [{ path: "내 서재", element: <Library /> },]
            },
            {
                path: "출판사", element: <Publisher />,
                children: [{ index: true, element: <PublisherMain /> }, { path: '상세', element: <PublisherDetail /> }]
            },
            {
                path: "작가", element: <Author />,
                children: [{ index: true, element: <AuthorMain /> }, { path: '채널', element: <AuthorChannel /> }, { element: <ProtectedRoute />, children: [{ path: '라운지', element: <AuthorLounge /> },] },]
            },
            { path: "행사", element: <Festival />, children: [{ index: true, element: <FestivalMain /> }, { path: '상세', element: <FestivalDetail /> }, { path: '캘린더', element: <FestivalCalendar /> },] },
            { path: "구인구직", element: <Recruiting /> }
        ]
    },
    {
        path: "로그인",
        element: <AuthLayout />,
        children: [
            { index: true, element: <Auth /> },
        ]
    },
])