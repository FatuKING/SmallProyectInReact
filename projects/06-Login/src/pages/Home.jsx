import { Img } from '../component/Img.jsx'
import { Login } from '../component/Login'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'

export function Home () {
  const { token } = useAuth()

  if (token !== null) {
    console.log(token)
    return <Navigate to='/protected' />
  }

  return (
    <>
      {console.log(token)}
      <main className='flex h-full bg-black'>
        <Img />
        <section className='h-full w-1/2 flex justify-center items-center relative'>

          <Login />

          <div className='absolute bottom-10 left-10'>
            <span className='text-gray-500'>¿No tenes cuenta? <Link to='/register' className='text-blue-700 font-semibold'>'Registrarse'</Link></span>
          </div>

        </section>

      </main>
    </>
  )
}
