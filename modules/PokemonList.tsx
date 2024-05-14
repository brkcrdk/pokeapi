import { useRouter } from 'next/router';

import { PokeCard, Pagination } from 'components';
import { PokemonListProps } from 'types';

interface Props {
  pokemonList: PokemonListProps;
}

function PokemonList({ pokemonList }: Props) {
  const { push, query } = useRouter();

  return (
    <main className="grid mx-auto">
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto my-5">
        {pokemonList.results.map(pokemon => (
          <li key={pokemon.name}>
            <PokeCard pokemonInfo={pokemon} />
          </li>
        ))}
      </ul>
      <Pagination
        onPageChange={e => push(`/?page=${e.selected + 1}`)}
        pageCount={Math.ceil(pokemonList.count / 16)}
        forcePage={Number(query.page) - 1}
      />
    </main>
  );
}
export default PokemonList;
