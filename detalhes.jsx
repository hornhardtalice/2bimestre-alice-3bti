// src/Detalhes/Detalhes.jsx
import React from 'react';

function Detalhes({ pokemon }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h3>Detalhes do Pokémon</h3>
      <h4>Estatísticas</h4>
      <ul>
        {pokemon.stats.map((stat, index) => (
          <li key={index}>
            <strong>{stat.stat.name}: </strong>{stat.base_stat}
          </li>
        ))}
      </ul>

      <h4>Evolução (se disponível)</h4>
      <p>Infelizmente, a evolução não está sendo exibida diretamente nesta API, mas podemos buscar evoluções em outra requisição.</p>
    </div>
  );
}

export default Detalhes;
