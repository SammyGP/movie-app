import { mockMovies } from '../movies'
import type { Movie } from '../types'

/**
 * Simulates an api call to fetch the movie data
 */
export const fetchMovies = (): Promise<Movie[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockMovies)
    }, 500)
  })
}
