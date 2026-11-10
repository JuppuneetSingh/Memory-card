
function Card({ pokemon, onClick }) {
  return (
    <div className="pokemon-card" onClick={() => onClick(pokemon.id)}>
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name.toUpperCase()}</h3>
    </div>
  );
}

export default Card;
