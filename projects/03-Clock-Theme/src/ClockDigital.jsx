import { useState, useEffect } from 'react'
import { timeNow } from './logic'

export function ClockDigital () {
  const [now, setNow] = useState(timeNow())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(timeNow())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <div className='now'>{now}</div>
    </>
  )
}
