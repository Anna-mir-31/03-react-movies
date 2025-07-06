import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { fetchMoviesByQuery } from '../../services/movieService';
import type { Movie } from '../../types/movie';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';


export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const results = await fetchMoviesByQuery(query);
      setMovies(results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <MovieGrid movies={movies} />
      <Toaster position="top-right" />
    </div>
  );
}
