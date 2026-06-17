import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBook, deleteBook, updateBook, type Book } from "../../types"
import { bookKeys } from "./queryKeys"



export default function useBookMutations(userId:string) {
    const queryClient = useQueryClient()

    const queryKey = bookKeys.list(userId)

    const saveMutation = useMutation({
        mutationFn: (book: Omit<Book, "id" | "userId">) =>
          createBook(book, userId),
        onSuccess: (newBook) => {
          queryClient.setQueryData<Book[]>([queryKey], (old = []) => [
            ...old,
            newBook,
          ])
        },
    })

    const updateMutation = useMutation({
        mutationFn: (data: { id: string; book: Book }) =>
            updateBook(data.id, data.book, userId),
        onSuccess: (updatedBook) => {
            queryClient.setQueryData<Book[]>([queryKey], (old = []) =>
            old.map((b) => (b.id === updatedBook.id ? updatedBook : b))
            )
        },
    })

    /* const deleteMutaion = useMutation({
        mutationFn: (id: number) => deleteBook(id, user.id),
        onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['books', user.id] })
        onClose()
        },
    }) */
    // 삭제: 캐시에서 해당 책 제거 (서버 재요청 없음)
    const deleteMutation = useMutation({
        mutationFn: (id: string) => deleteBook(id, userId),
        onSuccess: (_, id) => {
            queryClient.setQueryData<Book[]>([queryKey], (old = []) =>
            old.filter((b) => b.id !== id)
            )
        },
    })

    return {
        saveMutation,
        updateMutation,
        deleteMutation
    }
}