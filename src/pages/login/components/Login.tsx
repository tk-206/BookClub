import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'

type Props = {
    tab: () => void
}

export default function Login({tab} : Props) {
    
    const location = useLocation()
    const { login } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPw, setShowPw] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrorMsg('')
        setLoading(true)

        try {
            await login(email, password)

            // 원래 가려던 페이지로
            const from = (location.state as any)?.from?.pathname || '/'
            navigate(from, { replace: true })

        } catch (err: any) {
            // 서버에서 오는 에러 메시지 표시
            setErrorMsg(err.response?.data?.message || '이메일 또는 비밀번호를 확인해주세요')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="login">
            <form onSubmit={(e) => { handleLogin(e) }}>
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
                        <input id='auto-btn' type='checkbox' className='auto-btn' />
                        <label htmlFor='auto-btn' className='auto-text'>로그인 유지</label>
                    </div>
                    <button className='btn-submit' onClick={handleLogin}>로그인</button>
                    {errorMsg && (
                        <div style={{ color: '#e53e3e', fontSize: '0.875rem', marginTop: '0.5rem', textAlign: 'center' }}>
                            {errorMsg}
                        </div>
                    )}
                    <div className='login-footer'>
                        계정이 없으신가요? <button onClick={() => tab()}>회원가입</button>
                    </div>
                </div>
            </form>
        </section>
    )
}