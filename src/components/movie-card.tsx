import { Card, Rate, Typography } from 'antd'
import { HeartOutlined, HeartFilled } from '@ant-design/icons'
import type { Movie } from '../types'
import { useMovieContext } from '../context/movie-context'
import { Link } from 'react-router-dom'

const { Meta } = Card

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
      cover={
        <Link to={`/movies/${movie.imdbId}`}>
          <img
            src={movie.poster}
            alt={movie.title}
            style={{
              height: 360,
              width: '100%',
              objectFit: 'cover',
              borderRadius: '4px 4px 0 0',
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
        title={<Link to={`/movies/${movie.imdbId}`}>{movie.title}</Link>}
        description={
          <>
            <div>{`${movie.year} • ${movie.type}`}</div>
            <div style={{ marginTop: 4 }}>
              <Rate disabled allowHalf value={parseFloat(movie.rating) / 2} />
              <Typography.Text type='secondary' style={{ marginLeft: 8 }}>
                {movie.rating}/10
              </Typography.Text>
            </div>
          </>
        }
      />{' '}
    </Card>
  )
}

export default MovieCard
