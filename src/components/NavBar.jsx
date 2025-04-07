// src/components/NavBar.js
import React from 'react';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">Movie Search</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default NavBar;