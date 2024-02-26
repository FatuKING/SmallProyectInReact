import { useState, useEffect } from 'react'
import { hours, minutes, seconds, dates, months, days } from './logic'

export function Clock () {
  const [hour, setHour] = useState(hours)

  const time = `${hours} : ${minutes} : ${seconds}`

  const date = `${days} : ${months} : ${dates}`
  return (
    <>
      <div className='clock'>
        <div className='needle hour' />
        <div className='needle minute' />
        <div className='needle second' />
        <div className='center-point' />
      </div>
      <div>{time} </div>
      <span>{date}</span>
    </>
  )
}
