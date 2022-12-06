import { useRouter } from 'next/router';

import { PokemonImage } from 'components';

function PokemonDetail() {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <PokemonImage pokemonIndex={String(query.id)} />
    </div>
  );
}
export default PokemonDetail;
