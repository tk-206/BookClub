import './css/Calendar.css'
import clsx from 'clsx'
import { useState } from 'react'

const today = new Date()


export default function Calendar() {
    const [year, setYear] = useState(today.getFullYear())
    const [month, setMonth] = useState(today.getMonth())
    const calendar = getCalendar(year, month)
    const dayHeader = ['일', '월', '화', '수', '목', '금', '토']
    

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
        {calendar.map((day, i) => (
            <div
            key={i}
            className={clsx('day', { dim: !day.current, today: day.today })}
            >
            {day.date}
            </div>
        ))}
        </div>
    </div>
)

function handlePrev() {
  setMonth((prev) => {
    if (prev === 0) {
      setYear((y) => y - 1)
      return 11
    }
    return prev - 1
  })
}

function handleNext() {
  setMonth((prev) => {
    if (prev === 11) {
      setYear((y) => y + 1)
      return 0
    }
    return prev + 1
  })
}
}

function getCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay()
  const lastDate = new Date(year, month + 1, 0).getDate()
  const prevLastDate = new Date(year, month, 0).getDate()
  

  const days = []

  // 1. 이전 달 채우기
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      date: prevLastDate - i,
      current: false,
    })
  }

  // 2. 현재 달
  for (let i = 1; i <= lastDate; i++) {
    const isToday = year === today.getFullYear() && month === today.getMonth() && i === today.getDate()
    days.push({
      date: i,
      current: true,
      today: isToday,
    })
  }

  // 3. 다음 달 채우기 (총 42칸 맞추기)
  const remaining = 42 - days.length
  for (let i = 1; i <= remaining; i++) {
    days.push({
      date: i,
      current: false,
    })
  }

  return days
}