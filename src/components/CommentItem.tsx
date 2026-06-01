import { useMe } from "../hooks/useMe"
import type { CommentType } from "../types"

type Props = {
    comment: CommentType,
    postId: string
}

export default function CommentItem({comment, postId}:Props) {
    const { data: me } = useMe()

    const isMine = me?.id === comment.userId
    const isAuthor = comment.userId === postId

    const canSeeSecret =
        !comment.isSecret ||
        isMine ||
        isAuthor

    if (!canSeeSecret) {
        return (
            <div className='comment-item'>
                <div className='secret-bubble'>
                    🔒 비밀 댓글입니다.
                </div>
            </div>
        )
    }

    return (
        <section>
            <div className='comment-item'>
                <div className='comment-bubble'>
                    <div className='comment-author'>김하늘</div>
                    <div className='comment-text'>2부에서 형부의 시선에 대한 분석이 정말 인상적이에요. 저도 이번에 다시 읽으면서 '예술'이라는 이름 아래 이뤄지는 착취의 구조가 선명하게 보였어요.</div>
                    <div className='comment-footer'>
                        <span className='comment-date'>30분 전</span>
                        <button className='comment-action'>❤️ 5</button>
                        <button className='comment-action'>↩ 답글</button>
                    </div>
                </div>
            </div>
            <div className='comment-item mine'>
                <div className='comment-bubble'>
                    <div className='comment-author'>박소담 <span>작성자</span></div>
                    <div className='comment-text'>맞아요. 그래서 3부에서 인혜의 시선이 더 아프게 읽혀요. 영혜를 구하려 하지만, '정상적인 삶'의 논리를 놓지 못하는 모순 속에 있잖아요.</div>
                    <div className='comment-footer'>
                        <span className='comment-date'>22분 전</span>
                        <button className='comment-action'>❤️ 3</button>
                        <button className='comment-action'>↩ 답글</button>
                    </div>
                </div>
            </div>
            <div className='comment-item'>
                <div className='comment-av s'>?</div>
                <div className='secret-bubble'>🔒 비밀 댓글입니다. 작성자만 볼 수 있어요.</div>
            </div>
        </section>
    )
}