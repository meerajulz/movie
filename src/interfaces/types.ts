export interface Movie {
  id: number;
  title: string;
  release_date?: string;
  popularity?: number;
  poster_path?: string;
}

export interface TrendingMovies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

