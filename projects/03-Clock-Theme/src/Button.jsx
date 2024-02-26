import { useState } from 'react'

export function Button () {
  const [mode, setMode] = useState(false)

  const children = mode ? 'Light Mode' : 'Dark Mode'

  const handleClick = () => {
    setMode(!mode)

    if (mode === true) {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    } else {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
  }
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  )
}
