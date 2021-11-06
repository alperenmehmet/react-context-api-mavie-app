import React from 'react';

const Movie = ({ title, img }) => {
  return (
    <div className='movie-container'>
      <h3>{title}</h3>
      <img src={img} />
    </div>
  );
};

export default Movie;
