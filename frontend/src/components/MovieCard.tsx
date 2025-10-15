import React from 'react';
import styles from '../styles/MovieCard.module.css';

// Define the type for the movie prop
interface Movie {
  title: string;
  poster: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={styles.card}>
      <img src={movie.poster} alt={movie.title} />
      <h4>{movie.title}</h4>
    </div>
  );
};

export default MovieCard;
