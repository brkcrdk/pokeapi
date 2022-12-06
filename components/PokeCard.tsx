import Link from 'next/link';

import PokemonImage from './PokemonImage';

interface Props {
  pokemonInfo: {
    name: string;
    url: string;
  };
}

function PokeCard({ pokemonInfo }: Props) {
  const pokemonIndex = pokemonInfo.url.match(/\/(\d+)\//)?.[1];
  return (
    <Link
      href={`/pokemon/${pokemonIndex}`}
      passHref
    >
      <div className="text-indigo-400 shadow-md rounded-md border-indigo-600 hover:shadow-indigo-600 p-5 w-full cursor-pointer flex items-center justify-center flex-col text-center">
        <PokemonImage pokemonIndex={pokemonIndex as string} />
        <h1 className="">{pokemonInfo.name}</h1>
      </div>
    </Link>
  );
}
export default PokeCard;
