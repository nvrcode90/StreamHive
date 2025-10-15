import React from 'react';
import MovieCard from './MovieCard';
import styles from '../styles/MovieRow.module.css';

// Define the type for a single movie
interface Movie {
  id: number;
  title: string;
  poster: string;
}

// Props for MovieRow
interface MovieRowProps {
  title: string;
  movies: Movie[];
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.rowPosters}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
