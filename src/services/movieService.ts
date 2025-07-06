import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Movie } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const TOKEN = import.meta.env.VITE_TMDB_TOKEN as string;

interface TMDBResponse {
  results: Movie[];
}

export async function fetchMoviesByQuery(query: string): Promise<Movie[]> {
  const config = {
    params: {
      query,
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const { data }: AxiosResponse<TMDBResponse> = await axios.get(BASE_URL, config);
  return data.results;
}
