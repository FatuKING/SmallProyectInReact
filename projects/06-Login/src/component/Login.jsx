import { useAuth } from '../hooks/useAuth'

export function Login () {
  const { handleLogin } = useAuth()

  return (
    <>
      <form className='h-full w-1/2 flex flex-col gap-5 justify-center items-center' onSubmit={handleLogin}>
        <h1 className='inline-block text-center text-xl font-bold'>Iniciar Sesión</h1>

        <label className='group relative' htmlFor=''>
          <input className='bg-transparent p-2 border border-gray-500 w-80 rounded focus:border-blue-700 focus:outline-none' name='Email' type='text' required placeholder='example@email.com' />
          <div className='absolute -top-3 left-2 bg-black px-1 text-gray-500 text-sm font-bold group-focus-within:text-blue-700'>Correo</div>
          <div className='absolute right-4 bottom-3'>
            <svg width='22px' height='22px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='#6B7280' stroke='#6B7280'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <title /> <g id='Complete'> <g id='mail'> <g> <polyline fill='none' points='4 8.2 12 14.1 20 8.2' stroke='#6B7280' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' /> <rect fill='none' height='14' rx='2' ry='2' stroke='#6B7280' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' width='18' x='3' y='6.5' /> </g> </g> </g> </g></svg>
          </div>
        </label>

        <label className='group relative' htmlFor=''>
          <input className='bg-transparent p-2 border border-gray-500 w-80 rounded focus:border-blue-700 focus:outline-none' name='Password' type='password' required placeholder='*********' />
          <div className='absolute -top-3 left-2 bg-black px-1 text-gray-500 text-sm font-bold group-focus-within:text-blue-700'>Contraseña</div>
          <button className='absolute right-4 bottom-3'>
            <svg width='22px' height='22px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='#6B7280'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <path fillRule='evenodd' clipRule='evenodd' d='M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z' fill='#6B7280' /> <path fillRule='evenodd' clipRule='evenodd' d='M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z' fill='#6B7280' /> </g></svg>
          </button>
        </label>

        <button className='bg-blue-700 p-2 w-80'>Acceder</button>

      </form>
    </>
  )
}
