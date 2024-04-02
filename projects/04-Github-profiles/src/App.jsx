import { useEffect, useState } from 'react'
import { Perfile } from './Perfile'

function App () {
  const [userName, setUserName] = useState('')
  const [showPerfile, setShowPerfile] = useState(false)

  useEffect(() => {
    const formSubmitHandler = (e) => {
      e.preventDefault()

      const name = search.value

      if (name) {
        setUserName(name)
        setShowPerfile(true)
        search.value = ''
      }
    }

    const search = document.getElementById('search')
    const form = document.getElementById('form')

    form.addEventListener('submit', formSubmitHandler)

    return () => {
      form.removeEventListener('submit', formSubmitHandler)
    }
  }, [])

  return (
    <>
      <form id='form' className='flex justify-center w-full'>
        <input id='search' className='w-1/2 p-4 bg-violet-900 rounded-lg text-lg focus:outline-none' type='text' placeholder='Search a Github User' />
      </form>

      {
        showPerfile ? <Perfile userName={userName} /> : null
      }
    </>
  )
}

export default App
