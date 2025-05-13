import type { Movie } from '../types'

export const mockMovies: Movie[] = [
  {
    imdbId: 'tt0111161',
    title: 'The Shawshank Redemption',
    year: '1994',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmRhMC00ZDI2LWFmNTEtODM1ZGRkNzY3ZTlkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    type: 'movie',
  },
  {
    imdbId: 'tt0068646',
    title: 'The Godfather',
    year: '1972',
    poster:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmYtYTAwZi00ZjQ5LWFmNTEtODM1ZGRkNzY3ZTlkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    type: 'movie',
  },
  {
    imdbId: 'tt1375666',
    title: 'Inception',
    year: '2010',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxMF5BMl5BanBnXkFtZTcwODI5OTM0Mw@@._V1_SX300.jpg',
    type: 'movie',
  },
]
