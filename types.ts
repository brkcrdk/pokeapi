export interface PokemonListProps {
  count: number;
  next: string | null;
  prev: string | null;
  results: { name: string; url: string }[];
}

export interface PokemonDetailProps {
  name: string;
  weight: number;
  height: number;
  id: number;
  is_default: boolean;
  base_experience: number | null;
  order: number;
  location_area_encounters: string;
  species: {
    name: string;
    url: string;
  };
  abilities: {
    is_hidden: boolean;
    slot: number;
    ability: {
      name: string;
      url: string;
    };
  }[];
  forms: {
    name: string;
    url: string;
  }[];
  game_indeces: {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }[];
  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }[];
  }[];
  sprites: {
    front_default: string;
    back_default: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}
