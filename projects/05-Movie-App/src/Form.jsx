import { useMovies } from './hook/useMovies'

export function Form () {
  const { searchInput, handleSumit } = useMovies()
  return (
    <>
      <header className='flex justify-center items-center h-20 w-full bg-gray-800'>
        <form id='form' className='rounded' onSubmit={handleSumit}>
          <input ref={searchInput} className='w-96 p-2 shadow shadow-black rounded bg-gray-800 focus:outline-none border border-gray-950 focus:placeholder:text-gray-800 text-white placeholder:text-white' type='text' placeholder='Star Wars, Harry Potter, Marvel ...' />
        </form>
      </header>
    </>
  )
}
