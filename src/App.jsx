import React from 'react';
import NavBar from './components/NavBar';
import MovieSearch from './components/MovieSearch';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="dark bg-gray-900 text-white min-h-screen">
      <NavBar />
      <main className="content p-4">
        <MovieSearch />
      </main>
      <Footer />
    </div>
  );
};

export default App;