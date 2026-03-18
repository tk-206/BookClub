import { NavLink } from 'react-router-dom'
import './css/Footer.css'

export default function Footer() {

    const columns = [
        { 
            title: '서비스',
            page: ["독서 기록", "독서 모임", "게시판", "행사 캘린더"],
        },
        { 
            title: '작가 & 출판사',
            page: ["작가 등록", "출판사 소개", "구인구직", "작가 채널"],
        },
        { 
            title: '정보',
            page: ["공지사항", "이용약관", "개인정보처리방침", "문의하기"],
        },
        
    ]
    return (
        <footer className='footer'>
            <div className="footer-brand">
                {/* 브랜드 */}
                <p className="footer-logo">
                    북<span>클럽</span>
                </p>
                <p className="footer-tagline">
                    책과 사람이 만나는 공간.<br />
                    독자, 작가, 출판사 모두를 위한<br />
                    문학 커뮤니티 플랫폼.
                </p>
            </div>
            <div className='footer-col'>
                {/* 링크 컬럼 */}
                {columns.map((col) => (
                    <div key={col.title} className='col-card'>
                        <h4>
                            {col.title}
                        </h4>
                        <ul>
                            {col.page.map((page) => (
                                <li key={page}>
                                    <NavLink to={page}>{page}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* 하단 */}
            <div className="footer-bottom">
                <span className="fotter-copy">© 2026 북클럽. All rights reserved.</span>
            </div>
        </footer>
    )
}