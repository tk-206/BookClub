import clsx from "clsx";
import './css/AllCate.css'
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

type Props = {
  isOpen: boolean
  onClose: () => void
}


export default function AllCate({ isOpen, onClose }: Props) {
    const { isLoggedIn, logout } = useAuth()

    return (
        <div className={clsx('moCate', {open: isOpen})}>
            <div className="top">
                <button type="button" className="cate_back" onClick={onClose}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                {isLoggedIn ? 
                    (<div className="user">
                        <button onClick={logout} style={{color:'var(--rose)'}}>로그아웃</button>           
                    </div>) : 
                    (<div className="user">
                        <a href="/로그인">로그인</a>
                        <a href="/로그인">회원가입</a>           
                    </div>)
                }
            </div>
            <div className="mo-lnb">
                <ul className="mo-lnb-ul">
                    <NavLink to='/내 서재' onClick={onClose}><li>내 서재</li></NavLink>
                    <NavLink to='/커뮤니티' onClick={onClose}><li>커뮤니티</li></NavLink>
                    <NavLink to='/출판사' onClick={onClose}><li>출판사</li></NavLink>
                    <NavLink to='/작가' onClick={onClose}><li>작가</li></NavLink>
                    <NavLink to='/행사' onClick={onClose}><li>행사</li></NavLink>
                </ul>
            </div>
        </div>
    )
}

/* <div><span class="span1"></span><span class="span2"></span><span class="span3"></span></div> */
/* #shGnbMo .all_menu div {
    position: relative;
    width: 19px;
    height: 14px;
    margin-right: 10px;
} */
/* #shGnbMo .all_menu .span1 {
    top: 50%;
    left: 0;
    width: 19px;
    margin-top: -1px;
    transform-origin: 50% 50%;
} */
/* #shGnbMo .all_menu .span2 {
    top: 0;
    left: 0;
    width: 19px;
    transform-origin: 0 50%;
} */
/* #shGnbMo .all_menu .span3 {
    bottom: 0;
    right: 0;
    width: 19px;
    transform-origin: 100% 50%;
    transform: translate(0, 0);
} */