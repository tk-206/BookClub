import { authorsList } from "../../../data/mock/DummyData"
import clsx from "clsx"

export default function HomeAuthors() {
    return (
        <section className='home-authors'>
            <div className='authors-header'>
                <div className='authors-title'>AUTHORS</div>
                <h2 className='authors-title_desc'>함께하는 <em>작가들</em></h2>
            </div>
            <div className='authors-list'>
                {authorsList.map((l) => (
                    <div key={l.author} className='author-item'>
                        <div className={clsx('author-avatar', l.color)}>{l.emoji}</div>
                        <div className='author-name'>{l.author}</div>
                        <div className='author-genre'>{l.genre}</div>
                        <div className='author-follower'>{l.follower}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}