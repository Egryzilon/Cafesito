import axios from 'axios'
import { useEffect, useState } from 'react'

function Pokedex() {
  const [search, setSearch] = useState(''); // BUSQUEDA
  const [pokemonFound, setPokemonFound] = useState(null); // LISTA DE POKEMONES ENCONTRADOS
  const [searchError, setSearchError] = useState(false); // ERRO DE BUSQUEDA
  const [myPokemon, setMyPokemon] = useState([]); // MIS POKEMONES EN SUPABASE
}
const navigate = useNavigate();
// OBTENGO EL DATO DE LOCALSTORAGE
const trainer = localStorage.getItem('trainer_current');

useEffect(() => {
  //SINO HAY ENTRENADOR NO ACCEDO
  if (!trainer) navigate('/');
  //loadMyPokemon();
}, []);

// CONSUMO LA API DE POKEMON
const searchPokemon = async (e) => {
  e.preventDefault();
  setSearchError(false);
  setPokemonFound(null);

  if (!search) return;

  try {
    // LIMPIAMOS LO INGRESADO POR EL INPUT
    const sanitizedName = search.trim();
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${sanitizedName}`);

    // GUARDAMOS LOS DATOS OBTENIDOS DE LA API
    setPokemonFound({
      pokemon_name: response.data.name,
      pokemon_image: response.data.sprites.front_shiny, // PUEDES SELECCIONAR LA Q + TE AGRAD
      pokemon_type: response.data.types[0].type.name,   // CATEGORIA: FUEGO, AGUA, AIRE,
      pokemon_id: response.data.id
    });
  } catch (error) {
    console.error("Pokemon no encontrado:", error);
    setSearchError(true);
  }
};


export default Pokedex;