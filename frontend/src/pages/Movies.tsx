import React from 'react';
import MovieRow from '../components/MovieRow';

const dummyMovies = [
  { id: 1, title: 'Movie A', poster: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Movie B', poster: 'https://via.placeholder.com/150' },
];

function Movies() {
  return (
    <div>
      <MovieRow title="All Movies" movies={dummyMovies} />
    </div>
  );
}

export default Movies;
