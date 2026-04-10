import clsx from 'clsx'
import './LibraryMyBook.css'
import type { Book } from '../../../types'

type Props = {
    bookList: Book[]
    onEdit: (book: Book) => void
}

export default function LibraryMyBook({ bookList = [], onEdit }: Props ) {

    const readingBooks = bookList.filter(b => b.status === '읽는중')
    const doneBooks = bookList.filter(b => b.status === '완독')

    return (
        <div className="my-book">
            <div className="section-label">읽는 중 · {readingBooks.length}권</div>
            <div className='book-card-list'>
                {readingBooks.map((l) => (
                    <div className="book-card" key={l.label} onClick={() => onEdit(l)}>
                    <div className={clsx("book-cover-sm", l.color)}></div>
                    <div className="book-info">
                        <div className="book-label">{l.label}</div>
                        <div className="book-author">{l.author}</div>
                    </div>
                    <div className="book-status-badge badge-reading">{l.status}</div>
                    <div className="book-stars">— — — — —</div>
                    <div className="book-date">{l.readingDate}</div>
                </div>
                ))}
            </div>
            <div className="section-label">완독 · {doneBooks.length}권</div>
            <div className='book-card-list'>
                {doneBooks.map((l) => (
                    <div className="book-card" key={l.label} onClick={() => onEdit(l)}>
                    <div className={clsx("book-cover-sm", l.color)}></div>
                    <div className="book-info">
                        <div className="book-label">{l.label}</div>
                        <div className="book-author">{l.author}</div>
                    </div>
                    <div className="book-status-badge badge-done">{l.status}</div>
                    <div className="book-stars">
                        <div className="star-stars">
                            {[1,2,3,4,5].map((n) => (
                                <span
                                    key={n}
                                    className={n <= l.stars ? 'active' : ''}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="book-date">{l.doneDate}</div>
                </div>
                ))}
            </div>
        </div>
    )
}