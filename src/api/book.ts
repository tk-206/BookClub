const BASE_URL = 'http://localhost:3001'    

export interface Book {
    id: string,
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
    userId?: string
}

export const fetchBooks = async (userId: string): Promise<Book[]> => {
    const res = await fetch(`${BASE_URL}/books?userId=${userId}`,)
    if (!res.ok) throw new Error("데이터 불러오기 실패")
    return res.json()
}

export const createBook = async (book: Omit<Book, "id" | "userId">, userId: string) => {
    const res = await fetch(`${BASE_URL}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...book,
          userId,
        }),
    })
    return res.json()
}

export const updateBook = async (
  id: string,
  updatedData: Partial<Book>,
  userId: string
) => {
  const check = await fetch(`${BASE_URL}/books/${id}`)
  const book = await check.json()

  if (book.userId !== userId) {
    throw new Error('권한 없음')
  }

  const res = await fetch(`${BASE_URL}/books/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  })

  if (!res.ok) throw new Error('수정 실패')
  return res.json()
}


export const deleteBook = async (id: string, userId: string) => {
  const check = await fetch(`${BASE_URL}/books/${id}`)
  const book = await check.json()

  if (book.userId !== userId) {
    throw new Error('권한 없음')
  }

  await fetch(`${BASE_URL}/books/${id}`, {
    method: 'DELETE',
  })
}