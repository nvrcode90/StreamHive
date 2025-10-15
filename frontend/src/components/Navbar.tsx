import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>OTT Platform</div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/series">Series</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
