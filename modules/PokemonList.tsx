import { PokeCard, Pagination } from 'components';
import { PokemonListProps } from 'types';

interface Props {
  pokemonList: PokemonListProps;
}

function PokemonList({ pokemonList }: Props) {
  return (
    <>
      <ul className="grid grid-cols-8 max-w-7xl mx-auto my-5">
        <li>
          <PokeCard />
        </li>
        <li>
          <PokeCard />
        </li>
        <li>
          <PokeCard />
        </li>
        <li>
          <PokeCard />
        </li>
        <li>
          <PokeCard />
        </li>
      </ul>
      <Pagination pageCount={pokemonList.count} />
    </>
  );
}
export default PokemonList;
