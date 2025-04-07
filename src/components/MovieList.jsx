import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
      {movies.map((movie) => (
        <div key={movie.id} className="card bg-base-200 shadow-lg">
          <figure>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-t-lg"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-white text-center text-lg font-semibold">
              {movie.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;