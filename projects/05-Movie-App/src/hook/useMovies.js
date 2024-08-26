import { SearchContext } from '@/context/search'
import { useEffect, useState, useRef, useContext } from 'react'

export function useMovies () {
  const [data, setData] = useState({ results: [] })
  const { search, setSearch } = useContext(SearchContext)
  console.log(search)
  const searchInput = useRef()

  const APIKEY = 'd44e9140617c8259e6b74ae4ddd42235'

  const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=1&language=es`

  const APISEARCH = `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=${APIKEY}&language=es&query=${search}`

  const handleQuery = (newQuery) => {
    setSearch(newQuery)
  }

  const handleSumit = (e) => {
    e.preventDefault()

    const searchMovie = searchInput.current.value

    setSearch(searchMovie)

    searchInput.current.value = ''
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (search === undefined || search === '') {
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
  }, [search])

  return { data, searchInput, handleQuery, handleSumit }
}
