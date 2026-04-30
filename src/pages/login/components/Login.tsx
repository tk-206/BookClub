import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'



export default function Login() {
    
    const location = useLocation()
    const { login } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPw, setShowPw] = useState(false)

    const handleLogin = () => {
        login('1')

        const from = location.state?.from?.pathname || '/'
        navigate(from, { replace: true })
    }

    return (
        <section className="login">
            <div className='right-header'>
                <div className='login-title'>만나서 반가워요.</div>
                <div className='login-subtitle'>계정에 로그인하고 독서 여정을 이어가세요.</div>
                <div className='social-btns'>
                    <button className='social-btn google'>Google</button>
                    <button className='social-btn kakao'>카카오</button>
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
                    <input id='auto-btn' type='checkbox' className='auto-btn'/>
                    <label htmlFor='auto-btn' className='auto-text'>로그인 유지</label>
                </div>
                <button className='btn-submit' onClick={handleLogin}>로그인</button>
                <div className='login-footer'>
                    계정이 없으신가요? <NavLink to={'#'}>회원가입</NavLink>
                </div>
            </div>
        </section>
    )
}