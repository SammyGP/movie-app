import { Input } from 'antd'
import { useState } from 'react'
import { useMovieContext } from '../context/movie-context'

const { Search } = Input

const SearchBar = () => {
  const { setSearchTerm } = useMovieContext()
  const [value, setValue] = useState('')

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  return (
    <div style={{ margin: '2rem auto', maxWidth: 600 }}>
      <Search
        placeholder='Search movies by title...'
        enterButton
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSearch={handleSearch}
        allowClear
      />
    </div>
  )
}

export default SearchBar
