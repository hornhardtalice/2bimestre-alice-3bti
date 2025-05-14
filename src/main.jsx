// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home.jsx';
import PokemonCard from './pokemoncard.jsx';
import './index.css'; // ou qualquer outro CSS que você esteja usando

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon" element={<PokemonCard />} />
    </Routes>
  </BrowserRouter>
);
