export function Form ({ search, handleSumit }) {
  return (
    <>
      <header className='flex justify-center items-center h-20 w-full bg-sky-900'>
        <form id='form' className='' onSubmit={handleSumit}>
          <input ref={search} className='w-72 p-2 rounded bg-sky-950 focus:outline-none border border-sky-800 focus:scale-105 text-white' type='text' placeholder='Star Wars, Harry Potter, Marvel ...' />
        </form>
      </header>
    </>
  )
}
