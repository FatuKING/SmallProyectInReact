import { useState, useEffect } from 'react'

export function Counter ({ icon, numberMax, text }) {
  const nameIco = `bi bi-${icon}`

  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < numberMax) {
        setCount(count + 100)
      } else {
        clearInterval(interval)
      }

      return () => clearInterval(interval)
    }, 10)
  }, [count, numberMax])

  return (
    <>
      <div className='container'>
        <i className={nameIco} />
        <div className='followers'>{count}</div>
        <span>{text}</span>
      </div>
    </>
  )
}
