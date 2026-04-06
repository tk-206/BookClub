import { NavLink, useLocation } from "react-router-dom";
import './css/Navbar.css'
import clsx from "clsx";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

type NavTab = '' | '내 서재' | '커뮤니티' | '출판사' | '작가' | '행사'

export default function Navbar() {
    const [tab,setTab] = useState<NavTab>('')
    const location = useLocation()
    const path = decodeURIComponent(location.pathname)
    const isLibrary = path.includes("내 서재")
    const isCommunity = path.includes("커뮤니티")
    const isPublisher = path.includes("출판사")
    const isAuthor = path.includes("작가")
    const isFestival = path.includes("행사")
    const { isLoggedIn, user, logout } = useAuth()

    let actions
    if (isLibrary) {
        actions = (
            <>
                <button>🔔</button>
                <button className="nav-avatar">김</button>
            </>
        )
    }
    else if (isCommunity) {
        actions = (
            <>
                <button className="btn-primary">✏️ 글쓰기</button>
                <button className="nav-avatar">김</button>
            </>
        )
    }
    else if (isPublisher) {
        actions = (
            <>   
                <button className="nav-avatar">김</button>
            </>
        )
    }
    else if (isAuthor) {
        actions = (
            <>   
                <button className="nav-avatar">김</button>
            </>
        )
    }
    else if (isFestival) {
        actions = (
            <>   
                <button className="nav-avatar">김</button>
            </>
        )
    }
    else {
        actions = (
            <>
                <NavLink to="로그인"><button className="btn-ghost">로그인</button></NavLink>
                <button className="btn-primary">가입하기</button>
            </>
        )
    }

    return (
        <nav className="nav">
            {/* 로고 */}
            <div className="nav-logo">
                <NavLink to={''}>북<span>클럽</span></NavLink>
            </div>

            {/* 메뉴 */}
            <ul className="nav-links">
                <li className={clsx('nav-link', {active: tab === '내 서재'})}><NavLink to="내 서재" onClick={() => setTab('내 서재')}>내 서재</NavLink></li>
                <li className={clsx('nav-link', {active: tab === '커뮤니티'})}><NavLink to="커뮤니티" onClick={() => setTab('커뮤니티')}>커뮤니티</NavLink></li>
                <li className={clsx('nav-link', {active: tab === '출판사'})}><NavLink to="출판사" onClick={() => setTab('출판사')}>출판사</NavLink></li>
                <li className={clsx('nav-link', {active: tab === '작가'})}><NavLink to="작가" onClick={() => setTab('작가')}>작가</NavLink></li>
                <li className={clsx('nav-link', {active: tab === '행사'})}><NavLink to="행사" onClick={() => setTab('행사')}>행사</NavLink></li>
            </ul>   
        
            {/* 버튼 */}
            <div className="nav-actions">{actions}</div>
        </nav>
    )
}