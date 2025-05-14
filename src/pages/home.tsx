import { Row, Col, Spin, Typography } from 'antd'
import { useMovieContext } from '../context/movie-context'
import MovieCard from '../components/movie-card'
import SearchBar from '../components/search-bar'

const { Title } = Typography

const HomePage = () => {
  const { filteredMovies } = useMovieContext()

  return (
    <div style={{ padding: '2rem', maxWidth: 1200, margin: '0 auto' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Movie App
      </Title>

      <SearchBar />

      {!filteredMovies.length ? (
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Spin tip='Loading movies...' />
        </div>
      ) : (
        <Row gutter={[24, 24]} justify='center'>
          {filteredMovies.map((movie) => (
            <Col xs={24} sm={12} md={8} lg={6} key={movie.imdbId}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default HomePage
