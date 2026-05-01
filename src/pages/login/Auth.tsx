import './Auth.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './components/Login'
import clsx from 'clsx'
import SignUp from './components/SignUp'

type LoginTab = '로그인' | '회원가입'

export default function Auth() {
    const [tab, setTab] = useState<LoginTab>('로그인')
    const navigate = useNavigate()


    const selectTab = {
        로그인: Login,
        회원가입: SignUp,
    }

    const ActiveTab = selectTab[tab]

    return (
        <section className="login-page">
            <section className="login-left">
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
            </section>
            {/* right */}
            <section className="login-right">
                <div className='form-container'>
                    <div className='right-tab'>
                        <button 
                            className={clsx('tab-btn', {active: tab === '로그인'})}
                            onClick={() => setTab('로그인')}
                        >
                            로그인
                        </button>
                        <button 
                            className={clsx('tab-btn', {active: tab === '회원가입'})}
                            onClick={() => setTab('회원가입')}
                        >
                            회원가입
                        </button>
                    </div>
                    <ActiveTab tab={() => setTab('회원가입')}/>
                </div>
            </section>
        </section>
    )
}