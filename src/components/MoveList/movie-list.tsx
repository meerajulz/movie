import React from "react";
import {Movie} from "../../interfaces/types";
import formatDate from "../../utils/format-date";

import MovieImage from '../UI/MovieImage/movie-image';
import Title from '../UI/Title/Title';
import RatingCircle from "../UI/RatingCircle/rating-circle";
import { StyleMovieScore } from "./move-list.styles";

interface MovieListProps {
  movies: Movie[];
  apiKey: string;
}


const MovieList: React.FC<MovieListProps> = ({ movies, apiKey }) => {

  return (
    <section className="w-full overflow-x-auto">
      <ul className="flex flex-row space-x-4 py-4" style={{ minWidth: '1000px' }}>
          {movies.map((movie: Movie) => (
            <li className="flex flex-col items-center space-y-2 min-w-[200px]" key={movie.id}>
             <div className="relative ">
                <MovieImage size='w500' apiKey={apiKey} filePath={movie.poster_path || ''} alt={movie.title} />
                <StyleMovieScore className="absolute ">
                  <RatingCircle score={movie.popularity ?? 0} maxScore={100} />
                </StyleMovieScore>
              </div>
             
             
              <Title text={movie.title} tag="h2" className="text-14px font-normal" display='inline'  />
              <p>{movie.release_date ? formatDate(movie.release_date) : 'N/A'}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default MovieList;

