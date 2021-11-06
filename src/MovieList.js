import React, { useContext } from 'react';
import movies from './data';
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} title={movie.title} img={movie.img} />
      ))}
    </div>
  );
};

export default MovieList;
