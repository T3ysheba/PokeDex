interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface IAbility {
  slot: number;
  is_hidden: boolean;
  ability: {
    name: string;
    url: string;
  };
}

interface IStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface ISprites {
  front_default: string | null;
  other?: {
    "official-artwork"?: {
      front_default: string | null;
    };
  };
}

export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: IPokemonType[];
  abilities: IAbility[];
  stats: IStat[];
  sprites: ISprites;
}
