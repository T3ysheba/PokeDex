export type TGlobal = {
  pokemonList: {
    data: TPokemonData | null;
    error: unknown;
    isLoading: boolean;
  };
};

export type TPokemonData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    url: string;
    name: string;
  }[];
};
