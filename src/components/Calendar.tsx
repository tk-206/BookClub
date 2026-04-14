import './css/Calendar.css'
import clsx from 'clsx'
import { useState, useMemo } from 'react'
import type { Book } from '../types'
import { data } from 'react-router-dom'

const today = new Date()

type Props = {
    bookList?: Book[]
}


export default function Calendar({ bookList = [] }:Props) {
    const [currentDate, setCurrentDate] = useState(new Date())
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const calendar = getCalendar(year, month)
    const dayHeader = ['일', '월', '화', '수', '목', '금', '토']

    const dataByDate = useMemo(() => {
      return bookList.reduce((acc, b) => {
        const date = b.readingDate || b.doneDate
        if (!date) return acc

        if (!acc[date]) acc[date] = []
        acc[date].push(b)

        return acc
      }, {} as Record<string, Book[]>)
    }, [bookList])

return (
    <div>
        <div className='cal-header'>
            <button onClick={() => handlePrev()}>‹</button>

            <div className="title">
            {year}년 {month + 1}월
            </div>

            <button onClick={() => handleNext()}>›</button>
        </div>
        <div className="calendar">
        {dayHeader.map((d) => (
            <div className='cal-day-header'>{d}</div>
        ))}
        {calendar.map((day, i) => {
          const books = dataByDate[day.fullDate] || []
          return (
            <div
            key={i}
            className={clsx('day', { dim: !day.current, today: day.today })}
            >
              <div>{day.date}</div>
              <div className="day-books">
                {books.length > 0 && books.map((b, idx) => (
                  <div key={idx} className="book-item">
                    <span className="dot"></span>
                    <span className="book-name">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
        </div>
    </div>
)

  function handlePrev() {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() - 1)
      return newDate
    })
  }

  function handleNext() {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + 1)
      return newDate
    })
  }
}

function getCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay()
  const lastDate = new Date(year, month + 1, 0).getDate()
  const prevLastDate = new Date(year, month, 0).getDate()
  

  const days = []

  // 1. 이전 달 채우기
  // 이전 달
  for (let i = firstDay - 1; i >= 0; i--) {
    const d = prevLastDate - i
    const prevMonth = month === 0 ? 11 : month - 1
    const prevYear = month === 0 ? year - 1 : year

    days.push({
      date: d,
      current: false,
      fullDate: formatDate(prevYear, prevMonth, d),
    })
  }

  // 2. 현재 달
  for (let i = 1; i <= lastDate; i++) {
    const isToday =
      year === today.getFullYear() &&
      month === today.getMonth() &&
      i === today.getDate()

    days.push({
      date: i,
      current: true,
      today: isToday,
      fullDate: formatDate(year, month, i), // ⭐ 추가
    })
  }

  // 3. 다음 달 채우기 (총 42칸 맞추기)
  const remaining = 42 - days.length
  // 다음 달
  for (let i = 1; i <= remaining; i++) {
    const nextMonth = month === 11 ? 0 : month + 1
    const nextYear = month === 11 ? year + 1 : year

    days.push({
      date: i,
      current: false,
      fullDate: formatDate(nextYear, nextMonth, i),
    })
  }
  

  return days
}

function formatDate(year: number, month: number, date: number) {
  const m = String(month + 1).padStart(2, '0')
  const d = String(date).padStart(2, '0')
  return `${year}.${m}.${d}`
}