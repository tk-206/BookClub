import type { CommentType } from "../types"
import ReplyItem from "./ReplyItem"

type Props = {
    replyList: CommentType[],
    postAuthorId: string,
    postId: string,
    isParentAuthor: boolean
}

export default function ReplyList({ replyList, postAuthorId, postId, isParentAuthor }: Props) {
    return (
        <section>
            {replyList?.map((r) => (
                <ReplyItem key={r.id} reply={r} postAuthorId={postAuthorId} postId={postId} isParentAuthor={isParentAuthor} />
            ))}
        </section>
    )
}