import React from 'react';
import MovieRow from '../components/MovieRow';

const dummySeries = [
  { id: 1, title: 'Series A', poster: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Series B', poster: 'https://via.placeholder.com/150' },
];

function Series() {
  return (
    <div>
      <MovieRow title="All Series" movies={dummySeries} />
    </div>
  );
}

export default Series;
