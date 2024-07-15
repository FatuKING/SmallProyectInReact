import { Form } from './Form'
import { Movie } from './Movie'
import { PageSelect } from './PageSelect'

function App () {
  const data = 'Kid is an anonymous young man who ekes out a meager living in an underground fight club where, night after night, wearing a gorilla mask, he is beaten bloody by more popular fighters for cash. After years of suppressed rage, Kid discovers a way to infiltrate the enclave of the city’s sinister elite. As his childhood trauma boils over, his mysteriously scarred hands unleash an explosive campaign of retribution to settle the score with the men who took everything from him. '

  return (
    <>
      <Form />
      <main className='flex flex-col items-center justify-center bg-sky-900'>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7 pt-8 pb-8 w-4/5'>
          <Movie img='https://image.tmdb.org/t/p/w1280/zszRKfzjM5jltiq8rk6rasKVpUv.jpg' title='beverly hills cop: Axel F' description={data} point='9' />
          <Movie img='https://image.tmdb.org/t/p/w1280/zszRKfzjM5jltiq8rk6rasKVpUv.jpg' title='beverly hills cop: Axel F' description={data} point='9' />
          <Movie img='https://image.tmdb.org/t/p/w1280/zszRKfzjM5jltiq8rk6rasKVpUv.jpg' title='beverly hills cop: Axel F' description={data} point='9' />
          <Movie img='https://image.tmdb.org/t/p/w1280/zszRKfzjM5jltiq8rk6rasKVpUv.jpg' title='beverly hills cop: Axel F' description={data} point='9' />
          <Movie img='https://image.tmdb.org/t/p/w1280/zszRKfzjM5jltiq8rk6rasKVpUv.jpg' title='beverly hills cop: Axel F' description={data} point='9' />
          <Movie img='https://image.tmdb.org/t/p/w1280/zszRKfzjM5jltiq8rk6rasKVpUv.jpg' title='beverly hills cop: Axel F' description={data} point='9' />
          <Movie img='https://image.tmdb.org/t/p/w1280/zszRKfzjM5jltiq8rk6rasKVpUv.jpg' title='beverly hills cop: Axel F' description={data} point='9' />
          <Movie img='https://image.tmdb.org/t/p/w1280/zszRKfzjM5jltiq8rk6rasKVpUv.jpg' title='beverly hills cop: Axel F' description={data} point='9.2' />
        </section>
      </main>

      <PageSelect />
    </>
  )
}

export default App
