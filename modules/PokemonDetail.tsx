import Link from 'next/link';

import { PokemonImage } from 'components';
import { PokemonDetailProps } from 'types';

interface Props {
  pokemonInfo: PokemonDetailProps;
}

function PokemonDetail({ pokemonInfo }: Props) {
  return (
    <section className="text-indigo-400 font-mono">
      <Link
        href="/"
        className="underline my-4"
      >
        Go Back
      </Link>
      <header className="flex gap-6 items-center">
        <PokemonImage
          className="w-40"
          pokemonIndex={pokemonInfo.id}
          customImage={pokemonInfo.sprites.front_default}
        />
        <PokemonImage
          className="w-40"
          pokemonIndex={pokemonInfo.id}
          customImage={pokemonInfo.sprites.back_default}
        />
        <h1 className="text-6xl capitalize">
          Name: <strong>{pokemonInfo.name}</strong>
        </h1>
      </header>

      {/* Basic Info */}
      <h3 className="text-xl underline font-bold">Basic Info</h3>
      <li>Height: {pokemonInfo.height}</li>
      <li>Weight: {pokemonInfo.weight}</li>
      <li>Base Experince: {pokemonInfo.base_experience}</li>

      {/* Abilities */}
      <h3 className="text-xl underline mt-4 mb-2 font-bold">Abilities</h3>
      {pokemonInfo.abilities.map(ability => (
        <li
          key={ability.ability.url}
          className="capitalize"
        >
          {ability.ability.name}
        </li>
      ))}

      {/* Species */}
      <h3 className="text-xl underline mt-4 mb-2 font-bold">Species</h3>
      <li>Name: {pokemonInfo.species.name}</li>

      {/* Stats */}
      <h3 className="text-xl underline mt-4 mb-2 font-bold">Stats</h3>
      <div className="flex gap-x-2 gap-y-2 flex-wrap">
        {pokemonInfo.stats.map(stat => (
          <span
            key={stat.stat.url}
            className="min-w-[70px] text-center text-sm p-1 bg-indigo-500 text-white rounded-md"
          >
            {stat.stat.name}
          </span>
        ))}
      </div>
      {/* Moves */}
      <h3 className="text-xl underline mt-4 mb-2 font-bold">Moves</h3>
      <div className="flex gap-x-2 gap-y-2 flex-wrap">
        {pokemonInfo.moves.map(move => (
          <span
            key={move.move.url}
            className="min-w-[70px] text-center text-sm p-1 bg-fuchsia-500 text-white rounded-md"
          >
            {move.move.name}
          </span>
        ))}
      </div>

      {/* Types */}
      <h3 className="text-xl underline mt-4 mb-2 font-bold">Types</h3>
      <div className="flex gap-x-2 gap-y-2 flex-wrap">
        {pokemonInfo.types.map(type => (
          <span
            key={type.type.url}
            className="min-w-[70px] text-center text-sm p-1 bg-emerald-500 text-white rounded-md"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </section>
  );
}
export default PokemonDetail;
