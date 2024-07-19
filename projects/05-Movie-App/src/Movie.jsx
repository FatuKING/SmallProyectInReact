export function Movie ({ img, title, point, description }) {
  const pathImg = `https://image.tmdb.org/t/p/w1280${img}`

  const colorPoint = (point) => {
    if (point <= 4) {
      return 'text-red-500'
    } else if (point <= 6.9) {
      return 'text-orange-500'
    } else {
      return 'text-emerald-500'
    }
  }

  return (
    <>
      <section className='group flex flex-col relative shadow-2xl'>
        <figure className=''>
          <img className='object-cover' src={pathImg} alt={title} />
        </figure>

        <article className='flex justify-between items-center p-4 bg-sky-950 h-20'>
          <h1 className='text-lg font-semibold uppercase font-poppins w-4/5 text-white'>{title}</h1>

          <span className={`text-xl ${colorPoint(point)}`}>{point}</span>
        </article>

        <article className='expand hidden group-hover:block absolute bottom-0 w-full p-4 bg-white text-black'>
          <h1 className='font-semibold font-poppins'>Descripción</h1>

          <div className='pt-4'>
            <p className='overflow-y-auto max-h-44 pr-2 font-poppins'>{description}</p>
          </div>
        </article>
      </section>
    </>
  )
}
