const BASE_URL = 'http://localhost:3001'    

export interface Book {
    id: number,
    color: string,
    label: string,
    author: string,
    readingDate?: string,
    stars: number | 0,
    doneDate?: string,
    status?: '읽는중' | '완독' | '희망'
    createAt?: string,
    review?: string,
    publisher?: string,
}

export const fetchBooks = async (): Promise<Book[]> => {
    const res = await fetch(`${BASE_URL}/books`)
    if (!res.ok) throw new Error("데이터 불러오기 실패")
    return res.json()
}

export const createBook = async (book: Omit<Book, "id">) => {
    const res = await fetch(`${BASE_URL}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
    })
    return res.json()
}


export const deleteBook = async (id: number) => {
  await fetch(`${BASE_URL}/books/${id}`, {
    method: 'DELETE',
  })
}