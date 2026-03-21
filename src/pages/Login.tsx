import './css/Login.css'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    return (
        <section className="login-page">
            <div className="login-left">
                <div className='left-header'>
                    <button className='header-back' onClick={() => navigate(-1)}>‹</button>
                    <span className='left-title'>북<em>클럽</em></span>
                </div>
                <div className='left-content'>
                    <div className='content-label'>BOOK COMMUNITY</div>
                    <h1 className='content-title'>
                        책이 있는 곳에<br/>
                        <em>사람이 있다</em>
                    </h1>
                    <p className='content-desc'>
                        독서 기록부터 작가 소통까지.<br/>
                        책을 사랑하는 모든 이들의 공간에<br/>
                        함께하세요.
                    </p>
                    <div className='content-strip'>
                        <div className='member-avatar'>김</div>
                        <div className='member-avatar'>이</div>
                        <div className='member-avatar'>박</div>
                        <div className='member-avatar'>최</div>
                        <div className='member-info'>현재 <strong>2,847명</strong>이 함께하고 있어요</div>
                    </div>
                </div>
                <div className='left-quotes'>
                    <div className='quote-content'>"책은 우리가 꿈꾸는 동안에도 잠들지 않는다."</div>
                    <div className='quote-source'>— 헤르만 헤세</div>
                </div>
            </div>
            <div className="login-right">
                <div className='right-tab'>
                    <button>로그인</button>
                    <button>회원가입</button>
                </div>

                <div className='right-form'>
                    <div className='login-title'>만나서 반가워요.</div>
                    <div className='login-title_desc'>계정에 로그인하고 독서 여정을 이어가세요.</div>
                </div>
            </div>
        </section>
    )
}