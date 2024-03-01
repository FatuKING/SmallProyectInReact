import { useState, useEffect } from 'react'
import { hourRotation, minuteRotation, secondRotation } from './logic'

export function Clock () {
  const [hour, setHour] = useState(hourRotation)
  const [minute, setMinute] = useState(minuteRotation)
  const [second, setSecond] = useState(secondRotation)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecond(secondRotation)
    }, 1000)

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
