// src/components/NavBar.js
import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>MoviesApp</h1>
      <div>
        <a href="#latest-shows">Latest Shows</a>
        <a href="#favorites">Favorites</a>
        <a href="#top-rated">Top Rated</a>
      </div>
    </nav>
  );
};

export default NavBar;