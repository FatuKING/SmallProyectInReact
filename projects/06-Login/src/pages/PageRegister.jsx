import { Img } from '../component/Img.jsx'
import { Register } from '../component/Register.jsx'
import { Link } from 'react-router-dom'

export function PageRegister () {
  return (
    <>
      <main className='flex h-full bg-black'>
        <Img />
        <section className='h-full w-1/2 flex justify-center items-center relative'>

          <Register />

          <div className='absolute bottom-10 left-10'>
            <span className='text-gray-500'>¿Ya tenes cuenta? <Link to='/' className='text-blue-700 font-semibold'>'Iniciar Sesión'</Link></span>
          </div>

        </section>

      </main>
    </>
  )
}
