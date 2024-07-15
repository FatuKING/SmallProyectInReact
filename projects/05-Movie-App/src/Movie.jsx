export function Movie ({ img, title, point, description }) {
  return (
    <>
      <section className='group flex flex-col relative shadow-2xl'>
        <figure className=''>
          <img className='object-cover' src={img} alt={title} />
        </figure>

        <article className='flex justify-between items-center p-4 bg-sky-950 h-20'>
          <h1 className='text-lg font-semibold uppercase font-poppins w-4/5 text-white'>{title}</h1>

          <span className='text-x text-orange-300'>{point}</span>
        </article>

        <article className='expand hidden group-hover:block absolute bottom-0 w-full p-4 bg-white text-black'>
          <h1 className='font-semibold font-poppins'>Descripcion</h1>

          <div className='pt-4'>
            <p className='overflow-y-auto max-h-44 pr-2 font-poppins'>{description}</p>
          </div>
        </article>
      </section>
    </>
  )
}
