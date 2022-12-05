import { GetServerSidePropsContext } from 'next';

import { PokemonList } from 'modules';
import { PokemonListProps } from 'types';

interface Props {
  pokemonList: PokemonListProps;
}

function Pokedex({ pokemonList }: Props) {
  return <PokemonList pokemonList={pokemonList} />;
}
export default Pokedex;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const request = await fetch(`${process.env.POKEMON_API}/pokemon?offset=0&limit=16`);
  const response = await request.json();

  return {
    props: {
      pokemonList: response,
    },
  };
}
