interface Props {
  pokemonInfo: {
    name: string;
    url: string;
  };
}
function PokeCard({ pokemonInfo }: Props) {
  const pokemonIndex = pokemonInfo.url;
  console.log(pokemonIndex);
  return (
    <div className="text-indigo-400 shadow-md rounded-md border-indigo-600 shadow-indigo-600 p-5">
      <picture>
        <source
          srcSet="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
          type="image/webp"
        />
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
          alt="Landscape picture"
        />
      </picture>
      <h1 className="card--name">{pokemonInfo.name}</h1>
      {/* <span className="card--details">{pokemonIndex}</span> */}
    </div>
  );
}
export default PokeCard;
