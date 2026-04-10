export interface Book {
    color: string,
    label: string,
    author: string,
    readingDate?: string,
    stars: number,
    doneDate?: string,
    status: '읽는중' | '완독' | '희망'
    createAt?: string,
    review?: string,
    publisher?: string,
}