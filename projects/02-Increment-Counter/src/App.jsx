import { Counter } from './Counter'

export default function App () {
  return (
    <>
      <main>
        <Counter icon='twitter' numberMax={12000} text='Twitter Followers' />
        <Counter icon='youtube' numberMax={15000} text='Youtube Subscribers' />
        <Counter icon='twitch' numberMax={7500} text='Twitch Subscribers' />
      </main>
    </>
  )
}
