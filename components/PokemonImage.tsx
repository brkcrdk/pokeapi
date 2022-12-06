interface ImageProps {
  pokemonIndex: string | number;
}

function PokemonImage({ pokemonIndex }: ImageProps) {
  return (
    <picture>
      <source
        srcSet={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
        type="image/webp"
        className="w-full max-w-md"
      />
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`}
        alt="Landscape picture"
        className="w-full max-w-md"
      />
    </picture>
  );
}
export default PokemonImage;
