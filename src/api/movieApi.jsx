import axios from 'axios';

const API_KEY = '9c361ece9f92f7b2fb598a8ca5a6ba92';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

const movieApi = {
  fetchMovies,
  fetchPopularMovies,
};

export default movieApi;