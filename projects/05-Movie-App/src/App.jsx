import { Form } from './Form'
import { Movie } from './Movie'
import { PageSelect } from './PageSelect'
import { useMovies } from './hook/useMovies'

function App () {
  const { data } = useMovies()

  return (
    <>
      <Form />
      <main className='flex flex-col items-center justify-center bg-gray-800'>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7 pt-8 pb-8 w-4/5'>
          {
            data.results.map((movie, index) => {
              return (
                <Movie key={index} img={movie.poster_path} title={movie.original_title} description={movie.overview} point={movie.vote_average.toFixed(1)} />
              )
            })
          }
        </section>
      </main>

      <PageSelect />
    </>
  )
}

export default App
