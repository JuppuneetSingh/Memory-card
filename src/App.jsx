
import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon");
        }

        const data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            if (!response.ok) {
              throw new Error("Failed to fetch Pokémon details");
            }

            const details = await response.json();

            return {
              id: details.id,
              name: details.name,
              image: details.sprites.other["official-artwork"].front_default,
            };
          })
        );

        setPokemonList(pokemonDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();
  }, []);

  function shufflePokemon() {
    setPokemonList((prevList) => {
      const shuffled = [...prevList];

      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      return shuffled;
    });
  }

  function handleCardClick(id) {
    if (clickedPokemon.includes(id)) {
      setScore(0);
      setClickedPokemon([]);
    } else {
      const newScore = score + 1;

      setClickedPokemon([...clickedPokemon, id]);
      setScore(newScore);

      setBestScore((prev) => Math.max(prev, newScore));
    }

    shufflePokemon();
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Pokémon Memory Card</h1>
        <p>Click each Pokémon only once. Don't repeat!</p>

        <div className="scoreboard">
          <h2>Score: {score}</h2>
          <h2>Best Score: {bestScore}</h2>
        </div>
      </header>

      {loading && <p>Loading Pokémon...</p>}
      {error && <p>{error}</p>}

      <div className="card-container">
        {pokemonList.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
