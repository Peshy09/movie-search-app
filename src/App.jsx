import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MovieSearch from './components/MovieSearch';
import Footer from './components/Footer';
import movieApi from './api/movieApi';

const App = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await movieApi.fetchMovies('Avengers');
                console.log(data); // Example: Log the fetched data
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <NavBar />
            <main className="content">
                <MovieSearch />
            </main>
            <Footer />
        </div>
    );
};

export default App;