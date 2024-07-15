import { useRef } from 'react'

export function Form () {
  const inputRef = useRef()

  // useEffect(() => {
  //   const formSubmitHandler = (e) => {
  //     e.preventDefault()

  //     const name = inputRef.current.value

  //     if (name) {
  //       setUserName(name)
  //       console.log(name)
  //       inputRef.current.current.value = ''
  //     }
  //   }

  //   const form = document.getElementById('form')

  //   form.addEventListener('submit', formSubmitHandler)

  //   return () => {
  //     form.removeEventListener('submit', formSubmitHandler)
  //   }
  // }, [])

  const handleSumit = (e) => {
    e.preventDefault()

    const peli = inputRef.current.value

    console.log(peli)
  }

  return (
    <>
      <header className='flex justify-center items-center h-20 w-full bg-sky-900'>
        <form id='form' onSubmit={handleSumit}>
          <input ref={inputRef} className='w-72 p-2 rounded bg-sky-950' type='text' placeholder='Star Wars, Harry Potter, Marvel ...' />
        </form>
      </header>
    </>
  )
}
