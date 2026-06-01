import { useQuery } from "@tanstack/react-query"
import { fetchComments } from "../types"
import CommentItem from "./CommentItem"

type Props = {
    postId: string,
}

export default function CommentList({postId}: Props) {

    const { data: comments } = useQuery({
        queryKey: ['comments', postId],
        queryFn: () => fetchComments(postId)
    })

    return (
        <section>
            {comments?.map((c) => (
                <CommentItem key={c.id} comment={c} postId={postId}/>
            ))}
        </section>
    )
}