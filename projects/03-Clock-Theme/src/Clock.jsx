import { useState, useEffect } from 'react'
import { timeNow, date } from './logic'

export function Clock () {
  const [now, setNow] = useState(timeNow())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(timeNow())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <div className='clock'>
        <div className='needle hour' />
        <div className='needle minute' />
        <div className='needle second' />
        <div className='center-point' />
      </div>
      <div className='now'>{now}</div>
      <span className='date'>{date}</span>
    </>
  )
}
