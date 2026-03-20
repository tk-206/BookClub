import { NavLink } from "react-router-dom";
import './css/Navbar.css'

export default function Navbar() {
    return (
        <nav className="nav">
            {/* 로고 */}
            <div className="nav-logo">
                북<span>클럽</span>
            </div>

            {/* 메뉴 */}
            <ul className="nav-links">
                <li><NavLink to="내 서재">내 서재</NavLink></li>
                <li><a href="#">모임</a></li>
                <li><a href="#">출판사</a></li>
                <li><a href="#">작가</a></li>
                <li><a href="#">행사</a></li>
            </ul>   
        
            {/* 버튼 */}
            <div className="nav-actions">
                <button className="btn-ghost"><NavLink to="로그인">로그인</NavLink></button>
                <button className="btn-primary">가입하기</button>
            </div>
        </nav>
    )
}