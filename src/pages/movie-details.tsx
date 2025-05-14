import { useParams, Link } from 'react-router-dom'
import { Card, Button, Typography, Rate } from 'antd'
import { useMovieContext } from '../context/movie-context'

const { Title, Paragraph, Text } = Typography

const MovieDetail = () => {
  const { id } = useParams()
  const { movies } = useMovieContext()

  const movie = movies.find((m) => m.imdbId === id)

  if (!movie) {
    return <div>Movie not found.</div>
  }

  return (
    <div style={{ maxWidth: 700, margin: '2rem auto', padding: '1rem' }}>
      <Card
        cover={
          <img alt={movie.title} src={movie.poster} style={{ width: '100%', maxHeight: 500, objectFit: 'cover', borderRadius: 12 }} />
        }
        actions={[
          <Button key='back'>
            <Link to='/'>Back</Link>
          </Button>,
        ]}
      >
        <Title level={2}>{movie.title}</Title>
        <Paragraph>
          <strong>Year:</strong> {movie.year}
        </Paragraph>
        <Paragraph>
          <strong>Type:</strong> {movie.type}
        </Paragraph>
        <Paragraph>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 4,
              flexWrap: 'nowrap',
              columnGap: 8,
            }}
          >
            <span style={{ fontWeight: 600 }}>Rating:</span>
            <Rate disabled allowHalf value={parseFloat(movie.rating) / 2} style={{ fontSize: 16, margin: 0 }} />
            <Text type='secondary'>{movie.rating}/10</Text>
          </div>
        </Paragraph>
        <Paragraph>
          <strong>IMDb ID:</strong> {movie.imdbId}
        </Paragraph>
      </Card>
    </div>
  )
}

export default MovieDetail
