import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'

export function Protected () {
  const { token, user, logout } = useAuth()

  if (token === null) {
    return <Navigate to='/' />
  }

  return (
    <>
      <main className='flex h-full bg-green'>
        <section className='flex flex-col gap-6 justify-center items-center w-full'>
          <h1 className='text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-green-600 text-4xl font-bold'>Bienvenido, Gracias por registrarse {user}.</h1>
          <button onClick={logout} className='bg-white rounded text-black p-2'>Cerrar Sesión</button>
        </section>
      </main>
    </>
  )
}
