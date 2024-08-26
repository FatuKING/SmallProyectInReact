import { Login } from './component/Login.jsx'
import { Img } from './component/Img.jsx'
import { useState } from 'react'
import { Register } from './component/Register.jsx'

function App () {
  const [isRegistered, setIsRegistered] = useState(true)

  const changeForm = () => {
    setIsRegistered(!isRegistered)
  }

  return (
    <>
      <main className='flex h-full bg-black'>
        <Img />
        <section className='h-full w-1/2 flex justify-center items-center relative'>

          {
          isRegistered ? <Login /> : <Register />
        }

          <div className='absolute bottom-10 left-10'>
            <span className='text-gray-500'>¿Ya tenes cuenta? <button className='text-blue-700 font-semibold' onClick={changeForm}>{isRegistered ? 'Registrarse' : 'Iniciar Sesión'}</button></span>
          </div>

        </section>

      </main>
    </>
  )
}

export default App
