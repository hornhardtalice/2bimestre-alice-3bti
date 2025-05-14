import React, { useState } from 'react';
import axios from 'axios';
import Detalhes from './Detalhes/Detalhes';

function PokemonCard() {
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      setPokemon(response.data);
      setError('');
    } catch (err) {
      setError('Pokémon não encontrado');
      setPokemon(null);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Projeto PokéAPI</h1>
      <h2>Buscar Pokémon</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite o nome do Pokémon"
      />
      <button onClick={fetchPokemon}>Buscar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {pokemon && (
        <div>
          <h3>{pokemon.name.toUpperCase()}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Tipo(s): {pokemon.types.map((typeInfo) => typeInfo.type.name).join(', ')}</p>
          <p>Altura: {pokemon.height / 10} metros</p>
          <p>Peso: {pokemon.weight / 10} kg</p>

          <h4>Habilidades:</h4>
          <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>

          <h4>Movimentos:</h4>
          <ul>
            {pokemon.moves.slice(0, 5).map((move, index) => (
              <li key={index}>{move.move.name}</li>
            ))}
          </ul>

          <Detalhes pokemon={pokemon} />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;

