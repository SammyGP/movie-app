import { Card, Rate, Typography } from 'antd'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import type { Movie } from '../types'
import { useMovieContext } from '../context/movie-context'
import { Link } from 'react-router-dom'

const { Meta } = Card
const { Text } = Typography

interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()

  const toggleFavorite = () => {
    if (isFavorite(movie.imdbId)) {
      removeFromFavorites(movie.imdbId)
    } else {
      addToFavorites(movie.imdbId)
    }
  }

  return (
    <Card
      hoverable
      style={{
        maxWidth: 300,
        margin: '0 auto',
        borderRadius: 12,
      }}
      bodyStyle={{ padding: 16 }}
      cover={
        <Link to={`/movies/${movie.imdbId}`}>
          <img
            alt={movie.title}
            src={movie.poster}
            style={{
              height: 360,
              objectFit: 'cover',
              borderRadius: '12px 12px 0 0',
              width: '100%',
            }}
          />
        </Link>
      }
      actions={[
        isFavorite(movie.imdbId) ? (
          <HeartFilled key='heart' onClick={toggleFavorite} style={{ color: 'red' }} />
        ) : (
          <HeartOutlined key='heart' onClick={toggleFavorite} />
        ),
      ]}
    >
      <Meta
        title={
          <Link to={`/movies/${movie.imdbId}`}>
            <Text strong>{movie.title}</Text>
          </Link>
        }
        description={
          <>
            <div style={{ fontSize: 12, color: '#888' }}>
              {movie.year} • {movie.type}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 6 }}>
              <div style={{ width: 80 }}>
                <Rate disabled allowHalf value={parseFloat(movie.rating) / 2} style={{ fontSize: 14, margin: 0 }} />
              </div>
              <Text type='secondary' style={{ marginLeft: 6, fontSize: 12 }}>
                {movie.rating}/10
              </Text>
            </div>
          </>
        }
      />
    </Card>
  )
}

export default MovieCard
