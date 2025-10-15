import React from 'react';
import Banner from '../components/Banner';
import MovieRow from '../components/MovieRow';

const dummyMovies = [
  { id: 1, title: 'Movie 1', poster: 'https://m.media-amazon.com/images/I/71ntZpru-4L._SL1500_.jpg', backdrop: 'https://via.placeholder.com/800x400', overview: 'Overview of movie 1' },
  { id: 2, title: 'Movie 2', poster: 'https://via.placeholder.com/150', backdrop: 'https://via.placeholder.com/800x400', overview: 'Overview of movie 2' },
  { id: 3, title: 'Movie 3', poster: 'https://via.placeholder.com/150', backdrop: 'https://via.placeholder.com/800x400', overview: 'Overview of movie 3' },
];

function Home() {
  return (
    <div>
      <Banner movie={dummyMovies[0]} />
      <MovieRow title="Popular Movies" movies={dummyMovies} />
      <MovieRow title="Top Rated" movies={dummyMovies} />
    </div>
  );
}

export default Home;
