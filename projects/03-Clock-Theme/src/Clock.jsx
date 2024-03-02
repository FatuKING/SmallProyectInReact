import { useState, useEffect } from 'react'
import { hourRotation, minuteRotation, secondRotation } from './logic'

export function Clock () {
  const [hour, setHour] = useState(hourRotation)
  const [minute, setMinute] = useState(minuteRotation)
  const [second, setSecond] = useState(secondRotation)

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const hours = now.getHours() % 12
      const minutes = now.getMinutes()
      const seconds = now.getSeconds()

      setHour(`rotate(${(hours + minutes / 60) * 30}deg)`)
      setMinute(`rotate(${minutes * 6}deg)`)
      setSecond(`rotate(${seconds * 6}deg)`)
    }

    const intervalId = setInterval(updateClock, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <div className='clock'>
        <div className='needle' style={{ transform: `translate(-50%, -100%) ${hour}` }} />
        <div className='needle' style={{ transform: `translate(-50%, -100%) ${minute}` }} />
        <div className='needle' style={{ transform: `translate(-50%, -100%) ${second}` }} />
        <div className='center-point' />
      </div>
    </>
  )
}
