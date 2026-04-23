import clsx from 'clsx'
import './LibraryMyBook.css'
import type { Book } from '../../../types'
import EmptyState from '../../../components/EmptyState'
import SkeletonList from '../../../components/SkeletonList'


type SideTab = '전체 서재' | '읽는 중' | '읽은 책' | '읽고 싶어요' | '독서 캘린더' | '독서 통계' | '내 게시글' | '알림'
type Props = {
    bookList: Book[]
    onEdit: (book: Book) => void
    isLoading: boolean
    onFilter: SideTab
}


export default function LibraryMyBook({ bookList = [], onEdit, onFilter, isLoading }: Props ) {

    const readingBooks = bookList.filter(b => b.status === '읽는중')
    const doneBooks = bookList.filter(b => b.status === '완독')
    const wishBooks = bookList.filter(b => b.status === '희망')

    if(isLoading) return <SkeletonList/>

    return (
        filter(onFilter)
    )

    function filter(tab:SideTab) {
        if(tab === '읽는 중') {
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
                            <div className="book-date">{l.readingDate} 시작</div>
                        </div>
                        ))}
                    </div>
                </div>
            )
        }

        if(tab === '읽은 책') {
            return (
                <div className="my-book">
                    <div className="section-label">읽은 책 · {doneBooks.length}권</div>
                    <div className='book-card-list'>
                        {doneBooks.map((l) => (
                            <div className="book-card" key={l.label} onClick={() => onEdit(l)}>
                            <div className={clsx("book-cover-sm", l.color)}></div>
                            <div className="book-info">
                                <div className="book-label">{l.label}</div>
                                <div className="book-author">{l.author}</div>
                            </div>
                            <div className="book-status-badge badge-reading">{l.status}</div>
                            <div className="book-stars">— — — — —</div>
                            <div className="book-date">{l.readingDate} 시작</div>
                        </div>
                        ))}
                    </div>
                </div>
            )
        }

        if(tab === '읽고 싶어요') {
            return (
                <div className="my-book">
                    <div className="section-label">읽고 싶어요 · {wishBooks.length}권</div>
                    <div className='book-card-list'>
                        {wishBooks.map((l) => (
                            <div className="book-card" key={l.label} onClick={() => onEdit(l)}>
                            <div className={clsx("book-cover-sm", l.color)}></div>
                            <div className="book-info">
                                <div className="book-label">{l.label}</div>
                                <div className="book-author">{l.author}</div>
                            </div>
                            <div className="book-status-badge badge-reading">{l.status}</div>
                            <div className="book-stars">— — — — —</div>
                            <div className="book-date">{l.readingDate} 시작</div>
                        </div>
                        ))}
                    </div>
                </div>
            )
        }

        return (
            <div>
                {bookList.length === 0 && <EmptyState type='library'/>}
                {bookList.length > 0 && (
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
                                <div className="book-date">{l.readingDate} 시작</div>
                            </div>
                            ))}
                        </div>
                        <div className="section-label">읽은 책 · {doneBooks.length}권</div>
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
                        <div className="section-label">읽고 싶어요 · {wishBooks.length}권</div>
                        <div className='book-card-list'>
                            {wishBooks.map((l) => (
                                <div className="book-card" key={l.label} onClick={() => onEdit(l)}>
                                <div className={clsx("book-cover-sm", l.color)}></div>
                                <div className="book-info">
                                    <div className="book-label">{l.label}</div>
                                    <div className="book-author">{l.author}</div>
                                </div>
                                <div className="book-status-badge badge-reading">{l.status}</div>
                                <div className="book-stars">— — — — —</div>
                                <div className="book-date">읽고 싶어요!</div>
                            </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}