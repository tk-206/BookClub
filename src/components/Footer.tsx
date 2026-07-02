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
        <footer className="bg-[#0F1A30]">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 px-[5%] py-12">
                <div className="mb-8">
                    {/* 브랜드 */}
                    <p className="font-['Playfair_Display'] text-navy text-xl -tracking-[0.02em] mb-4 block">
                        북<span className="text-gold italic">클럽</span>
                    </p>
                    <p className="font-sans text-[0.78rem] text-white/35 leading-[1.8] font-light">
                        책과 사람이 만나는 공간.<br />
                        독자, 작가, 출판사 모두를 위한<br />
                        문학 커뮤니티 플랫폼.
                    </p>
                </div>
                
                {/* 링크 컬럼 */}
                {columns.map((col) => (
                    <div key={col.title}>
                        <div className="mb-8">
                            <h4 className="font-sans text-[0.75rem] tracking-[0.15em] uppercase text-gold mb-5">
                                {col.title}
                            </h4>
                            <ul className="flex flex-col gap-2.5 list-none">
                                {col.page.map((page) => (
                                    <li key={page}>
                                        <NavLink to={page}>{page}</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* 하단 */}
            <div className="flex justify-between items-center bg-[#0F1A30] px-[5%] py-6 border-t border-white/5">
                <span className="font-sans text-[0.72rem] text-white/20">© 2026 북클럽. All rights reserved.</span>
            </div>
        </footer>
        
    )
}