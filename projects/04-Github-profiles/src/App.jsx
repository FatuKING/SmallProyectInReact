import { useEffect, useState, useRef } from 'react'
import { Perfile } from './Perfile'

function App () {
  const [userName, setUserName] = useState('')
  const [showPerfile, setShowPerfile] = useState(false)
  const search = useRef()

  const formSubmitHandler = (e) => {
      e.preventDefault()

      const name = search.current.value

      if (name) {
        setUserName(name)
        setShowPerfile(true)
        search.current.value = ''
      }
    }


  return (
    <>
      <form id='form' onSubmit={formSubmitHandler} className='flex justify-center w-full'>
        <input ref={search} className='w-1/2 p-4 bg-violet-900 rounded-lg text-lg focus:outline-none' type='text' placeholder='Search a Github User' />
      </form>

      {
        showPerfile ? <Perfile userName={userName} /> : null
      }
    </>
  )
}

export default App
