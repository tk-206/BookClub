export default function Footer() {

    const columns = [
        { 
            title: '서비스',
            links: ["독서 기록", "독서 모임", "게시판", "행사 캘린더"],
        },
        { 
            title: '작가 & 출판사',
            links: ["작가 등록", "출판사 소개", "구인구직", "작가 채널"],
        },
        { 
            title: '정보',
            links: ["공지사항", "이용약관", "개인정보처리방침", "문의하기"],
        },
        
    ]
    return (
        <footer className="bg-navy-dark">
            <div className="grid gird-cols-4 gap-12 px-10 py-12">
                {/* 브랜드 */}
                <div>
                    <p className="text-2xl font-serif text-muted mb-4">
                        북<span className="italic text-gold">클럽</span>
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                        책과 사람이 만나는 공간.<br />
                        독자, 작가, 출판사 모두를 위한<br />
                        문학 커뮤니티 플랫폼.
                    </p>
                </div>

                {/* 링크 컬럼 */}
                {columns.map((col) => (
                    <div key={col.title}>
                        <p className="text-xs tracking-widest text-gold uppercase mb-4">
                            {col.title}
                        </p>
                        <ul className="flex flex-col gap-2">
                            {col.links.map((link) => (
                                <li key={link}>
                                    <button className="text-sm text-muted hover:text-ivory/70 transition-colors">{link}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* 하단 */}
            <div className="flex justify-between px-10 py-4 border-t border-white/5">
                <span className="text-xs text-white/20">© 2026 북클럽. All rights reserved.</span>
            </div>
        </footer>
    )
}