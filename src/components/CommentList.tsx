import { useQuery } from "@tanstack/react-query"
import { fetchComments, type CommentType } from "../types"
import CommentItem from "./CommentItem"

type Props = {
    postId: string,
    postUserId: string,
}

export default function CommentList({postId, postUserId}: Props) {

    const { data: comments = [] } = useQuery({
        queryKey: ['comments', postId],
        queryFn: () => fetchComments(postId)
    })

    const parentComments =
        comments?.filter(
        c => c.parentId === null
    ) ?? []

    const repliesMap = comments.reduce(
        (acc, comment) => {
            if (!comment.parentId) return acc

            if (!acc[comment.parentId]) {
            acc[comment.parentId] = []
            }

            acc[comment.parentId].push(comment)

            return acc
        },
        {} as Record<string, CommentType[]>
    )

    return (
        <section>
            {parentComments?.map((c) => (
                <CommentItem key={c.id} comment={c} postId={postId} postAuthorId={postUserId} replies={repliesMap[c.id] ?? []}/>
            ))}
        </section>
    )
}