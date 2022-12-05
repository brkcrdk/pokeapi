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
  const { query } = context;
  let currentOffset = 16;

  if (query?.page) {
    currentOffset = (Number(query.page) - 1) * 16;
  } else {
    console.log('page yok');
    currentOffset = 0;
  }

  const request = await fetch(`${process.env.POKEMON_API}/pokemon?offset=${currentOffset}&limit=16`);
  const response = await request.json();

  console.log(response);

  return {
    props: {
      pokemonList: response,
    },
  };
}
