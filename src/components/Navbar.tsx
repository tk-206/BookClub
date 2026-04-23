import { NavLink, useLocation } from "react-router-dom";
import './css/Navbar.css'
import clsx from "clsx";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";
import AllCate from "./AllCate";
import AddPostModal from "./AddPostModal";

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
    const [menuOpen, setMenuOpen] = useState(false)

    let actions
    if (isLibrary) {
        actions = (
            <>
                <ProfileDropdown />
                {/* 모바일 메뉴 */}
                <div id="shTabMo">
                    <button type="button" className="nav-btn" onClick={() => setMenuOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
                </div>
            </>
        )
    }
    else if (isCommunity) {
        actions = (
            <>
                <button className="btn-primary">✏️ 글쓰기</button>
                <ProfileDropdown />
                {/* 모바일 메뉴 */}
                <div id="shTabMo">
                    <button type="button" className="nav-btn" onClick={() => setMenuOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
                </div>
            </>
        )
    }
    else if (isPublisher) {
        actions = (
            <>   
                <ProfileDropdown />
                {/* 모바일 메뉴 */}
                <div id="shTabMo">
                    <button type="button" className="nav-btn" onClick={() => setMenuOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
                </div>
            </>
        )
    }
    else if (isAuthor) {
        actions = (
            <>   
                <ProfileDropdown />
                {/* 모바일 메뉴 */}
                <div id="shTabMo">
                    <button type="button" className="nav-btn" onClick={() => setMenuOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
                </div>
            </>
        )
    }
    else if (isFestival) {
        actions = (
            <>   
                <ProfileDropdown />
                {/* 모바일 메뉴 */}
                <div id="shTabMo">
                    <button type="button" className="nav-btn" onClick={() => setMenuOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
                </div>
            </>
        )
    }
    else {
        actions = (
            <>   
                <ProfileDropdown />
                {/* 모바일 메뉴 */}
                <div id="shTabMo">
                    <button type="button" className="nav-btn" onClick={() => setMenuOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
                </div>
            </>
        )
    }

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [menuOpen])

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
            <div className="nav-actions">{isLoggedIn ? (actions) : (<>
                <NavLink to="로그인"><button className="btn-ghost">로그인</button></NavLink>
                <button className="btn-primary">가입하기</button>
            </>) }</div>

            <AllCate isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </nav>
    )
}