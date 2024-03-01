import { useState } from 'react'
import { Button } from './Button'
import { Clock } from './Clock'
import { ClockDigital } from './ClockDigital'
import { date } from './logic'

function App () {
  const [digital, setDigital] = useState(false)

  const clockDigital = () => {
    setDigital(true)
  }

  const clock = () => {
    setDigital(false)
  }

  return (
    <>
      <Button />
      {
        digital ? <ClockDigital /> : <Clock />
      }
      <span className='date'>{date}</span>
      <div className='switchClock'>
        <button onClick={clockDigital}>Reloj Analogico</button>
        <button onClick={clock}>Reloj Digital</button>
      </div>
    </>
  )
}

export default App
