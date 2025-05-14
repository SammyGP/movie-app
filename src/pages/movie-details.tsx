import { useParams, Link } from 'react-router-dom'
import { Card, Button, Typography } from 'antd'
import { useMovieContext } from '../context/movie-context'

const { Title, Paragraph } = Typography

const MovieDetail = () => {
  const { id } = useParams()
  const { movies } = useMovieContext()

  const movie = movies.find((m) => m.imdbId === id)

  if (!movie) {
    return <div>Movie not found.</div>
  }

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto' }}>
      <Card
        cover={<img alt={movie.title} src={movie.poster} />}
        actions={[
          <Button key='back'>
            <Link to='/'>Back</Link>
          </Button>,
        ]}
      >
        <Title level={3}>{movie.title}</Title>
        <Paragraph>
          <strong>Year:</strong> {movie.year}
        </Paragraph>
        <Paragraph>
          <strong>Type:</strong> {movie.type}
        </Paragraph>
        <Paragraph>
          <strong>IMDb ID:</strong> {movie.imdbId}
        </Paragraph>
      </Card>
    </div>
  )
}

export default MovieDetail
