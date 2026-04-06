import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout/Layout'
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Library from "../pages/library/Library";
import AuthLayout from "../layout/AuthLayout";
import Community from "../pages/community/Community";
import Publisher from "../pages/publisher/Publisher";
import Author from "../pages/author/Author";
import AuthorMain from "../pages/author/components/AuthorMain";
import AuthorChannel from "../pages/author/components/AuthorChannel";
import AuthorLounge from "../pages/author/components/AuthorLounge";
import Festival from "../pages/event/Festival";
import FestivalMain from "../pages/event/components/FestivalMain";
import FestivalDetail from "../pages/event/components/FestivalDetail";
import FestivalCalendar from "../pages/event/components/FestivalCalendar";

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
            { path: "행사", element: <Festival />, children: [ { index: true, element: <FestivalMain />}, { path: '상세', element: <FestivalDetail />}, { path: '캘린더', element: <FestivalCalendar />},]},
             
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