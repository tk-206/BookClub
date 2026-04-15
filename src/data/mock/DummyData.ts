import type { Book, Post } from "../../types"

/* MyBook */
export const readingList: Book[] = [
    {
        color: 'a',
        label: '채식주의자',
        author: '한강 · 창비',
        readingDate: '2026.03.01',
        status: '읽는중',
        stars: 0,
    },
    {
        color: 'b',
        label: '작별하지 않는다',
        author: '한강 · 문학동네',
        readingDate: '2026.02.20',
        status: '읽는중',
        stars: 0,
    },
    {
        color: 'c',
        label: '흰',
        author: '한강 · 문학동네',
        readingDate: '2026.03.10',
        status: '읽는중',
        stars: 0,
    },
    {
        color: 'd',
        label: '아몬드',
        author: '손원평 · 창비',
        stars: 4,
        doneDate: '2026.02.14',
        status: '완독'
    },
    {
        color: 'e',
        label: '82년생 김지영',
        author: '조남주 · 문학동네',
        stars: 5,
        doneDate: '2026.01.22',
        status: '완독'
    },
    {
        color: 'f',
        label: '시선으로부터',
        author: '정세랑 · 문학동네',
        stars: 5,
        doneDate: '2026.01.08',
        status: '완독'
    },
    {
        color: 'f',
        label: '시선으로부터',
        author: '정세랑 · 문학동네',
        stars: 0,
        doneDate: '2026.01.08',
        status: '희망'
    },
]

/* Community */
export const boardList = [
    {title: '전체 글', icon: '📋'},
    {title: '독서 토론', icon: '💬'},
    {title: '책 리뷰', icon: '📖'},
    {title: '질문 · 추천', icon: '❓'},
    {title: '모임 모집', icon: '🤝'},
    {title: '정보 공유', icon: '📢'},
] as const

export const authorList = [
    {title: '작가 채널', icon: '✍️'},
    {title: '출판사 소식', icon: '🏢'},
    {title: '구인구직', icon: '💼'},
] as const

export const tagList = [
    '#한강', '#SF소설', '#에세이', '#북페어', '#추천도서', '#독서모임', '#신간', '#고전'
]

export const noticeList = [
    {title: '2025년 봄 북클럽 독서 챌린지 — 3월 한 달간 3권 읽기', admin: '관리자 · 2025.03.01'},
    {title: '커뮤니티 이용 규칙 및 작가 인증 절차 안내', admin: '관리자 · 2025.02.15'},
] as const

export const filterTabList = [
    '최신순', '인기순', '댓글순', '조회순'
] as const

export const postList: Post[] = [
    {
        id: 'post-1',
        category: '독서 토론',
        title: '이 책 해석 어떻게 생각하세요?',
        content: '저는 이렇게 느꼈는데...',
        isRead: false,

        author: {
            id: 1,
            name: '김태경',
            profileImage: '김',
            role: '독서가',
            email: 'dbdb@naver.com',
            createAt: '2025-02-02'
        },

        createdAt: '2025-03-01',

        stats: {
            like: 10,
            commentCount: 3,
            view: 120,
        },

        tags: ['#한강', '#에세이'],

        isSecret: false,

        comments: [
            {
                id: 'c1',
                author: {
                    id: 2,
                    name: '이수민',
                    profileImage: '이',
                    role: '독서가',
                    email: 'dbdb@naver.com',
                    createAt: '2025-02-02'
                },
                content: '저도 비슷하게 느꼈어요',
                createdAt: '2025-03-01',
                isSecret: false,

                replies: [
                    {
                        id: 'r1',
                        author: {
                            id: 1,
                            name: '김태경',
                            profileImage: '김',
                            role: '독서가',
                            email: 'dbdb@naver.com',
                            createAt: '2025-02-02'
                        },
                        content: '오 그렇군요!',
                        createdAt: '2025-03-01',
                        isSecret: false,
                    },
                ],
            },
        ],
    },
    {
        id: 'post-2',
        category: '책 리뷰',
        title: '요즘 또 무슨 책 읽으세요?',
        content: '저는 이거 읽어요...',
        isRead: true,

        author: {
            id: 2,
            name: '이수민',
            profileImage: '이',
            role: '독서가',
            email: 'dbdb@naver.com',
            createAt: '2025-02-02'
        },

        createdAt: '2025-03-01',

        stats: {
            like: 20,
            commentCount: 5,
            view: 320,
        },

        tags: ['#한강', '#소설'],

        isSecret: false,

        comments: [
            {
                id: 'c2',
                author: {
                    id: 2,
                    name: '이수민',
                    profileImage: '이',
                    role: '독서가',
                    email: 'dbdb@naver.com',
                    createAt: '2025-02-02'
                },
                content: '재밌더라구요',
                createdAt: '2025-03-01',
                isSecret: false,

                replies: [
                    {
                        id: 'r2',
                        author: {
                            id: 1,
                            name: '김태경',
                            profileImage: '김',
                            role: '독서가',
                            email: 'dbdb@naver.com',
                            createAt: '2025-02-02'
                        },
                        content: '오 그렇군요!',
                        createdAt: '2025-03-01',
                        isSecret: false,
                    },
                ],
            },
        ],
    },
]

export const hotPostList = [
    {
        title: '한강 노벨상 이후 한국 문화의 변화',
        like: 284,
    },
    {
        title: 'SF 입문 추천 도서 모음',
        like: 250,
    },
    {
        title: '4월 마포 독서모임 모집',
        like: 167,
    },
    {
        title: '2025 서울국제도서관 일정',
        like: 143,
    },
    {
        title: '민음사 편집자 채용 공고',
        like: 120,
    },
]

export const meetingList = [
    {name: '한강 작품 읽기 모임', stat: '서울 마포 · 12명'},
    {name: 'SF 독서 클럽', stat: '온라인 · 8명'},
    {name: '고전 문학 연구회', stat: '서울 종로 · 6명'},
]

export const festivalList = [
    {month: 'APR', day: '05', name: '한강 작가 낭독회', place: '📍 교보문고 광화문점'},
    {month: 'MAY', day: '14', name: '서울국제도서전', place: '📍 COEX · 5.14–18'},
    {month: 'MAY', day: '22', name: '정세랑 신작 출판 기념회', place: '📍 문학동네 카페'},
]

/* Home */
export const columns = [
    { 
        num: '01',
        emoji: '📚',
        title: '독서 기록 & 캘린더',
        desc: "읽은 책을 기록하고 캘린더로 한눈에 확인하세요. 로그인 후 나만의 서재를 만들어 독서 이력을 관리할 수 있습니다.",
    },
    { 
        num: '02',
        emoji: '💬',
        title: '모임 & 게시판',
        desc: "독서 모임을 만들거나 참여하세요. 정보 공유 게시판을 통해 독자들과 다양한 이야기를 나눌 수 있습니다.",        
    },
    { 
        num: '03',
        emoji: '🏢',
        title: '출판사 & 구인구직',
        desc: "출판사 정보를 소개하고 편집자, 번역가, 작가를 위한 구인구직 정보를 게재할 수 있습니다.",
    },
    { 
        num: '04',
        emoji: '✍️',
        title: '작가 전용 소통방',
        desc: "인증된 작가님들만의 공간에서 창작 이야기, 출판 경험, 고민을 자유롭게 나눌 수 있습니다.",
    },
    { 
        num: '05',
        emoji: '📣',
        title: '작가 ↔ 독자 채널',
        desc: "작가가 독자에게 직접 전하는 소통 공간. 신작 소식, 창작 비화, 작가의 생각을 가감 없이 공유합니다.",
    },
    { 
        num: '06',
        emoji: '🔔',
        title: '행사 알림 시스템',
        desc: "북페어, 사인회, 낭독회, 강연 등 작가와 출판사의 행사 정보를 실시간으로 받아보세요.",
    },
]

export const tabs = ['독서 기록', '모임 캘린더', '작가 채널', '게시판'] as const

export const dummyList = [
    {
        cover: '',
        title: '채식주의자',
        author: '한강 · 창비',
        stars: '★★★★★',
        date: '2025.03.01',
    },
    {
        cover: '',
        title: '아몬드',
        author: '손원평 · 창비 ',
        stars: '★★★★☆',
        date: '2025.02.14',
    },
    {
        cover: '',
        title: '82년생 김지영',
        author: '조남주 · 민음사 ',
        stars: '★★★★★',
        date: '2025.01.22',
    },
]

export const authorsList = [
    {
        color: 'a',
        emoji: '✍️',
        author: '한강',
        genre: '소설 · 시',
        follower: '팔로워 4.2k',
    },
    {
        color: 'b',
        emoji: '📖',
        author: '정세랑',
        genre: 'SF · 소설',
        follower: '팔로워 3.8k',
    },
    {
        color: 'c',
        emoji: '🖋️',
        author: '김영하',
        genre: '소설 · 에세이',
        follower: '팔로워 5.1k',
    },
    {
        color: 'd',
        emoji: '📝',
        author: '손원평',
        genre: '소설',
        follower: '팔로워 2.9k',
    },
    {
        color: 'e',
        emoji: '🌿',
        author: '최은영',
        genre: '단편소설',
        follower: '팔로워 2.1k',
    },
]

/* Publisher */
export const topPubList = [
    {
        icon: '📚',
        color: 'a',
        name: '민음사',
        genre: '소설 · 시 · 인문 · 에세이',
        tag: ['한국문학', '세계문학전집', '노벨문학상'],
        desc: '1966년 창립. 세계문학전집을 비롯해 국내 최고 수준의 문학 출판사. 한강, 김영하, 황석영 등 대표 작가들과 함께합니다.',
        book: '1200+',
        career: '58년',
        hiring: 2,
    },
    {
        icon: '🌿',
        color: 'b',
        name: '창비',
        genre: '소설 · 시 · 사회과학',
        tag: ['한국문학', '창작과비평', '어린이'],
        desc: '창작과비평사로 출발, 한국 문학의 산실. 채식주의자, 아몬드 등 굵직한 작품들을 세상에 내보낸 출판사입니다.',
        book: '980+',
        career: '55년',
        hiring: 0,
    },
    {
        icon: '🌸',
        color: 'c',
        name: '문학동네',
        genre: '소설 · 시 · 에세이',
        tag: ['현대문학', '한강', '정세랑'],
        desc: '1993년 설립 이후 한국 현대문학을 이끌어온 출판사. 작별하지 않는다, 시선으로부터 등 수상작들의 산실.',
        book: '850+',
        career: '31년',
        hiring: 1,
    },
]

export const pubList = [
    {
        icon: '✨',
        color: 'd',
        name: '은행나무',
        genre: '소설 · 시 · 에세이',
        date: '2000년 설립',
        book: '640+',
        hiring: 1,
    },
    {
        icon: '🔮',
        color: 'e',
        name: 'arte',
        genre: 'SF · 장르소설 · 판타지',
        date: '2016년 설립',
        book: '320+',
        hiring: 0,
    },
    {
        icon: '📜',
        color: 'f',
        name: '열린책들',
        genre: '세계문학 · 번역 · 인문',
        date: '1986년 설립',
        book: '1,100+',
        hiring: 0,
    },
    {
        icon: '🌊',
        color: 'g',
        name: '한겨레출판',
        genre: '사회과학 · 에세이 · 청소년',
        date: '2006년 설립',
        book: '480+',
        hiring: 2,
    },
    {
        icon: '🍀',
        color: 'h',
        name: '사계절',
        genre: '어린이 · 청소년 · 그림책',
        date: '1987년 설립',
        book: '750+',
        hiring: 0,
    },
]

export const dummyGenre = ['소설', '시', '에세이', '인문', '세계문학', '번역문학']
export const dummybook = [
    {
        title: '채식주의자',
        author: '한강'
    },
    {
        title: '검은 꽃',
        author: '김영하'
    },
    {
        title: '아버지의 해방일지',
        author: '정지아'
    },
    {
        title: '이방인',
        author: '알베르 카뮈'
    },
    {
        title: '파친코',
        author: '이민진'
    },
    {
        title: '설국',
        author: '가와바타 야스나리'
    },
    {
        title: '1984',
        author: '조지 오웰'
    },
    {
        title: '노인과 바다',
        author: '헤밍웨이'
    },
]

export const jobs = [
        {
            logo: '📚',
            title: '문학 편집자 (소설·에세이)',
            company: '민음사',
            location: '서울 강남구',
            tags: ['경력 2년 이상', '편집', '교정·교열'],
            type: '정규직',
            dday: 'D-12',
            hot: true
        },
        {
            title: '북 디자이너 (표지·내지)',
            company: '문학동네',
            location: '서울 파주',
            tags: ['경력 1년 이상', 'Illustrator'],
            type: '계약직',
            dday: 'D-28'
        },
        {
            title: '북 디자이너 (표지·내지)',
            company: '문학동네',
            location: '서울 파주',
            tags: ['경력 1년 이상', 'Illustrator'],
            type: '인턴',
            dday: 'D-28'
        },
    ]