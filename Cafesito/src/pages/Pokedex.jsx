import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ESSENTIAL IMPORT

function Pokedex() {
  const [search, setSearch] = useState('');
  const [pokemonFound, setPokemonFound] = useState(null);
  const [searchError, setSearchError] = useState(false);
  const [myPokemon, setMyPokemon] = useState([]);
  const navigate = useNavigate(); // NOW INSIDE COMPONENT

  useEffect(() => {
    // Read localStorage INSIDE effect for freshness
    if (!localStorage.getItem('trainer_current')) {
      navigate('/');
    }
    // loadMyPokemon(); // Uncomment when implemented
  }, [navigate]); // navigate is stable; satisfies ESLint

  const searchPokemon = async (e) => {
    e.preventDefault();
    setSearchError(false);
    setPokemonFound(null);
    if (!search) return;

    try {
      // FIXED URL: removed extra spaces + added lowercase normalization
      const sanitizedName = search.trim().toLowerCase();
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${sanitizedName}`
      );

      setPokemonFound({
        pokemon_name: response.data.name,
        pokemon_image: response.data.sprites.front_shiny,
        pokemon_type: response.data.types[0]?.type.name || 'unknown',
        pokemon_id: response.data.id
      });
    } catch (error) {
      console.error('Pokemon no encontrado:', error);
      setSearchError(true);
    }
  };

  // MINIMAL VALID JSX RETURN (customize as needed)
  return (
    <div>
      <h1>Pokédex</h1>
      <form onSubmit={searchPokemon}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar Pokémon..."
        />
        <button type="submit">Buscar</button>
      </form>
      {searchError && <p style={{ color: 'red' }}>Pokémon no encontrado</p>}
      {pokemonFound && (
        <div>
          <h2>{pokemonFound.pokemon_name}</h2>
          <img src={pokemonFound.pokemon_image} alt={pokemonFound.pokemon_name} />
          <p>Tipo: {pokemonFound.pokemon_type}</p>
        </div>
      )}
    </div>
  );
}

export default Pokedex;