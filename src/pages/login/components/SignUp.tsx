import clsx from "clsx"
import { useState } from "react"

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [touched, setTouched] = useState(false)
    const [agreements, setAgreements] = useState({
        terms: false,        // 이용약관 (필수)
        privacy: false,      // 개인정보 (필수)
        marketing: false,    // 선택
        age: false           // 14세 이상 (필수)
    })

    const handleAllCheck = (checked: boolean) => {
        setAgreements({
            terms: checked,
            privacy: checked,
            marketing: checked,
            age: checked
        })
    }

    const handleCheck = (key: keyof typeof agreements) => {
        setAgreements(prev => ({
            ...prev,
            [key]: !prev[key]
        }))
    }
    const isRequiredChecked = agreements.terms && agreements.privacy && agreements.age

    const isAllChecked = Object.values(agreements).every(Boolean)

    const isValidPassword = password.length >= 8 && password.length <= 16

    return (
        <section className="sign-up">
            <form className="signup-form">
                <ul className="signup-form-list">
                    <li>
                        <div className="login-label">이메일</div>
                        <input
                            className='signup-input'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ex) your@email.com"
                        ></input>
                    </li>
                    <li>
                        <div className="login-label">비밀번호</div>
                        <input
                            className='signup-input-password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="비밀번호"
                            onBlur={() => setTouched(true)}
                        />
                        {password && (
                            <div className={clsx('check-password', {
                                check: isValidPassword,
                                error: !isValidPassword
                            })}>
                                {isValidPassword 
                                ? '사용 가능한 비밀번호입니다.' 
                                : '비밀번호는 8~16자리로 입력해 주세요.'}
                            </div>
                        )}
                        <input
                            className='signup-input-password'
                            value={checkPassword}
                            onChange={(e) => setCheckPassword(e.target.value)}
                            type="password"
                            placeholder="비밀번호 확인"
                            onBlur={() => setTouched(true)}
                        />
                        {checkPassword && (
                            <div className={clsx('check-password', {
                                check: password === checkPassword,
                                error: password !== checkPassword
                            })}>
                                {password === checkPassword
                                ? '비밀번호가 일치합니다.'
                                : '비밀번호가 일치하지 않습니다.'}
                            </div>
                        )}
                    </li>
                    <li>
                        <div className="login-label name">이름</div>
                        <input
                            className='signup-input'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="이름(활동명)"
                        />
                    </li>
                    <li>
                        <div className="login-label">연락처</div>
                        <input
                            className='signup-input'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="ex) 010-0000-0000"
                        />
                    </li>
                </ul>
                <div className="agreements">
                    <p>
                        <input
                        type="checkbox"
                        id="ckall"
                        checked={isAllChecked}
                        onChange={(e) => handleAllCheck(e.target.checked)}
                        />
                        <label htmlFor="ckall">모두 동의합니다</label>
                    </p>

                    <ul>
                        <li>
                            <input
                                type="checkbox"
                                id="terms"
                                checked={agreements.terms}
                                onChange={() => handleCheck('terms')}
                            />
                            <label htmlFor="terms">
                                이용약관 동의<span>(필수)</span>
                            </label>
                            <a href="/stipulation" target="_blank">약관보기</a>
                        </li>

                        <li>
                            <input
                                type="checkbox"
                                id="privacy"
                                checked={agreements.privacy}
                                onChange={() => handleCheck('privacy')}
                            />
                            <label htmlFor="privacy">
                                개인정보 수집 및 이용 동의<span>(필수)</span>
                            </label>
                            <a href="/privacy" target="_blank">약관보기</a>
                        </li>

                        <li>
                            <input
                                type="checkbox"
                                id="age"
                                checked={agreements.age}
                                onChange={() => handleCheck('age')}
                            />
                            <label htmlFor="age">
                                본인은 만 14세 이상입니다<span>(필수)</span>
                            </label>
                        </li>

                        <li>
                            <input
                                type="checkbox"
                                id="marketing"
                                checked={agreements.marketing}
                                onChange={() => handleCheck('marketing')}
                            />
                            <label htmlFor="marketing">
                                마케팅 정보 수신 동의<span>(선택)</span>
                            </label>
                        </li>

                    </ul>
                </div>
                <button disabled={!isRequiredChecked} className="btn-submit">가입하기</button>
            </form>
        </section>
    )
}

