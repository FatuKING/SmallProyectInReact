import { useEffect, useState } from 'react'

export const Perfile = ({ userName }) => {
  const [user, setUser] = useState('')
  const [userData, setUserData] = useState({})
  const [repos, setRepos] = useState([])

  useEffect(() => {
    setUser(userName)
  }, [userName])

  useEffect(() => {
    const ENDPOINT_GITHUB = `https://api.github.com/users/${user}`

    const fetchData = async () => {
      try {
        const response = await fetch(ENDPOINT_GITHUB)
        const json = await response.json()
        setUserData(json)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [user])

  useEffect(() => {
    const ENDPOINT_GITHUB_REPOS = `https://api.github.com/users/${user}/repos`

    const fetchRepos = async () => {
      try {
        const response = await fetch(ENDPOINT_GITHUB_REPOS)
        const json = await response.json()
        setRepos(json)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchRepos()
  }, [user])

  return (
    <>
      <section className='bg-violet-900 w-1/2 h-80 items-center flex justify-center gap-10 rounded-2xl'>
        <figure className='w-40 h-40'>
          <img className='w-full h-full rounded-full border-8 border-blue-950' src={userData.avatar_url} alt={`Imagen de perfil de ${user}`} />
        </figure>

        <article className='flex flex-col gap-5 w-96'>
          <h1 className='text-2xl font-bold'>{userData.name}</h1>
          <p className='text-lg'>{userData.bio}</p>
          <div className='flex gap-5'>
            <span className='font-bold'>{userData.followers} Followers</span>
            <span className='font-bold'>{userData.following} Following</span>
            <span className='font-bold'>{userData.public_repos} Repos</span>
          </div>

          <div className='flex gap-2 flex-wrap'>
            {
            Array.isArray(repos)
              ? repos.slice(0, 4).map((repo, index) => (
                <span key={index} className='bg-blue-950 p-1 pl-2 pr-2 rounded-md text-sm'>{repo.name}</span>
              ))
              : null
        }
          </div>
        </article>
      </section>
    </>
  )
}
