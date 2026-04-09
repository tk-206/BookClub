import { NavLink } from "react-router-dom";

export default function HomeStart() {
    return (
        <section className='home-start'>
            <div className='start-title'>지금 바로 시작하세요</div>
            <p className='start-title_desc'>
                책을 좋아하는 모든 분들을 환영합니다.<br/>
                독자든, 작가든, 출판사든 — 이 공간은 여러분의 것입니다.
            </p>
            <div className='start-buttons'>
                <button className='btn-gold'>무료 회원가입</button>
                <NavLink to='/커뮤니티'><button className='btn-outline-light'>기능 더 알아보기</button></NavLink>
            </div>
        </section>
    )
}