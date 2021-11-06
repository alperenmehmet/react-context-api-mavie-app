import React, { useState, createContext } from 'react';
import data from './data';
import MovieList from './MovieList';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState(data);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
