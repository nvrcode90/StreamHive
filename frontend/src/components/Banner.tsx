import React from 'react';
import styles from '../styles/Banner.module.css';

// Define the type for the movie prop
interface Movie {
  title: string;
  overview: string;
  backdrop: string;
}

interface BannerProps {
  movie: Movie;
}

const Banner: React.FC<BannerProps> = ({ movie }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${movie.backdrop})` }} // fixed typo here
    >
      <div className={styles.content}>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <div className={styles.buttons}>
          <button>Play</button>
          <button>My List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
