import clsx from 'clsx'
import './LibraryMyBook.css'
import { readingList, doneList } from '../../../data/mock/DummyData'

export default function LibraryMyBook() {

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