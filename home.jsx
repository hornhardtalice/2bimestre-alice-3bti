import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Mundo Pokémon!</h1>
      <p>Use o menu para buscar e conhecer Pokémons incríveis.</p>
      <Link to="/pokemon" className="home-button">Explorar Pokémons</Link>
    </div>
  );
}

export default Home;
