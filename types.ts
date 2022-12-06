export interface PokemonListProps {
  count: number;
  next: string | null;
  prev: string | null;
  results: { name: string; url: string }[];
}

export interface PokemonDetailProps {
  name: string;
}
