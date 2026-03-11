import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function Navbar() {
    return (
        <nav className="flxed top-0 w-full z-50 bg-ivory/90 backdrop-blur-sm border-b border-gold/20">
            <div className="flex items-center justify-between px-10 h-16">
                {/* 로고 */}
                <div className={"text-2xl font-serif text-navy"}>
                    북<span className="italic text-gold">클럽</span>
                </div>
            
                {/* 버튼 */}
                <div className="flex gap-2">
                    <button className="text-sm px-4 py-1.5 border border-navy/30 text-navy hover:bg-navy hover:text-ivory transition-colors">로그인</button>
                    <button className="text-sm px-4 py-1.5 bg-navy text-ivory hover:bg-gold transition-colors">가입하기</button>
                </div>
            </div>
        </nav>
    )
}