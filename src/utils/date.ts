export const formatTimeAgo = (
    dataString: string
) => {
    const now = new Date()
    const date = new Date(dataString)

    const diff = now.getTime() - date.getTime()

    const minutes = Math.floor(diff / 1000 / 60)
    const hours = Math.floor(diff / 1000 / 60 / 60)
    const days = Math.floor(diff / 1000 / 60 / 60 / 24)

    if(minutes < 1) return '방금 전'

    if(minutes < 60) return `${minutes}분 전`

    if(hours < 24) return `${hours}시간 전`
    
    if(days < 7) return `${days}일 전`

    const year = date.getFullYear()

    const month = String(
        date.getMonth() + 1
    ).padStart(2,'0')

    const day = String(
        date.getDate()
    ).padStart(2,'0')

    return `${year}.${month}.${day}`
}