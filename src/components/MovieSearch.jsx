import React, { useState, useEffect } from 'react';
import movieApi from '../api/movieApi';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch default movies (e.g., popular movies) when the component mounts
  useEffect(() => {
    const fetchDefaultMovies = async () => {
      try {
        setLoading(true);
        const results = await movieApi.fetchPopularMovies(); // Fetch popular movies
        setMovies(results.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDefaultMovies();
  }, []);

  const handleSearch = async (query) => {
    if (!query) return;

    try {
      setLoading(true);
      setError(null);
      const results = await movieApi.fetchMovies(query);
      setMovies(results.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>My Movies World</h2>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default MovieSearch;