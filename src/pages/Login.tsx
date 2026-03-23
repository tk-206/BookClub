import './css/Login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import clsx from 'clsx'

type LoginTab = '로그인' | '회원가입'

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [tab, setTab] = useState<LoginTab>('로그인')
    const [showPw, setShowPw] = useState(false)

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
                    <div className='right-header'>
                        <div className='login-title'>만나서 반가워요.</div>
                        <div className='login-subtitle'>계정에 로그인하고 독서 여정을 이어가세요.</div>
                        <div className='social-btns'>
                            <button className='social-btn'>Google</button>
                            <button className='social-btn'>카카오</button>
                            <button className='social-btn'>Apple</button>
                        </div>
                        <div className='header-divider'>
                            <div className='divider-line'></div>
                            <div className='divider-text'>또는 이메일로</div>
                            <div className='divider-line'></div>
                        </div>
                    </div>
                    <div className='right-login'>
                        <div className='login-form'>
                            <div className='login-label'>이메일</div>
                            <input
                                className='login-input'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                            />
                        </div>
                        <div className='login-form'>
                            <div className='login-label'>비밀번호 <NavLink to={'#'}>비밀번호 찾기</NavLink></div>
                            <div className='login-input-wrap'>
                                <input
                                    className='login-input'
                                    type={showPw ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                />
                                <button className='eye-btn' onClick={() => setShowPw(prev => !prev)}>{showPw ? '🙈' : '👁'}</button>
                            </div>
                        </div>
                        <div className='login-auto-check'>
                            <input type='checkbox' className='auto-btn'/>
                            <div className='auto-text'>로그인 상태 유지</div>
                        </div>
                        <button className='btn-submit'>로그인</button>
                        <div className='login-footer'>
                            계정이 없으신가요? <NavLink to={'#'}>회원가입</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}