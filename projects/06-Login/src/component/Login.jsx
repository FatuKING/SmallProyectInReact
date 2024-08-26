export function Login () {
  return (
    <>
      <form className='h-full w-1/2 flex flex-col gap-5 justify-center items-center' action=''>
        <h1 className='inline-block text-center text-xl font-bold'>Iniciar Sesión</h1>

        <label className='group relative' htmlFor=''>
          <input className='bg-transparent p-2 border border-gray-500 w-80 rounded focus:border-blue-700 focus:outline-none' type='text' required placeholder='example@email.com' />
          <div class='absolute -top-3 left-2 bg-black px-1 text-gray-500 text-sm font-bold group-focus-within:text-blue-700'>Correo</div>
          <div className='absolute right-4 bottom-3'>
            <svg width='22px' height='22px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='#6B7280' stroke='#6B7280'><g id='SVGRepo_bgCarrier' stroke-width='0' /><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round' /><g id='SVGRepo_iconCarrier'> <title /> <g id='Complete'> <g id='mail'> <g> <polyline fill='none' points='4 8.2 12 14.1 20 8.2' stroke='#6B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' /> <rect fill='none' height='14' rx='2' ry='2' stroke='#6B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' width='18' x='3' y='6.5' /> </g> </g> </g> </g></svg>
          </div>
        </label>

        <label className='group relative' htmlFor=''>
          <input className='bg-transparent p-2 border border-gray-500 w-80 rounded focus:border-blue-700 focus:outline-none' type='password' required placeholder='*********' />
          <div class='absolute -top-3 left-2 bg-black px-1 text-gray-500 text-sm font-bold group-focus-within:text-blue-700'>Contraseña</div>
          <button className='absolute right-4 bottom-3'>
            <svg width='22px' height='22px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='#6B7280'><g id='SVGRepo_bgCarrier' stroke-width='0' /><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round' /><g id='SVGRepo_iconCarrier'> <path fill-rule='evenodd' clip-rule='evenodd' d='M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z' fill='#6B7280' /> <path fill-rule='evenodd' clip-rule='evenodd' d='M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z' fill='#6B7280' /> </g></svg>
          </button>
        </label>

        <button className='bg-blue-700 p-2 w-80'>Acceder</button>

        <span className='text-gray-500'>o resgistrate con </span>

        <div className='flex gap-4'>
          <button className='w-24 border border-gray-500 rounded pt-3 pb-3 flex justify-center'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' fill='url(#a)' height='20' width='20'><defs><linearGradient x1='50%' x2='50%' y1='97.078%' y2='0%' id='a'><stop offset='0%' stop-color='#0062E0' /><stop offset='100%' stop-color='#19AFFF' /></linearGradient></defs><path d='M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z' /><path fill='#FFF' d='m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z' /></svg></button>
          <button className='w-24 border border-gray-500 rounded pt-3 pb-3 flex justify-center'><svg width='20' height='20' viewBox='0 0 256 262' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid'><path d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027' fill='#4285F4' /><path d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1' fill='#34A853' /><path d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782' fill='#FBBC05' /><path d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251' fill='#EB4335' /></svg>
          </button>
          <button className='w-24 border border-gray-500 rounded pt-3 pb-3 flex justify-center'><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 814 1000'><path fill='#fff' d='M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z' /></svg></button>
        </div>

      </form>
    </>
  )
}
