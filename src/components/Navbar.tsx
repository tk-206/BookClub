import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { useAuth } from "../context/useAuth";
import ProfileDropdown from "./ProfileDropdown";
import AllCate from "./AllCate";
import { useMe } from "../hooks/useMe";

export default function Navbar() {
    const location = useLocation()
    const path = decodeURIComponent(location.pathname)
    const { data: user } = useMe()
    const isLibrary = path.includes("내 서재")
    const isCommunity = path.includes("커뮤니티")
    const isPublisher = path.includes("출판사")
    const isAuthor = path.includes("작가")
    const isFestival = path.includes("행사")
    const { isAuthenticated } = useAuth()
    const [menuOpen, setMenuOpen] = useState(false)

    let actions
    if (isLibrary) {
        actions = (
            <>
            {/* 하나로 합치고 분기마다 들어가야하는 것을 조건부로 넣어주는 게 나을거같음. */}
                <ProfileDropdown />
                {/* 모바일 메뉴 */}
                <div id="md:hidden block">
                    <button type="button" className="bg-transparent border-none outline-none cursor-pointer p-0" onClick={() => setMenuOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
                </div>
            </>
        )
    }
    else if (isCommunity) {
        actions = (
            <>
                <ProfileDropdown />
                {/* 모바일 메뉴 */}
                <div id="md:hidden block">
                    <button type="button" className="bg-transparent border-none outline-none cursor-pointer p-0" onClick={() => setMenuOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
                </div>
            </>
        )
    }
    else if (isPublisher) {
        actions = (
            <>   
                <ProfileDropdown />
                {/* 모바일 메뉴 */}
                <div id="md:hidden block">
                    <button type="button" className="bg-transparent border-none outline-none cursor-pointer p-0" onClick={() => setMenuOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
                </div>
            </>
        )
    }
    else if (isAuthor) {
        actions = (
            <>   
                <ProfileDropdown />
                {/* 모바일 메뉴 */}
                <div id="md:hidden block">
                    <button type="button" className="bg-transparent border-none outline-none cursor-pointer p-0" onClick={() => setMenuOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
                </div>
            </>
        )
    }
    else if (isFestival) {
        actions = (
            <>   
                <ProfileDropdown />
                {/* 모바일 메뉴 */}
                <div id="md:hidden block">
                    <button type="button" className="bg-transparent border-none outline-none cursor-pointer p-0" onClick={() => setMenuOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
                </div>
            </>
        )
    }
    else {
        actions = (
            <>   
                <ProfileDropdown />
                {/* 모바일 메뉴 */}
                <div id="md:hidden block">
                    <button type="button" className="bg-transparent border-none outline-none cursor-pointer p-0" onClick={() => setMenuOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
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
        <nav className="fixed top-0 w-full z-100 bg-[#FAF7F2]/92 backdrop-blur-md border-b border-border px-[5%] flex items-center justify-between h-16">
            {/* 로고 */}
            <div className="font-['Playfair_Display'] text-2xl text-navy -tracking-[0.02em]">
                <NavLink to={''}>북<span className="text-gold ltalic">클럽</span></NavLink>
            </div>

            {/* 메뉴 */}
            <ul className="hidden md:flex gap-8 list-none">
                <li className=""><NavLink to="내 서재" className={({ isActive }) => clsx("font-sans text-[0.82rem] font-normal tracking-[0.05em] no-underline transition-colors hover:text-navy", isActive ? "text-navy font-medium border-b border-gold pb-[2px]" : "text-gold-light_2")}>내 서재</NavLink></li>
                <li className=""><NavLink to="커뮤니티" className={({ isActive }) => clsx("font-sans text-[0.82rem] font-normal tracking-[0.05em] no-underline transition-colors hover:text-navy", isActive ? "text-navy font-medium border-b border-gold pb-[2px]" : "text-gold-light_2")}>커뮤니티</NavLink></li>
                {user?.role === '관리자' && 
                    <>
                        <li className=""><NavLink to="출판사" className={({ isActive }) => clsx("font-sans text-[0.82rem] font-normal tracking-[0.05em] no-underline transition-colors hover:text-navy", isActive ? "text-navy font-medium border-b border-gold pb-[2px]" : "text-gold-light_2")}>출판사</NavLink></li>
                        <li className=""><NavLink to="작가" className={({ isActive }) => clsx("font-sans text-[0.82rem] font-normal tracking-[0.05em] no-underline transition-colors hover:text-navy", isActive ? "text-navy font-medium border-b border-gold pb-[2px]" : "text-gold-light_2")}>작가</NavLink></li>
                        <li className=""><NavLink to="행사" className={({ isActive }) => clsx("font-sans text-[0.82rem] font-normal tracking-[0.05em] no-underline transition-colors hover:text-navy", isActive ? "text-navy font-medium border-b border-gold pb-[2px]" : "text-gold-light_2")}>행사</NavLink></li>
                    </>
                }
            </ul>   
        
            {/* 버튼 */}
            <div className="flex gap-3 items-center">{isAuthenticated ? (actions) : (<>
                <NavLink to="로그인"><button className="font-sans text-[0.82rem] text-navy bg-transparent border border-navy/30 py-[0.45rem] px-[1.1rem] rounded-[2px] cursor-pointer transition-all hover:border-navy">로그인</button></NavLink>
                <button className="font-sans text-[0.82rem] text-ivory bg-navy border border-navy py-[0.45rem] px-[1.3rem] rounded-[2px] cursor-pointer transition-all hover:bg-gold hover:border-gold">가입하기</button>
            </>) }</div>

            <AllCate isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </nav>
    )
}