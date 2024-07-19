import { useEffect, useState, useRef } from 'react'

export function useMovies () {
  const [data, setData] = useState({ results: [] })
  const [query, setQuery] = useState()
  const search = useRef()

  const APIKEY = 'd44e9140617c8259e6b74ae4ddd42235'

  const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=1&language=es`

  const APISEARCH = `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=${APIKEY}&language=es&query=${query}`

  const handleQuery = (newQuery) => {
    setQuery(newQuery)
  }

  const handleSumit = (e) => {
    e.preventDefault()

    const searchMovie = search.current.value

    setQuery(searchMovie)

    search.current.value = ''

    return searchMovie
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query === undefined || query === '') {
          const response = await fetch(APIURL)
          const result = await response.json()
          setData(result)
        } else {
          const response = await fetch(APISEARCH)
          const result = await response.json()
          setData(result)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [query])

  return { data, search, handleQuery, handleSumit }
}
