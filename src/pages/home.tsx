import { Row, Col, Spin } from 'antd'
import { useMovieContext } from '../context/movie-context'
import MovieCard from '../components/movie-card'
import SearchBar from '../components/search-bar'

const HomePage = () => {
  const { filteredMovies } = useMovieContext()

  if (!filteredMovies.length) return <Spin tip='Loading movies...' />

  return (
    <>
      <SearchBar />
      <Row gutter={[16, 16]} justify='center'>
        {filteredMovies.map((movie) => (
          <Col xs={24} sm={12} md={8} lg={6} key={movie.imdbId}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomePage
