import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Movie } from '../types'
import { mockMovies } from '../movies'
import { fetchMovies } from '../api/get-movies'

const MovieContext = createContext<MovieContextType | undefined>(undefined)

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>(mockMovies)
  const [favorites, setFavorites] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  // handles fetching the movies
  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies()
      setMovies(data)
    }
    loadMovies()
  }, [])

  // handles getting user favorites
  useEffect(() => {
    const stored = localStorage.getItem('favorites')
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  // updates favorites
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (id: string) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id])
    }
  }

  const removeFromFavorites = (id: string) => {
    setFavorites(favorites.filter((fav) => fav !== id))
  }

  const isFavorite = (id: string) => favorites.includes(id)

  const filteredMovies = movies.filter((m) => m.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <MovieContext.Provider
      value={{
        movies,
        filteredMovies,
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        setSearchTerm,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export const useMovieContext = () => {
  const context = useContext(MovieContext)
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider')
  }
  return context
}

interface MovieContextType {
  movies: Movie[]
  filteredMovies: Movie[]
  favorites: string[]
  addToFavorites: (id: string) => void
  removeFromFavorites: (id: string) => void
  isFavorite: (id: string) => boolean
  setSearchTerm: (term: string) => void
}
