import clsx from 'clsx'
import './css/MyBook.css'

export default function MyBook() {
    const readingList = [
        {
            color: 'a',
            label: '채식주의자',
            author: '한강 · 창비',
            date: '2025.03.01 시작'
        },
        {
            color: 'b',
            label: '작별하지 않는다',
            author: '한강 · 문학동네',
            date: '2025.02.20 시작'
        },
        {
            color: 'c',
            label: '흰',
            author: '한강 · 문학동네',
            date: '2025.03.10 시작'
        },
    ]

    const doneList = [
        {
            color: 'd',
            label: '아몬드',
            author: '손원평 · 창비',
            stars: '★★★★☆',
            date: '2025.02.14'
        },
        {
            color: 'e',
            label: '82년생 김지영',
            author: '조남주 · 문학동네',
            stars: '★★★★★',
            date: '2025.01.22'
        },
        {
            color: 'f',
            label: '시선으로부터',
            author: '정세랑 · 문학동네',
            stars: '★★★★★',
            date: '2025.01.08'
        },
    ]

    return (
        <div className="my-book">
            <div className="section-label">읽는 중 · 3권</div>
            <div className='book-card-list'>
                {readingList.map((l) => (
                    <div className="book-card" key={l.label}>
                    <div className={clsx("book-cover-sm", l.color)}></div>
                    <div className="book-info">
                        <div className="book-label">{l.label}</div>
                        <div className="book-author">{l.author}</div>
                    </div>
                    <div className="book-status-badge badge-reading">읽는 중</div>
                    <div className="book-stars">— — — — —</div>
                    <div className="book-date">{l.date}</div>
                </div>
                ))}
            </div>
            <div className='book-card-list'>
                {doneList.map((l) => (
                    <div className="book-card" key={l.label}>
                    <div className={clsx("book-cover-sm", l.color)}></div>
                    <div className="book-info">
                        <div className="book-label">{l.label}</div>
                        <div className="book-author">{l.author}</div>
                    </div>
                    <div className="book-status-badge badge-done">완독</div>
                    <div className="book-stars">{l.stars}</div>
                    <div className="book-date">{l.date}</div>
                </div>
                ))}
            </div>
        </div>
    )
}