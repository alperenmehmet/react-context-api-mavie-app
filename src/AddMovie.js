import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [movies, setMovies] = useContext(MovieContext);
  console.log(movies);

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateImage = (e) => {
    setImg(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      { id: new Date().getTime().toString(), title: title, img: img },
    ]);
  };
  return (
    <form className='movie-container' onSubmit={addMovie}>
      <input
        type='text'
        name='title'
        value={title}
        onChange={updateTitle}
        placeholder='title'
      />
      <input
        type='text'
        name='img'
        value={img}
        onChange={updateImage}
        placeholder='img-url'
      />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
