import { GetServerSidePropsContext } from 'next';

import { PokemonDetail } from 'modules';
import { PokemonDetailProps } from 'types';

interface Props {
  pokemonDetail: PokemonDetailProps;
}

function PokemonDetailPage({ pokemonDetail }: Props) {
  console.log(pokemonDetail);
  return <PokemonDetail pokemonInfo={pokemonDetail} />;
}
export default PokemonDetailPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;

  const request = await fetch(`${process.env.POKEMON_API}/pokemon/${query.id}`);
  const response: Promise<PokemonDetailProps> = await request.json();

  console.log(response);

  return {
    props: {
      pokemonDetail: response,
    },
  };
}
