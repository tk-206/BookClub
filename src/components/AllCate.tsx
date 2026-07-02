import clsx from "clsx";
import { useAuth } from "../context/useAuth";
import { Link, NavLink } from "react-router-dom";

type Props = {
  isOpen: boolean
  onClose: () => void
}


export default function AllCate({ isOpen, onClose }: Props) {
    const { isAuthenticated, logout } = useAuth()

    return (
        <div className={clsx('fixed top-0 left-0 w-full h-screen pointer-events-none text-sm bg-ivory transition-opacity duration-200', isOpen ? 'opacity-100 pointer-events-auto z-[200]' : 'opacity-0')}>
            <div className="flex items-center h-[55px] border-b border-[#e1e1e1] text-[#111]">
                <button type="button" className="w-[50px] h-full border-none text-[#111] bg-ivory ml-[15px] flex items-center justify-center cursor-pointer" onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                {isAuthenticated ? 
                    (<div className="ml-auto pr-5">
                        <button type="button" className="text-[13px] font-medium text-rose leading-none mr-2 bg-transparent border-none cursor-pointer" onClick={logout}>로그아웃</button>           
                    </div>) : 
                    (<div className="user">
                        <Link to="/로그인" onClick={onClose} className="text-[13px] font-medium text-[#666] leading-none mr-2 no-underline">로그인</Link>
                        <Link to="/로그인" onClick={onClose} className="text-[13px] font-medium text-[#666] leading-none ml-2 pl-3 border-l border-[#ddd] no-underline">회원가입</Link>           
                    </div>)
                }
            </div>
            <div className="w-full py-3">
                <ul className="list-none">
                    <NavLink to='/내 서재' onClick={onClose}><li className="flex items-center gap-1 px-[15px] h-[38px] border-b border-[#e1e1e1]">내 서재</li></NavLink>
                    <NavLink to='/커뮤니티' onClick={onClose}><li className="flex items-center gap-1 px-[15px] h-[38px] border-b border-[#e1e1e1]">커뮤니티</li></NavLink>
                    <NavLink to='/출판사' onClick={onClose}><li className="flex items-center gap-1 px-[15px] h-[38px] border-b border-[#e1e1e1]">출판사</li></NavLink>
                    <NavLink to='/작가' onClick={onClose}><li className="flex items-center gap-1 px-[15px] h-[38px] border-b border-[#e1e1e1]">작가</li></NavLink>
                    <NavLink to='/행사' onClick={onClose}><li className="flex items-center gap-1 px-[15px] h-[38px] border-b border-[#e1e1e1]">행사</li></NavLink>
                </ul>
            </div>
        </div>
    )
}